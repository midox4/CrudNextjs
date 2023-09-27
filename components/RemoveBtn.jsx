"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeData = async () => {
    const confirmed = confirm("Are you sure do you want delete data ?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/Datas?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeData} className="text-red-400 w-fit">
      <HiOutlineTrash
        size={24}
        className="hover:text-fuchsia-600 hover:scale-125"
      />
    </button>
  );
}
