import React from 'react';
import { AiFillEdit } from "react-icons/ai"
import { AiFillDelete } from "react-icons/ai"
import { MdOutlineDownloadDone } from "react-icons/md"

const TaskList = (props) => {

    const { title, details, id, handleEdit, status, handleDelete, handleComplete } = props;
    // console.log(title, details);

    return (
        <div className='bg-white rounded-lg drop-shadow-sm p-4'>
            <div>
                {/* <input className='text-[#7e104e] font-semibold text-xl mb-1 bg-white outline-none' type="text" value={title} disabled />
                <input className='bg-white outline-none mb-4' type="text" value={details} disabled /> */}
                <h5 className='text-[#7e104e] font-semibold text-xl mb-1'>{title}</h5>
                <p className='mb-4'>{details}</p>
                {/* <p className='mb-4'>{id}</p> */}
            </div>
            <div className='flex'>
                {/* <button onClick={() => { handleEdit(id, title, details) }} className='flex items-center text-sm hover:text-[#7e104e] mr-7'><AiFillEdit className='mr-1' /> Edit</button> */}

                {/* The button to open modal */}
                <label htmlFor="edit-task" onClick={() => { handleEdit(id, title, details) }} className='flex items-center text-sm hover:text-[#7e104e] mr-7 cursor-pointer'><AiFillEdit className='mr-1' /> Edit</label>

                <button onClick={() => { handleDelete(id) }} className='flex items-center text-sm hover:text-[#7e104e] mr-7'><AiFillDelete className='mr-1' /> Delete</button>
                <button onClick={() => { handleComplete(status) }} className='flex items-center text-sm hover:text-[#7e104e]'><MdOutlineDownloadDone className='mr-1' /> Mark as complete</button>
            </div>

        </div>
    );
};

export default TaskList;