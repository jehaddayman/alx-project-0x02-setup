// components/common/UserCard.tsx

import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-4 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-500 text-sm">
        {user.address.street}, {user.address.city}
      </p>
    </div>
  );
};

export default UserCard;
