// components/common/UserCard.tsx
import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard = ({ user }: { user: UserProps }) => {
  return (
    <div className="border rounded-xl shadow-md p-4">
      <h2 className="text-lg font-bold">{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
};

export default UserCard;
