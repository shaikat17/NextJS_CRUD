'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const EditTopicForm = ({id, title, description}) => {
    const router = useRouter()
    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch(`/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newTitle, newDescription })
            })
            if(!res.ok) {
                throw new Error("Failed to update the topic.")
            }
            router.refresh()
            router.push("/")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input type="text" onChange={e => setNewTitle(e.target.value)} value={newTitle} placeholder="Topic Title" className="border border-slate-500 px-8 py-2" />
            <input type="text" onChange={e => setNewDescription(e.target.value)} value={newDescription} placeholder="Topic Description" className="border border-slate-500 px-8 py-2" />
            <button className="bg-slate-800 text-white py-3 px-6 w-fit">Edit Topic</button>
        </form>
    );
};

export default EditTopicForm;