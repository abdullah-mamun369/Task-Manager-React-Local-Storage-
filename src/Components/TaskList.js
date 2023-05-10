import React from 'react';
import { AiFillEdit } from "react-icons/ai"
import { AiFillDelete } from "react-icons/ai"
import { MdOutlineDownloadDone } from "react-icons/md"
import { AiOutlineRollback } from "react-icons/ai"

const TaskList = (props) => {

    const { title, details, id, handleEdit, status, handleDelete, handleComplete } = props;
    // console.log(title, details);

    return (
        <>
            {
                status === false ?
                    <div className='bg-white rounded-lg drop-shadow-sm p-4'>

                        <div>
                            <h5 className='text-[#7e104e] font-semibold text-2xl mb-1'>{title}</h5>
                            <p className='mb-4'>{details}</p>
                        </div>

                        <div className='flex'>

                            {/* The button to open modal */}
                            <label htmlFor="edit-task" onClick={() => { handleEdit(id, title, details) }} className='flex items-center text-sm hover:text-[#7e104e] mr-7 cursor-pointer'><AiFillEdit className='mr-1' /> Edit</label>

                            <button onClick={() => { handleDelete(id) }} className='flex items-center text-sm hover:text-[#7e104e] mr-7'><AiFillDelete className='mr-1' /> Delete</button>
                            <button onClick={() => { handleComplete(status, id) }} className='flex items-center text-sm hover:text-[#7e104e]'><MdOutlineDownloadDone className='mr-1' /> Mark as complete</button>
                        </div>
                    </div>

                    :

                    <div className='bg-slate-200 rounded-lg drop-shadow-sm p-4'>
                        <div>
                            <h5 className='text-slate-400 font-semibold text-2xl mb-1 line-through'>{title}</h5>
                            <p className='text-slate-400 mb-4 line-through'>{details}</p>
                        </div>

                        <div className='flex'>
                            <button onClick={() => { handleDelete(id) }} className='flex items-center text-sm hover:text-[#7e104e] mr-7'><AiFillDelete className='mr-1' /> Delete</button>
                            <button onClick={() => { handleComplete(status, id) }} className='flex items-center text-sm hover:text-[#7e104e]'><AiOutlineRollback className='mr-1' /> Back to work</button>
                        </div>
                    </div>
            }
        </>
    );
};

export default TaskList;