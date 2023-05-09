import { useEffect, useState } from 'react';
// import Calendar from 'react-calendar';
import { AiOutlinePlus } from "react-icons/ai"
// import { AiFillEdit } from "react-icons/ai"
// import { AiFillDelete } from "react-icons/ai"
// import { MdOutlineDownloadDone } from "react-icons/md"
// import { BsThreeDotsVertical } from "react-icons/bs"
import TaskList from './TaskList';

const AddTask = () => {
    // const [value, onChange] = useState(new Date());



    // Task Input section show and hide

    const [addBtnClicked, setAddBtnClicked] = useState(false);
    const [taskList, setTaskList] = useState(false);


    const handleAddTask = () => {
        setAddBtnClicked(!addBtnClicked);
    };

    // Get Task From Local Storage

    const [tasks, setTasks] = useState();

    useEffect(() => {
        const getTask = JSON.parse(localStorage.getItem("task"))
        setTasks(getTask);
    }, [])

    // const getPreviousTaskFromLocalStorage = () => {
    //     const getTask = JSON.parse(localStorage.getItem("task"))
    //     setTasks(getTask);
    // }

    // getPreviousTaskFromLocalStorage();


    // console.log(tasks);

    // Take the input value and set to the task board

    const [title, setTitle] = useState();
    const [details, setDetails] = useState();
    // const [existingTitle, setExistingTitle] = useState();
    // const [existingDetails, setExistingDetails] = useState();
    const [existingId, setExistingId] = useState();


    //   get previous Local storage value

    const getTaskFromLocalStorage = () => {
        let savedTask = localStorage.getItem("task")
        let arrayTask = [];

        if (savedTask) {
            arrayTask = JSON.parse(savedTask)
        }
        return arrayTask;

    }
    const getIdFromLocalStorage = () => {
        let savedId = localStorage.getItem("id")
        let ObjectId = 1

        if (savedId) {
            ObjectId = JSON.parse(savedId)
        }
        return ObjectId;

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

        const id = getIdFromLocalStorage();

        // console.log(id);





        let newId = id + 1;
        const idStringified = JSON.stringify(newId)
        localStorage.setItem("id", idStringified);

        // console.log(newId);

        const task = {
            id: newId,
            title: inputedTitle,
            details: inputedDetails,
            status: false
        };

        arrayTask.push(task);
        const arrayStringified = JSON.stringify(arrayTask)



        localStorage.setItem("task", arrayStringified);


        const getTask = JSON.parse(localStorage.getItem("task"))
        setTasks(getTask);

    }


    const handleEdit = (id, title, details, e) => {

        // setExistingTitle(title)
        // setExistingDetails(details)
        setExistingId(id)
        console.log(existingId, id, title, details);
    }


    const handleUpdateTask = (e) => {
        e.preventDefault();
        const newInputedTitle = e.target.updatedTitle.value;
        const newInputedDetails = e.target.updatedDetails.value;

        console.log(existingId);

        let selectedTask = tasks.filter((task => {
            return task.id === existingId;
        }))

        console.log(selectedTask);

        const indexOfSelectedTask = tasks.indexOf(selectedTask)

        const existingTask = tasks[indexOfSelectedTask + 1]

        console.log(existingTask);
        // console.log(selectedTask, indexOfSelectedTask, tasks);



        selectedTask.title = newInputedTitle
        selectedTask.details = newInputedDetails;

        const updatedTaskStringified = JSON.stringify(tasks)



        localStorage.setItem("task", updatedTaskStringified);


        const getTask = JSON.parse(localStorage.getItem("task"))
        setTasks(getTask);

        // console.log(allTasks, selectedTask, newInputedTitle, newInputedDetails);


    }

    const handleDelete = (id) => {
        console.log(id);


        const filteredTask = tasks.filter((task => {
            return task.id !== id;
        }))

        console.log(filteredTask);

        setTasks(filteredTask);

        const updatedTaskStringified = JSON.stringify(filteredTask)


        localStorage.setItem("task", updatedTaskStringified);

    }




    const handleComplete = (status) => {
        console.log(status);
    }

    return (

        <div>
            <div className='bg-white rounded-lg drop-shadow-sm lg:w-1/3 mx-auto p-4 mt-10'>
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
                <div className=' rounded-lg drop-shadow-sm grid grid-cols-4 gap-5'>
                    {/* {taskList === true &&
                        <div className='bg-white rounded-lg drop-shadow-sm p-4'>
                            <div>
                                <h5 className='text-[#7e104e] font-semibold text-xl mb-1'>{title}</h5>
                                <p className='mb-4'>{details}</p>
                            </div>
                            <div className='flex'>
                                <button className='flex items-center text-sm hover:text-[#7e104e] mr-7'><AiFillEdit className='mr-1' /> Edit</button>
                                <button className='flex items-center text-sm hover:text-[#7e104e] mr-7'><AiFillDelete className='mr-1' /> Delete</button>
                                <button className='flex items-center text-sm hover:text-[#7e104e]'><MdOutlineDownloadDone className='mr-1' /> Mark as complete</button>
                            </div>
                        </div>

                    } */}
                    {tasks &&
                        tasks.map(task => <TaskList
                            key={task.id}
                            title={task.title}
                            details={task.details}
                            id={task.id}
                            status={task.status}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                            handleComplete={handleComplete}
                        ></TaskList>)
                    }


                </div>
            </div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="edit-task" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="edit-task" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className=' p-4'>
                        <form onSubmit={handleUpdateTask}>
                            <input className='border-none outline-none w-full' name="updatedTitle" type="text" placeholder="New Title" />
                            <input className='border-none outline-none text-sm w-full mb-5' name="updatedDetails" type="text" placeholder="New Details" />
                            <button><label htmlFor="edit-task" className="bg-[#7e104e] text-white px-3 rounded mt-2 py-1">Update</label></button>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default AddTask;