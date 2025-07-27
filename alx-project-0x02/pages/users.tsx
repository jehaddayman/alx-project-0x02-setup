// pages/users.tsx
import React from 'react';
import { UserCard } from '@/components/common/UserCard';
import { type UserProps } from '@/interfaces';

type UsersPageProps = {
  users: UserProps[];
};

const UsersPage = ({ users }: UsersPageProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;
