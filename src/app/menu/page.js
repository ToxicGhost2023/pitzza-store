import Menu from "@/models/Menu";
import MenuPaublibkPage from "@/template/MenuPublickPage";
import connectDB from "@/utils/connectDB";

async function MenuPublick() {
  await connectDB();
  const menu = await Menu.find();

  return <MenuPaublibkPage menu={JSON.parse(JSON.stringify(menu))} />;
}

export default MenuPublick;
