import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const DashboardPage = async () => {
  const session = getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Welcome To Dashboard Page</h1>
    </div>
  );
};

export default DashboardPage;
