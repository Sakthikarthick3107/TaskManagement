import  {useState , createContext , useContext, useEffect} from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const[theme , setTheme] = useState(null);

   useEffect(()=>{
    const bg = localStorage.getItem('theme');
    if(bg){
        setTheme(bg);
    }
    else{
        localStorage.setItem('theme' , 'light')
    }
   },[])

    
    
    const [tasks , setTasks] =useState([{"id":1,"name":"fusce","description":"Proin interdum mauris non ligula pellentesque ultrices.","assign":"Babu","priority":"P1","status":"In Progress","start_date":"1/20/2024","due_date":"7/26/2023"},
    {"id":2,"name":"in leo","description":"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.","assign":"Sachin","priority":"P0","status":"Completed","start_date":"1/18/2024","due_date":"2/25/2024"},
    {"id":3,"name":"justo sollicitudin","description":"In hac habitasse platea dictumst. Etiam faucibus cursus urna.","assign":"Charles","priority":"P2","status":"Deffered","start_date":"1/28/2024","due_date":"4/26/2023"},
    {"id":4,"name":"nibh in","description":"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.","assign":"Babu","priority":"P0","status":"Deffered","start_date":"1/26/2024","due_date":"2/7/2024"},
    {"id":5,"name":"donec","description":"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.","assign":"Daniel","priority":"P2","status":"Assigned","start_date":"1/23/2024","due_date":"6/13/2023"},
    {"id":6,"name":"varius","description":"Nunc rhoncus dui vel sem.","assign":"Elango","priority":"P1","status":"Deployed","start_date":"1/16/2024","due_date":"9/24/2023"},
    {"id":7,"name":"pellentesque ultrices","description":"Vivamus vel nulla eget eros elementum pellentesque.","assign":"Charles","priority":"P2","status":"Assigned","start_date":"1/10/2024","due_date":"1/28/2024"},
    {"id":8,"name":"nec","description":"Fusce consequat.","assign":"Charles","priority":"P1","status":"Deployed","start_date":"1/22/2024","due_date":"5/29/2023"},
    {"id":9,"name":"parturient montes","description":"In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.","assign":"Charles","priority":"P1","status":"Deffered","start_date":"1/9/2024","due_date":"4/18/2023"},
    {"id":10,"name":"natoque penatibus","description":"Maecenas tincidunt lacus at velit.","assign":"Sachin","priority":"P1","status":"Completed","start_date":"1/8/2024","due_date":"1/31/2024"},
    {"id":11,"name":"ut at","description":"In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","assign":"Daniel","priority":"P1","status":"Assigned","start_date":"1/26/2024","due_date":"3/25/2023"},
    {"id":12,"name":"a feugiat","description":"Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.","assign":"Elango","priority":"P1","status":"Completed","start_date":"1/13/2024","due_date":"9/28/2023"},
    {"id":13,"name":"erat fermentum","description":"Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.","assign":"Sachin","priority":"P0","status":"Deployed","start_date":"1/1/2024","due_date":"12/25/2023"},
    {"id":14,"name":"a","description":"Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.","assign":"Akash","priority":"P1","status":"Deffered","start_date":"1/19/2024","due_date":"12/24/2023"},
    {"id":15,"name":"vestibulum aliquet","description":"Nulla ut erat id mauris vulputate elementum. Nullam varius.","assign":"Babu","priority":"P0","status":"Assigned","start_date":"1/10/2024","due_date":"9/9/2023"},
    {"id":16,"name":"eu","description":"Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.","assign":"Daniel","priority":"P1","status":"Completed","start_date":"1/7/2024","due_date":"2/6/2023"},
    {"id":17,"name":"vivamus vel","description":"Duis mattis egestas metus.","assign":"Babu","priority":"P2","status":"In Progress","start_date":"1/25/2024","due_date":"7/12/2023"},
    {"id":18,"name":"luctus","description":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.","assign":"Charles","priority":"P0","status":"Deployed","start_date":"1/29/2024","due_date":"8/10/2023"},
    {"id":19,"name":"odio cras","description":"Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.","assign":"Daniel","priority":"P1","status":"Completed","start_date":"1/14/2024","due_date":"12/6/2023"},
    {"id":20,"name":"at dolor","description":"Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.","assign":"Daniel","priority":"P2","status":"Deployed","start_date":"1/22/2024","due_date":"6/28/2023"}]
    )
    const priority = ['P0' , 'P1' , 'P2'];
    const status = [
        {name:'Assigned' , color : '#8C8B90'} , 
        {name :'In Progress' , color : '#E89922'} , 
        {name : 'Completed' , color : '#41AA1C'} , 
        {name : 'Deployed' , color : '#353976' }, 
        {name : 'Deffered' , color :'#F58872'}] 
    
    const members = ['Akash','Babu','Charles','Daniel','Elango','Sachin']
    const toggleTheme = () =>{
        setTheme((prev )=> prev === 'light' ? 'dark' : 'light');
        console.log(theme)
    }

    const addNewTask = (task)=>{
        console.log(task)
        const updated = [ task , ...tasks];
        setTasks(updated);
    }

    const updateTask = (id,newPriority , newStatus) =>{
        const updatedTasks = tasks.map((task) =>{
            if(task.id === id){
                return{...task ,   priority : newPriority , status:newStatus};
            }
            return task;
        });
        setTasks(updatedTasks)
    }

    const deleteTask = (id) =>{
        const removedTask = tasks.filter((task) => task.id !== id);
        setTasks(removedTask);
    }


    return(
        <GlobalContext.Provider value={{theme,toggleTheme , tasks , priority,members , status ,addNewTask, updateTask , deleteTask}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(GlobalContext);
  };