import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import { AiOutlinePlus } from "react-icons/ai"
import { BsThreeDotsVertical } from "react-icons/bs"
import { TbSquareRounded } from "react-icons/tb"
import { BiCheck } from "react-icons/bi"

const AddTask = () => {
    const [value, onChange] = useState(new Date());
    const handleAddTask = () => {

    }


    return (
        <div className='grid grid-cols-5 gap-5 mt-10 mx-10'>
            <div className='bg-white p-4 rounded-lg drop-shadow-md'>
                <div className='mb-6 flex justify-between'>
                    <h4 className='text-[#7e104e] font-semibold text-xl'>My Tasks</h4>

                    <div className="dropdown dropdown-right">
                        <button tabIndex={0} className=''><BsThreeDotsVertical /></button>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-60">
                            <li><a href='/'>Will be added very Soon</a></li>
                        </ul>
                    </div>
                </div>
                <button onClick={handleAddTask} className='hover:text-[#7e104e] flex items-center mx-4 mb-2'><span className='mr-2'><AiOutlinePlus /></span>Add a task</button>
                <div className='bg-slate-100 p-4'>
                    <div className='flex justify-between'>
                        <div>
                            <input className='bg-slate-100 border-none outline-none' type="text" placeholder='Title' />
                            <input className='bg-slate-100 border-none outline-none text-sm' type="text" placeholder='Details' />
                        </div>
                        <div>
                            <BsThreeDotsVertical />
                        </div>
                    </div>


                </div>
            </div>
            <div className='flex items-center'>
                <button className='flex items-center text-sm font-semibold text-slate-400'><span className='mr-2'><AiOutlinePlus /></span>Add new list</button>
            </div>
        </div>
    );
};

export default AddTask;