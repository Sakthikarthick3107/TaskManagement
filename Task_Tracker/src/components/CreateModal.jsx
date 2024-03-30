import { useEffect, useRef, useState } from "react";
import { useTheme } from "../GlobalContext";


const CreateModal = ({ isOpen, onClose}) => {
    const wrapperRef = useRef(null);
    const [minDate, setMinDate] = useState('');
    const{tasks,theme , addNewTask , priority , members} = useTheme();
    const[isSubmit , setIsSubmit] = useState(false);

    const[newTask , setNewTask] = useState({id: tasks.length + 1,
                                            name: "",
                                            description:"",
                                            assign: "",
                                            priority: "",
                                            status: "Assigned",
                                            start_date:minDate,
                                            due_date:  ""
                                          })
    const reset = () =>{
      const arr = {id: tasks.length + 1,
        name: "",
        description:"",
        assign: "",
        priority: "",
        status: "Assigned",
        start_date:minDate,
        due_date:  ""
      }
      setNewTask(arr);
    }
    
    useEffect(()=>{
      const{name , description , assign , priority  , due_date} = newTask;
      if(name !== "" && description !== "" && assign !== "" && priority !== "" , due_date !== ""){
        setIsSubmit(true);
      }
    },[newTask])

      const handleNewTaskData = (e) =>{
        const { name, value } = e.target;
        setNewTask((prevTask) =>({
          ...prevTask,
          [name] : value
        }))
      }

      const newTaskInclude = () =>{
        addNewTask(newTask);
        onClose(false);
        reset()
        
      }

    useEffect(() => {
        
        const today = new Date().toISOString().split('T')[0];
        setMinDate(today);
      }, []);

    useEffect(() => {
      function handleClickOutside(event) {

        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          onClose(false);
        }
      }
  

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
  
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    

    if (!isOpen) return null;
  
    return (
      <div  className={`fixed  inset-0 z-50 bg-light-modalBg text-light-text bg-opacity-50 flex justify-center items-center`}>
        <div ref={wrapperRef} className={`bg-light-bgcolor w-[360px] p-4 rounded-lg shadow-lg flex flex-col items-center gap-2`}>
          <div className="w-full flex flex-row items-center justify-between border-b-2">
            <h2 className="text-xl">New Task</h2>
            <button
            className="text-2xl font-bold text-red-500"
            onClick={()=>onClose(!isOpen)}
            >
            &times;
            </button>
          </div>

          <div className="flex flex-col w-full my-1"> 
            <p>Title</p>
            <input name="name" value={newTask.name} onChange={handleNewTaskData} placeholder="Task name" className={`bg-light-card backdrop-blur-md shadow-md p-1 text-sm outline-none `} />
          </div>

          <div className="flex flex-col w-full my-1"> 
            <p>Description</p>
            <textarea name="description" value={newTask.description} onChange={handleNewTaskData}   rows={6} placeholder="Task Description" className={`bg-light-card backdrop-blur-md shadow-md p-1 text-sm outline-none `}/>
          </div>
          
          <div className="flex flex-col w-full my-1"> 
            <p>Assign to</p>
            <select name="assign" value={newTask.assign} onChange={handleNewTaskData} className={`bg-btn text-white shadow-lg outline-none px-2`}>
              <option className={`bg-light-box text-light-text`} value="">-- Select --</option>
                {members.map((item,index) => (
                  <option className={`bg-light-box text-light-text`} value={item} key={index}>{item}</option>
                ))}
              </select>
          </div>

          <div className="flex flex-row items-center justify-between w-full my-1"> 
            <div className="flex flex-row gap-1 items-center">
              <p>Priority</p>
              <select name="priority" value={newTask.priority} onChange={handleNewTaskData} className={`bg-btn text-white shadow-lg outline-none px-2`}>
                <option className={`bg-light-box text-light-text`} value="">-- Select --</option>
                {priority.map((item,index) => (
                  <option className={`bg-light-box text-light-text`} value={item} key={index}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center w-full my-1">
                <p>Due date</p>
                <input name="due_date" value={newTask.due_date} onChange={handleNewTaskData} type="date" className={`text-light-text`} min={minDate} />
        </div>
          
        <div className="flex flex-row items-center justify-between w-full my-1 gap-2"> 
            <button  disabled={!isSubmit} onClick={newTaskInclude}
             className={`bg-btn ${!isSubmit && 'cursor-not-allowed'} w-full text-white p-1 my-2 hover:bg-btn/70`}
            >
                CREATE</button>
                <button   onClick={reset}
             className={`bg-light-box text-light-text w-full  p-1 my-2`}
            >
                Reset</button> 
        
        </div>
          
        </div>
      </div>
      
    );
  };
  
  export default CreateModal;
  