export interface IUserData {
  name: string;
  address: string;
  contact: number;
  email: string;
  gender: string;
}

export interface IGetUserData extends IUserData {
  id: number;
}
