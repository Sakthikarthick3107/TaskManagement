import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../GlobalContext';
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';

const TaskCard = ({task}) => {
  const[isMenuOpen , setIsMenuOpen] = useState(false);
  const wrapperRef = useRef(null);
  const[isEdit , setIsEdit] = useState(false);
  const[isDelete,setIsDelete] = useState(false);
  const {theme} = useTheme();

  useEffect(() => {
    function handleClickOutside(event) {
      // If the click is outside the wrapper, close the menu
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
    <div ref={wrapperRef} className={`relative mb-2 flex flex-col w-[95%] itemx-center bg-light-card p-2 flex-wrap`}>
        <div className="flex  flex-row w-full justify-between items-center border-b-2">
            <p>{task.name}</p>
            <p className='bg-btn rounded-full text-white p-1 text-xs'>{task.priority}</p>
        </div>
        <p className='text-xs my-1 text-wrap'>{task.description}</p>
        <div className="flex  flex-row w-full justify-between items-center">
          <p className='text-sm font-semibold'>@{task.assign}</p>
          <EllipsisVerticalIcon onClick={()=>setIsMenuOpen(!isMenuOpen)} className={`h-4 w-4 text-light-text  cursor-pointer`} />
          {isMenuOpen && (
        <div
          className={`origin-top-right absolute z-30 right-0 mt-2 w-1/2 rounded-md shadow-lg bg-light-bgcolor  ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="flex flex-col" role="none">
            <button onClick={()=>setIsEdit(true)} className={`text-left w-full hover:bg-light-box p-1`}>Edit</button>
            <button onClick={()=>setIsDelete(true)} className={`text-left w-full hover:bg-light-box p-1`}>Delete</button>
          </div>
        </div>
      )}
        </div>
        
    </div>
    <EditModal isOpen={isEdit} onClose={setIsEdit} task={task} />
    <DeleteModal isOpen={isDelete} onClose={setIsDelete} task={task}/>
    </>
  )
}

export default TaskCard