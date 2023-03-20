/*reducers.ts*/

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Create = "CREATE_PRODUCT",
  Delete = "DELETE_PRODUCT",
  Add = "ADD_PRODUCT",
  AddUser = "ADD_USER",
}

// Product

export type ProductType = {
  id: number;
  name: string;
  price: number;
};

type ProductPayload = {
  [Types.Create]: {
    id: number;
    name: string;
    price: number;
  };
  [Types.Delete]: {
    id: number;
  };
};

export type ProductActions =
  ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const productReducer = (
  state: ProductType[],
  action: ProductActions | UserActions
) => {
  switch (action.type) {
    case Types.Create:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
        },
      ];
    case Types.Delete:
      return [...state.filter((product) => product.id !== action.payload.id)];
    default:
      return state;
  }
};

// User

export type UserType = {
  id?: number;
  name?: string;
};

type UserPayload = {
  [Types.AddUser]: undefined;
};

export type UserActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];

export const userReducer = (
  state: UserType,
  action: ProductActions | UserActions
) => {
  switch (action.type) {
    case Types.AddUser:
      return state;
    default:
      return state;
  }
};
