import { useEffect, useState } from "react"
import {useTheme} from "./GlobalContext"
import TaskCard from "./components/TaskCard"
import CreateModal from "./components/CreateModal";


function App() {
  const{theme , toggleTheme , tasks , status , priority} = useTheme()
  const[todos , setTodos] = useState(tasks);
  const[selectPriority , setSelectedPriority] = useState("");
  const[sortBy,setSortBy] = useState("");
  const[isOpen , setisOpen] = useState(false);

  const sortTasksByPriority = () => {
    const priorityOrder = {'P2': 2, 'P1': 1, 'P0': 0};
    const sortedTasks = [...tasks].sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
    setTodos(sortedTasks);
  };

  const sortTasksByDueDate = () => {
    const sortedTasks = [...tasks].sort((a, b) => {
      const [dayA, monthA, yearA] = a.due_date.split('-').map(num => parseInt(num, 10));
      const [dayB, monthB, yearB] = b.due_date.split('-').map(num => parseInt(num, 10));
      const dateA = new Date(yearA, monthA - 1, dayA);
      const dateB = new Date(yearB, monthB - 1, dayB);

      return dateA - dateB;
    });
    setTodos(sortedTasks);
  };
  useEffect(()=>{
    if(sortBy !== ""){
      if(sortBy === 'Priority'){
        sortTasksByPriority();
      }
      else if(sortBy === 'Due Date'){
        sortTasksByDueDate();
      }
    }
    else{
      setTodos(tasks);
    }
  },[sortBy , tasks])

  useEffect(()=>{
    if(selectPriority !== ""){
      const op = [...tasks]
      setTodos(op.filter((todo) => todo.priority === selectPriority))
    }
    else{
      setTodos(tasks)
    }

  },[selectPriority,tasks])
  return (
      <>
      <CreateModal  isOpen={isOpen} onClose={setisOpen}/>
      <div className={`min-h-[100vh] w-[100vw] bg-light-bgcolor text-light-text
                        flex flex-col items-center justify-center`}>
        {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
        <p className="text-2xl font-bold">Task Board</p>
        <div className={`bg-light-box backdrop-blur-md  w-[95vw] min-h-[80vh] shadow-md p-4 rounded-md flex flex-col items-stretch`}>
          
          <div className="flex flex-col md:flex-row  items-center w-full justify-between my-2 gap-2">
            <div className="flex flex-col items-stretch md:flex-row  gap-2">
              <p>Filter by:</p>
              <input type="text" name="Employee" placeholder="Assignee" className={`bg-light-bgcolor shadow-md outline-none px-2 py-1`} />
              <select value={selectPriority} onChange={(e)=>setSelectedPriority(e.target.value)} 
                    className={` bg-light-bgcolor outline-none mx-2 text-light-text px-2 py-1 shadow-md`} name="priority" >
                <option value="" className={`bg-light-bgcolor text-light-text`}>-- Priority --</option>
                {priority.map((prior , ind) =>(
                  <option className={`bg-light-bgcolor text-light-text`} value={prior} key={ind}>{prior}</option>
                ))}
              </select>
            </div>
            <div>
                <button onClick={()=>setisOpen(true)} className={`bg-btn hover:bg-btn/80 text-white px-2 py-1`}>Add New Task</button>
            </div>
          </div>
              
          <div className="flex flex-row items-center w-full my-2">
            <p>Sort by</p>
            <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} className=" bg-btn outline-none mx-2 text-white" name="priority" >
              <option value="" className={`bg-light-bgcolor text-light-text`}>-- Select --</option>
              <option value="Priority" className={`bg-light-bgcolor text-light-text`}>Priority</option>
              <option value="Due Date" className={`bg-light-bgcolor text-light-text`}>Due Date</option>
              {/* {priority.map((prior , ind) =>(
                <option className={`bg-light-bgcolor text-light-text`} value={prior} key={ind}>{prior}</option>
              ))} */}
              
            </select>
          </div>
          
          <div className="overflow-x-auto w-full">
            <div className="flex flex-row items-center gap-2 min-w-[1024px]">
              {status.map((st,index)=>(
                <div className="w-full  h-[70vh] border brder-black rounded-md overflow-y-auto task-scrollbar flex flex-col items-center" key={index}>
                  <p  style={{ backgroundColor: st.color }} className={`w-full text-center p-2 text-white sticky top-0 z-20`}>{st.name}</p>
                  {todos.filter(task => task.status === st.name).map((item,ind)=>(
                    <TaskCard task={item} key={ind}/>
                  ))}
                </div>
              ))}

            </div>
          </div>
        </div>
      </div> 
   
      </>
  )
}

export default App
