import React, { useEffect, useState } from 'react';
import { User } from '../../types/User';
import { List } from './List';

export const ListContainer: React.FC = () => {
  const [users, setUsers] = useState([] as User[]);

  useEffect(() => {
    const requestData = async () => {
      const response = await fetch('/data/users.json');
      const data: User[] = await response.json();

      setUsers(data);
    }

    requestData();
  }, []);

  return <List data={users} />;
};
