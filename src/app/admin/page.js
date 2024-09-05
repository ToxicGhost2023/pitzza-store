import UserLand from "@/models/UserLand";
import AdminPage from "@/template/AdminPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authoptions } from "../api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";

async function Admin() {
  await connectDB();
  const session = await getServerSession(authoptions);

  if (!session) redirect("/signin");

  const user = await UserLand.findOne({ email: session.user.email });

  if (user.role !== "ADMIN") redirect("/");
  return <AdminPage />;
}

export default Admin;
