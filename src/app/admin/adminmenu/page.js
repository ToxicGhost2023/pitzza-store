import Menu from "@/models/Menu";

import MyMenuAdmin from "@/template/MyMenuAdmin";
import connectDB from "@/utils/connectDB";

async function AdminMenu() {
  await connectDB();

  const menu = await Menu.find();
 

  return <MyMenuAdmin menu={menu} />;
}

export default AdminMenu;
