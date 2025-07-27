// pages/users.tsx
import React from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

type UsersPageProps = {
  users: User[];
};

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="border p-2 rounded">
            <p><strong>{user.name}</strong></p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;
