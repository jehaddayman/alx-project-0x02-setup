const HomePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
    </div>
  );
};

export default HomePage;
import Card from "@/components/common/Card";

const HomePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>

      <Card title="Getting Started" content="This is your first reusable card component in Next.js." />
      <Card title="ALX Rocks!" content="This card proves you're learning reusable components like a pro." />
      <Card title="Next Step" content="Try adding images, buttons, or icons to the card!" />
    </div>
  );
};

export default HomePage;
