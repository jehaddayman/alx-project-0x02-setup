// Example interface
export interface User {
  id: number;
  name: string;
  email: string;
}
export interface CardProps {
  title: string;
  content: string;
}
export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  label: string;
}
export interface PostProps {
  userId: number;
  title: string;
  content: string;
}
export interface UserProps {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
     id: number;
     phone: string;
  };
}
// interfaces/index.ts
export interface PostProps {
  id: number;
  title: string;
  content: string;
}
