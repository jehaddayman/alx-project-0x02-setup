import { type UserProps } from "@/interfaces";

const UserCard = ({ name, email, address }: UserProps) => (
  <div className="border p-4 mb-4 rounded shadow">
    <h2 className="font-bold text-lg">{name}</h2>
    <p>Email: {email}</p>
    <p>Address: {address.street}, {address.city}</p>
  </div>
);

export default UserCard;
