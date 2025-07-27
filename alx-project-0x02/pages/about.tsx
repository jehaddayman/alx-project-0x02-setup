import Button from "@/components/common/Button";

const AboutPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <div className="flex gap-4">
        <Button size="small" shape="rounded-sm" label="Small" />
        <Button size="medium" shape="rounded-md" label="Medium" />
        <Button size="large" shape="rounded-full" label="Large" />
      </div>
    </div>
  );
};

export default AboutPage;
