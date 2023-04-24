import React from 'react';
import { AiOutlinePlus } from "react-icons/ai"
import { BsThreeDotsVertical } from "react-icons/bs"

const AddTask = () => {
    return (
        <div className='grid grid-cols-5 gap-5 mt-10 mx-10'>
            <div className='bg-white p-4 rounded-lg drop-shadow-md '>
                <div className='mb-6 flex justify-between'>
                    <h4 className='text-[#7e104e] font-semibold text-xl'>My Tasks</h4>

                    <div className="dropdown dropdown-right">
                        <button tabIndex={0} className=''><BsThreeDotsVertical /></button>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-60">
                            <li><a href='/'>Will be added very Soon</a></li>
                        </ul>
                    </div>
                </div>
                <button className='hover:text-[#7e104e] flex items-center'><span className='mr-2'><AiOutlinePlus /></span>Add a task</button>
            </div>

            <button className='flex items-center justify-center h-[60px] w-full rounded-lg bg-slate-50 text-sm  hover:text-[#7e104e] text-slate-400 hover:font-semibold'><span className='mr-2'><AiOutlinePlus /></span>Add new list</button>

        </div>
    );
};

export default AddTask;