"use client";
// interactivity with client
import { useState } from "react";
import { useRouter } from "next/navigation";
const AddData = () => {
  //console.log('hi')
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("title and description are required ");
      return;
    }
    try {
      await fetch("http://localhost:3000/api/Datas", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      router.refresh();
      router.push('/')
//       if (res.ok) {
//         router.refresh();


// //        return res.json()
//       } else {
//         throw new Error("Failed to create a dataa");
//       }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="font-bold py-4 "> Adding information </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 ">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border border-x-sky-400 px-8 py-2"
          type="text"
          placeholder="Data Title"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="border border-slate-500 px-8 py-2 "
          type="text"
          placeholder="Data Description"
        />
        <button
          type="submit"
          className="bg-green-400  font-bold text-white py-3 px-6 "
        >
          Add Data
        </button>
      </form>
    </>
  );
};

export default AddData;
