import  {useState , createContext , useContext, useEffect} from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const[theme , setTheme] = useState('light');
    
    const tasks = [{"name":"aenean sit","description":"Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.","assign":"Ralph","priority":"P1","status":"Completed","start_date":"11/1/2023","due_date":"8/1/2023"},
    {"name":"accumsan tortor quis turpis","description":"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.","assign":"Gabriella","priority":"P1","status":"Assigned","start_date":"1/24/2024","due_date":"3/7/2024"},
    {"name":"nisl duis","description":"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","assign":"Marena","priority":"P2","status":"Assigned","start_date":"1/21/2024","due_date":"12/24/2023"},
    {"name":"diam in magna bibendum","description":"Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.","assign":"Grace","priority":"P1","status":"Assigned","start_date":"7/27/2023","due_date":"12/30/2023"},
    {"name":"consectetuer adipiscing","description":"In congue. Etiam justo. Etiam pretium iaculis justo.","assign":"Emmett","priority":"P2","status":"Assigned","start_date":"8/8/2023","due_date":"6/2/2023"},
    {"name":"sem duis aliquam","description":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.","assign":"Oren","priority":"P0","status":"Deployed","start_date":"5/25/2023","due_date":"10/21/2023"},
    {"name":"ut rhoncus","description":"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","assign":"Cull","priority":"P2","status":"Deployed","start_date":"8/20/2023","due_date":"12/3/2023"},
    {"name":"velit nec","description":"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.","assign":"Mellisent","priority":"P2","status":"Deployed","start_date":"12/9/2023","due_date":"12/30/2023"},
    {"name":"consectetuer adipiscing","description":"Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.","assign":"Gordan","priority":"P2","status":"Assigned","start_date":"6/5/2023","due_date":"9/6/2023"},
    {"name":"potenti in","description":"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.","assign":"Eziechiele","priority":"P2","status":"Deferred","start_date":"2/23/2024","due_date":"12/23/2023"},
    {"name":"suspendisse potenti cras","description":"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.","assign":"Louella","priority":"P0","status":"Assigned","start_date":"8/27/2023","due_date":"5/13/2023"},
    {"name":"vivamus tortor duis","description":"Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.","assign":"Stormy","priority":"P1","status":"Assigned","start_date":"1/31/2024","due_date":"8/3/2023"},
    {"name":"luctus et ultrices","description":"Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.","assign":"Merrielle","priority":"P2","status":"In Progress","start_date":"3/31/2023","due_date":"7/9/2023"},
    {"name":"venenatis lacinia aenean sit","description":"Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.","assign":"Von","priority":"P0","status":"Deployed","start_date":"3/7/2024","due_date":"12/9/2023"},
    {"name":"id ligula","description":"Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.","assign":"Lief","priority":"P0","status":"Assigned","start_date":"7/11/2023","due_date":"6/26/2023"},
    {"name":"feugiat non pretium quis","description":"Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.","assign":"Kathryne","priority":"P0","status":"Deferred","start_date":"7/24/2023","due_date":"7/17/2023"},
    {"name":"cras non velit nec","description":"In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.","assign":"Frasier","priority":"P1","status":"In Progress","start_date":"9/4/2023","due_date":"5/15/2023"},
    {"name":"amet cursus id turpis","description":"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.","assign":"Amargo","priority":"P0","status":"Completed","start_date":"8/16/2023","due_date":"11/24/2023"},
    {"name":"lacinia erat vestibulum","description":"Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.","assign":"Kaia","priority":"P2","status":"Deferred","start_date":"7/7/2023","due_date":"8/3/2023"},
    {"name":"ut erat curabitur","description":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.","assign":"Tina","priority":"P0","status":"Deffered","start_date":"6/29/2023","due_date":"12/3/2023"}]

    const priority = ['P0' , 'P1' , 'P2'];
    const status = [
        {name:'Assigned' , color : '#8C8B90'} , 
        {name :'In Progress' , color : '#E89922'} , 
        {name : 'Completed' , color : '#41AA1C'} , 
        {name : 'Deployed' , color : '#353976' }, 
        {name : 'Deffered' , color :'#F58872'}] 
    const toggleTheme = () =>{
        setTheme((prev )=> prev === 'light' ? 'dark' : 'light');
        console.log(theme)
    }


    return(
        <GlobalContext.Provider value={{theme,toggleTheme , tasks , priority , status}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(GlobalContext);
  };