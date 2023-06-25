import React from 'react';

const EditTopicForm = () => {
    return (
        <form className="flex flex-col gap-3">
            <input type="text" placeholder="Topic Title" className="border border-slate-500 px-8 py-2" />
            <input type="text" placeholder="Topic Description" className="border border-slate-500 px-8 py-2" />
            <button className="bg-slate-800 text-white py-3 px-6 w-fit">Edit Topic</button>
        </form>
    );
};

export default EditTopicForm;