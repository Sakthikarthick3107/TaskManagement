import { useEffect, useRef, useState } from "react";
import { useTheme } from "../GlobalContext";

// EditModal.js
const EditModal = ({ isOpen, onClose , task }) => {
    const wrapperRef = useRef(null);
    const{status,priority , updateTask , theme} = useTheme();
    const[newStatus,setStatus] = useState(task.status);
    const[newPriority , setPriority] = useState(task.priority);

    useEffect(() => {
      function handleClickOutside(event) {
        // If the click is outside the wrapper, close the menu
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          onClose(false);
        }
      }
  
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    const taskUpdation = () =>{
      updateTask(task.id , newPriority , newStatus);
      setPriority(task.priority);
      setStatus(task.status);
      onClose(false)
    }

    if (!isOpen) return null;
  
    return (
      <div  className={`fixed inset-0 z-50 bg-light-modalBg bg-opacity-50 flex justify-center items-center`}>
        <div ref={wrapperRef} className={`bg-light-bgcolor w-[360px] p-4 rounded-lg shadow-lg flex flex-col items-center gap-2`}>
          <div className="w-full flex flex-row items-center justify-between border-b-2">
            <h2 className="text-xl">Edit Task</h2>
            <button
            className="text-2xl font-bold text-red-500"
            onClick={()=>onClose(!isOpen)}
            >
            &times;
            </button>
          </div>

          <div className="flex flex-col w-full my-1"> 
            <p>Title</p>
            <p className={`bg-light-card backdrop-blur-md shadow-md p-1 text-sm`}>{task.name}</p>
          </div>

          <div className="flex flex-col w-full my-1"> 
            <p>Description</p>
            <p className={`bg-light-card backdrop-blur-md shadow-md p-1 text-sm`}>{task.description}</p>
          </div>
          
          <div className="flex flex-col w-full my-1"> 
            <p>Assignee</p>
            <p className={`bg-light-card backdrop-blur-md shadow-md p-1 text-sm`}>{task.assign}</p>
          </div>

          <div className="flex flex-row items-center justify-between w-full my-1"> 
            <div className="flex flex-row gap-1 items-center">
              <p>Priority</p>
              <select value={newPriority} onChange={(e)=>setPriority(e.target.value)} className={`bg-btn text-white shadow-lg outline-none px-2`}>
                {priority.map((item,index) => (
                  <option className={`bg-light-box text-light-text`} value={item} key={index}>{item}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <p>Status</p>
              <select value={newStatus} onChange={(e)=>setStatus(e.target.value)} className={`bg-btn text-white shadow-lg outline-none px-2`}>
                {status.map((item,index) => (
                  <option className={`bg-light-box text-light-text`} value={item.name} key={index}>{item.name}</option>
                ))}
              </select>
            </div>
          </div>
          
          <button onClick={taskUpdation} className={`${priority !== newPriority  &&'bg-btn' } w-full text-white p-1 my-2`}>Submit</button>
        </div>
      </div>
    );
  };
  
  export default EditModal;
  