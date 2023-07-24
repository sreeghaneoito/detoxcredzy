export type userDetails = {
  display_name?: string;
  email?: {
    address: string;
  };
  ssn?: string;
  name?: {
    first: string;
    last: string;
  };
  dob?: string;
  phone?: {
    number: string;
  };
};
