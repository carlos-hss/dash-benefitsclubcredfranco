type IRegisterUserProps = {
  name: string;
  email: string;
  password: string;
  type_user: string;
  points: string | null;
  status: string;
};

type ISignInProps = {
  email: string;
  password: string;
};

type IAuthContext = {
  isAuthenticated: boolean;
  user: IUser | null;
  registerUser: (data: IRegisterUserProps) => Promise<void>;
  signIn: (data: ISignInProps, type_permitted: string) => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  recoverUserInformation: () => void;
};
