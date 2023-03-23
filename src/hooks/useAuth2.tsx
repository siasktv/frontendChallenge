import * as React from "react";
import { delay, MOCK_DELAY } from "../utils/delay";
import { db } from "../store/db";

type AC = {
  loggedIn: boolean | null;
  isAuthenticated: () => Promise<boolean>;
  signIn: (args: { email: string }) => Promise<any>;
  answerCustomChallenge: (email: string, answer: string) => Promise<boolean>;
  signOut: () => Promise<void>;
};

export const AuthContext = React.createContext<AC>({
  loggedIn: null,
  isAuthenticated: () => Promise.resolve(false),
  signIn: () => Promise.resolve(null),
  answerCustomChallenge: () => Promise.resolve(true),
  signOut: () => Promise.resolve(),
});

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = (props: AuthProviderProps) => {
  const [loggedIn, setLoggedIn] = React.useState<AC["loggedIn"]>(null);

  const isAuthenticated = React.useCallback(async () => {
    try {
      const isAuthenticated = localStorage.getItem("isAuthenticated");
      return isAuthenticated === "true";
    } catch (error) {
      return false;
    }
  }, []);

  React.useEffect(() => {
    isAuthenticated().then((res) => setLoggedIn(res));
  }, [isAuthenticated]);

  const signIn = React.useCallback(async ({ email }: { email: string }) => {
    delay(MOCK_DELAY);
    await db.users.add({
      id: new Date().getTime().toString(),
      email: email,
    });
    localStorage.setItem("isAuthenticated", "true");
    return true;
  }, []);

  const answerCustomChallenge = async (email: string, answer: string) => {
    setLoggedIn(true);
    return isAuthenticated();
  };

  const signOut = React.useCallback(async () => {
    setLoggedIn(false);
    localStorage.setItem("isAuthenticated", "false");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        isAuthenticated,
        signIn,
        answerCustomChallenge,
        signOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
