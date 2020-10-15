import React from "react";
import { User } from "../../types/User";
import "./List.css";

interface ListProps {
  data: User[];
}

export const List: React.FC<ListProps> = (props) => {
  return <pre>{JSON.stringify(props.data, null, 2)}</pre>;
};
