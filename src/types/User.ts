import { Friend } from "./Friend"

export type User = {
  _id: string;
  index: number;
  guid: string;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  eyeColor: string;
  name: {
    first: string;
    last: string;
  },
  company: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  registered: string;
  latitude: string;
  longitude: string;
  tags: string[];
  range: number[];
  friends: Friend[];
  greeting: string;
  favoriteFruit: string;
};
