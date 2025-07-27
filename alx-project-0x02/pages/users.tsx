import { useEffect, useState } from "react";
import UserCard from "@/components/common/UserCard";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Users</h1>
      {users.map((user, idx) => (
        <UserCard key={idx} name={user.name} email={user.email} address={user.address} />
      ))}
    </div>
  );
};

export default UsersPage;
