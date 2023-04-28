import React from 'react';
import { AiFillEdit } from "react-icons/ai"
import { AiFillDelete } from "react-icons/ai"
import { MdOutlineDownloadDone } from "react-icons/md"

const TaskList = (props) => {

    const { title, details } = props;
    console.log(title, details);

    return (
        <div className='bg-white rounded-lg drop-shadow-md p-4'>
            <div>
                <h5 className='text-[#7e104e] font-semibold text-xl mb-1'>{title}</h5>
                <p className='mb-4'>{details}</p>
            </div>
            <div className='flex'>
                <button className='flex items-center text-sm hover:text-[#7e104e] mr-7'><AiFillEdit className='mr-1' /> Edit</button>
                <button className='flex items-center text-sm hover:text-[#7e104e] mr-7'><AiFillDelete className='mr-1' /> Delete</button>
                <button className='flex items-center text-sm hover:text-[#7e104e]'><MdOutlineDownloadDone className='mr-1' /> Complete</button>
            </div>
        </div>
    );
};

export default TaskList;