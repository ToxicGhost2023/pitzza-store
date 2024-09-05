"use client";


import { useRouter } from "next/navigation";

function ButtonLinkMenu({ data }) {
  
  const router = useRouter();
  const detailsHansler = () => {
    router.push(`/details/${data._id}`);
  };

  return (
    <div className="flex justify-between">
      <button
        onClick={detailsHansler}
        className="bg-y1 text-black p-[5px] rounded-xl hover:bg-yellow-600"
      >
        بیشتر...
      </button>
    </div>
  );
}

export default ButtonLinkMenu;
