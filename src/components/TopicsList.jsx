import React from "react";
import RemoveBTN from "./RemoveBTN";
import Link from "next/link";
import { FaPencilAlt } from "react-icons/fa";

const getTopic = async () => {
  try {
    const res = await fetch(`${process.env.host_url}api/topics`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const TopicsList = async () => {
  const { topics } = await getTopic();
  return (
    <>
      {topics.map((topic) => {
        return (
          <div
            className="p-4 border border-slate-300 my-3 flex justify-between"
            key={topic._id}
          >
            <div>
              <h1 className="font-black text-2xl">{topic.title}</h1>
              <p>{topic.description}</p>
            </div>
            <div className="flex gap-4">
              <RemoveBTN id={topic._id} />
              <Link href={`/edit/${topic._id}`}>
                <FaPencilAlt size={24} />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TopicsList;
