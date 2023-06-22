type IUpdateUserResponse = {
  data: {
    user: IUser;
    token: string;
    message: string;
  }
}

type IUsersResponse = {
  data: {
    users: IUser[];
  }
}