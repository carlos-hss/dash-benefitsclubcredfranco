type IUser = {
  id: string;
  name: string;
  email: string;
  type_user: string;
  points: number;
  status: string;
  created_at: string;
  updated_at: string;
};

type IRegisterResponse = {
  data: {
    token: string;
    user: IUser;
    message: string;
  };
};

type ILoginResponse = {
  data: {
    token: string;
    user: IUser;
    message: string;
  };
};

type IRecoverResponse = {
  data: {
    user: IUser;
    message: string;
  };
}