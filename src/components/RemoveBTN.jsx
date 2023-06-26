"use client"
import { useRouter } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";

const RemoveBTN = ({ id }) => {
  const router = useRouter()
  const removeTopic = async () => {
    // console.log(id)
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if(res.ok) {
        router.refresh()
      }
    }
  };
  return (
    <div onClick={removeTopic} className="text-red-500 cursor-pointer">
      <FaTrashAlt size={24} />
    </div>
  );
};

export default RemoveBTN;
