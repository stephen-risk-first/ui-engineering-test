import * as React from "react";
import { useEffect, useState } from "react";
import { User } from "../../types/User";
import { Table } from "./Table";

export const TableContainer: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const requestData = async () => {
      const response = await fetch("/data/users.json");
      const data: User[] = await response.json();

      setUsers(data);
    };

    requestData();
  }, []);

  return <Table data={users} />;
};
