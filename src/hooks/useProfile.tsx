import * as React from "react";
import { Profile } from "../interfaces/profile";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../store/db";
import { IndexableType } from "dexie";
import { delay, MOCK_DELAY } from "../utils/delay";

type PC = {
  loading: boolean;
  profile?: Profile;
  createProfile: (profile: Profile) => Promise<IndexableType>;
  updateProfile: (profile: Profile) => Promise<IndexableType>;
  deleteProfile: (profile: Profile) => Promise<void>;
};

const createProfile = async (profile: Profile): Promise<IndexableType> => {
  delay(MOCK_DELAY);
  return await db.profiles.add({
    id: profile.id,
    firstName: profile.firstName,
    lastName: profile.lastName,
  });
};

const updateProfile = async (profile: Profile): Promise<IndexableType> => {
  delay(MOCK_DELAY);
  return await db.profiles.update(profile.id, {
    firstName: profile.firstName,
    lastName: profile.lastName,
  });
};

const deleteProfile = async (profile: Profile): Promise<void> => {
  delay(MOCK_DELAY);
  await db.profiles.delete(profile.id);
};

export const ProfileContext = React.createContext<PC>({
  loading: true,
  profile: undefined,
  createProfile,
  updateProfile,
  deleteProfile,
});

type ProfileProviderProps = {
  id: number;
  children: React.ReactNode;
};

const ProfileProvider = (props: ProfileProviderProps) => {
  const [loading, setLoading] = React.useState(true);
  const profile = useLiveQuery(async () => {
    delay(MOCK_DELAY);
    return await db.profiles.get(props.id);
  }, [props.id]);

  if (profile) {
    setLoading(false);
  }

  return (
    <ProfileContext.Provider
      value={{
        loading,
        profile,
        createProfile,
        updateProfile,
        deleteProfile,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

const useProfile = () => React.useContext(ProfileContext);

export { ProfileProvider, useProfile };
