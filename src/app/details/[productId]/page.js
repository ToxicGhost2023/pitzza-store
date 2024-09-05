import Menu from "@/models/Menu";
import LikeButton from "@/module/LikeButton";
import connectDB from "@/utils/connectDB";
import Image from "next/image";
import { FcShop } from "react-icons/fc";

async function ProductId({ params: { productId } }) {
  await connectDB();
  const product = await Menu.findById(productId);

  return (
    <div className="border backdrop-blur m-[20px] border-y1 p-[50px] rounded-2xl">
      <h1 className="text-y1 mb-[30px]">{product.title}</h1>
      <div>
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="w-[200px] h-[200px] rounded-xl"
        />
      </div>
      <p className="text-y1">قیمت: {product.price}</p>
      <p className="text-y1">توضیحات: {product.recipe}</p>
      <LikeButton />
    </div>
  );
}

export default ProductId;
