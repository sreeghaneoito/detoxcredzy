export interface Login {
  email: string;
  password: string;
}
export interface RegisterUser {
  email: string;
  firstname: string;
  lastname: string;
}
export interface RegisterPassword {
  token: string;
  password: string;
}

export interface UpdatePassword {
  password: string;
}
export interface Logout {
  usertoken: string;
}
