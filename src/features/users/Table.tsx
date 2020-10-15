import * as React from "react";
import { User } from "../../types/User";
import "./Table.css";

interface TableProps {
  data: User[];
}

export const Table: React.FC<TableProps> = (props) => {
  return <pre>{JSON.stringify(props.data, null, 2)}</pre>;
};
