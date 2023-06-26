"use client";

import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;

    if (!title || !description) {
      alert("Title and Description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic. ");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="flex flex-col gap-3" onSubmit={(e) => handleFormSubmit(e)}>
      <input
        type="text"
        name="title"
        placeholder="Topic Title"
        className="border border-slate-500 px-8 py-2"
      />
      <input
        type="text"
        name="description"
        placeholder="Topic Description"
        className="border border-slate-500 px-8 py-2"
      />
      <button className="bg-slate-800 text-white py-3 px-6 w-fit">
        Add Topic
      </button>
    </form>
  );
};

export default page;
