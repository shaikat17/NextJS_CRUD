import React from 'react';
import RemoveBTN from './RemoveBTN';
import Link from 'next/link';
import {FaPencilAlt} from "react-icons/fa"

const getTopic

const TopicsList = () => {
    return (
        <div className='p-4 border border-slate-300 my-3 flex justify-between'>
            <div>
                <h1 className='font-black text-2xl'>Topic Title</h1>
                <p>topic description</p>
            </div>
            <div className='flex gap-4'>
                <RemoveBTN />
                <Link href={"/edit/233"}>
                <FaPencilAlt size={24} />
                </Link>
            </div>
        </div>
    );
};

export default TopicsList;