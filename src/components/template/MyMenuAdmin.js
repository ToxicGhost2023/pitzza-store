import Image from "next/image";

function MyMenuAdmin({ menu }) {
  const { title, recipe, price, image } = menu;
  return (
    <div className=" backdrop-blur-3xl rounded-sm">
      {menu.length ? null : <p>هیچ اگهی ثبت نشده</p>}
      <div>
        <div>
          {image && (
            <Image
              src={image}
              alt={title}
              width={200}
              height={200}
              className="w-[200px] h-[200px] rounded-xl"
            />
          )}
        </div>
        <div className=" overflow-hidden  whitespace-nowrap text-ellipsis text-y1 w-[200px]">
          {recipe}
        </div>
      </div>
    </div>
  );
}

export default MyMenuAdmin;
