import { useEffect, useRef, useState } from "react";
import { useTheme } from "../GlobalContext";

// DeleteModal.js
const DeleteModal = ({ isOpen, onClose , task }) => {
    const wrapperRef = useRef(null);
    const{deleteTask , theme} = useTheme();

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

    const taskDeletion = () =>{
      deleteTask(task.id);
      onClose(false);
    }

    if (!isOpen) return null;
  
    return (
      <div  className={`fixed inset-0 z-50 bg-light-modalBg bg-opacity-50 flex justify-center items-center`}>
        <div ref={wrapperRef} className={`bg-light-bgcolor w-[360px] p-4 rounded-lg shadow-lg flex flex-col items-center gap-2`}>
          <div className="w-full flex flex-row items-center justify-between border-b-2">
            <h2 className="text-xl">Delete Task</h2>
            <button
            className="text-2xl font-bold text-red-500"
            onClick={()=>onClose(!isOpen)}
            >
            &times;
            </button>
          </div>
        
        <p>Are you sure to delete task - {task.name}?</p>
          <button onClick={taskDeletion} className="bg-btn w-full text-white p-1 my-2">Delete</button>
        </div>
      </div>
    );
  };
  
  export default DeleteModal;
  