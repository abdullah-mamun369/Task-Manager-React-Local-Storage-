// import React, { useEffect } from 'react';
import { useState } from 'react';
// import Calendar from 'react-calendar';
import { AiOutlinePlus } from "react-icons/ai"
// import { BsThreeDotsVertical } from "react-icons/bs"
import TaskList from './TaskList';
// import { TbSquareRounded } from "react-icons/tb"
// import { BiCheck } from "react-icons/bi"

const AddTask = () => {
    // const [value, onChange] = useState(new Date());



    // Task Input section show and hide

    const [addBtnClicked, setAddBtnClicked] = useState(false);
    const [taskList, setTaskList] = useState(false);

    // useEffect(() => {
    // }, [addBtnClicked])

    const handleAddTask = () => {
        setAddBtnClicked(!addBtnClicked);
    };



    // Take the input value and set to the task board

    const [title, setTitle] = useState();
    const [details, setDetails] = useState();


    //   get previous Local storage value

    const getTaskFromLocalStorage = () => {
        let savedTask = localStorage.getItem("task")
        let arrayTask = [];

        if (savedTask) {
            arrayTask = JSON.parse(savedTask)
        }
        return arrayTask;

    }

    const handleTakeInputValue = (e) => {

        e.preventDefault();
        const inputedTitle = e.target.title.value;
        const inputedDetails = e.target.details.value;
        setTitle(inputedTitle);
        setDetails(inputedDetails);

        setAddBtnClicked(false);
        setTaskList(true);

        // set task to local storage

        const arrayTask = getTaskFromLocalStorage();

        const task = {
            id: 1,
            title: inputedTitle,
            details: inputedDetails,
            status: false
        };

        arrayTask.push(task);
        const arrayStringified = JSON.stringify(arrayTask)


        localStorage.setItem("task", arrayStringified);

    }

    return (

        <div>
            <div className='bg-white rounded-lg drop-shadow-sm lg:w-1/3 mx-auto p-4 mt-5'>
                <div className=' flex justify-between '>
                    <h4 className='text-[#7e104e] font-semibold text-xl'>Add a task</h4>

                    {/* <div className="dropdown dropdown-right">
                        <button tabIndex={0} className=''><BsThreeDotsVertical /></button>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-60">
                            <li><a href='/'>Will be added very Soon</a></li>
                        </ul>
                    </div> */}
                </div>
                <button onClick={handleAddTask} className='hover:text-[#7e104e] flex items-center mx-4 mb-2'><span className='mr-2'><AiOutlinePlus /></span>Add a task</button>
                {addBtnClicked === true &&
                    <div className='bg-slate-100 p-4'>
                        <form onSubmit={handleTakeInputValue}>
                            <input className='bg-slate-100 border-none outline-none w-full' name="title" type="text" placeholder='Title' />
                            <input className='bg-slate-100 border-none outline-none text-sm w-full' name="details" type="text" placeholder='Details' />
                            <button className='bg-[#7e104e] text-white px-3 rounded mt-2 text-xs py-1'>Add Task</button>
                        </form>
                    </div>
                }
            </div>

            <div className='grid mt-10 mx-10'>
                <div className='mx-auto'>
                    <h4 className='text-[#7e104e] font-bold text-2xl mb-5'>My Tasks</h4>
                </div>
                <div className=' rounded-lg drop-shadow-sm grid grid-cols-5'>

                    {taskList === true &&
                        <TaskList
                            title={title}
                            details={details}
                        ></TaskList>
                    }
                </div>
            </div>
        </div>

    );
};

export default AddTask;