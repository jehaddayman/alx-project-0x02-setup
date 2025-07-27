// pages/users.tsx
import { GetStaticProps } from 'next';
import { UserProps } from '../interfaces';
import UserCard from '../components/common/UserCard';

type Props = {
  users: UserProps[];
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

const UsersPage = ({ users }: Props) => {
  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersPage;
