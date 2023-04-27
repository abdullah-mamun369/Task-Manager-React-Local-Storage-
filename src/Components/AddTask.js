import React, { useEffect } from 'react';
import { useState } from 'react';
// import Calendar from 'react-calendar';
import { AiOutlinePlus } from "react-icons/ai"
import { BsThreeDotsVertical } from "react-icons/bs"
// import { TbSquareRounded } from "react-icons/tb"
// import { BiCheck } from "react-icons/bi"

const AddTask = () => {
    // const [value, onChange] = useState(new Date());


    const [addBtnClicked, setAddBtnClicked] = useState(false);

    useEffect(() => {
        console.log(`isToggled is now ${addBtnClicked}`);
    }, [addBtnClicked])

    const handleAddTask = () => {
        setAddBtnClicked(!addBtnClicked);
    };

    const handleAddedTask = () => {
        setAddBtnClicked(false);
    };

    return (
        <div className='grid grid-cols-5 gap-5 mt-10 mx-10'>
            <div className='bg-white rounded-lg drop-shadow-md'>
                <div className='mb-6 mx-4 mt-4 flex justify-between'>
                    <h4 className='text-[#7e104e] font-semibold text-xl'>Add a task</h4>

                    <div className="dropdown dropdown-right">
                        <button tabIndex={0} className=''><BsThreeDotsVertical /></button>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-60">
                            <li><a href='/'>Will be added very Soon</a></li>
                        </ul>
                    </div>
                </div>
                <button onClick={handleAddTask} className='hover:text-[#7e104e] flex items-center mx-4 mb-2'><span className='mr-2'><AiOutlinePlus /></span>Add a task</button>
                {addBtnClicked === true &&
                    <div className='bg-slate-100 p-4'>
                        <div className='flex justify-between'>
                            <div>
                                <input className='bg-slate-100 border-none outline-none' type="text" placeholder='Title' />
                                <input className='bg-slate-100 border-none outline-none text-sm' type="text" placeholder='Details' />
                                <button onClick={handleAddedTask} className='bg-[#7e104e] text-white px-3 rounded mt-2 text-xs py-1'>Add Task</button>
                            </div>
                            <div>
                                <BsThreeDotsVertical />
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className='col-span-4 grid'>
                <div className='mx-auto'>
                    <h4 className='text-[#7e104e] font-bold text-2xl'>My Tasks</h4>
                </div>
                <div className=' rounded-lg drop-shadow-md grid grid-cols-4'>

                </div>

            </div>

        </div>
    );
};

export default AddTask;