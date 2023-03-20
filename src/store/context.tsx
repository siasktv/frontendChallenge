import React, { createContext, useReducer, Dispatch } from "react";
import {
  productReducer,
  userReducer,
  ProductActions,
  UserActions,
  ProductType,
  UserType,
} from "./reducers";

type InitialStateType = {
  products: ProductType[];
  user: UserType;
};

const initialState = {
  products: [],
  user: {},
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ProductActions | UserActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { products, user }: InitialStateType,
  action: ProductActions | UserActions
) => ({
  products: productReducer(products, action),
  user: userReducer(user, action),
});

export interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
