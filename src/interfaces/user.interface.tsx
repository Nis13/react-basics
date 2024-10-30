export interface IUserData {
  name: string;
  address: string;
  contact: string;
  email: string;
  gender: string;
}

export interface IGetUserData extends IUserData {
  id: number;
}
