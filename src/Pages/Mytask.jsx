import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";

import { UserContext } from "../Authcontext/Authcontext";

const Mytask = () => {
  const {user} = useContext(UserContext);
  
  const {data:myTask , isLoading , refetch} = useQuery({
    queryKey:["task"],
    queryFn: async()=>{
      const res = await fetch(`http://localhost:5000/task/${user?.email}`);
      const data = await res.json();
      return data
    }
  })

 const deleteTask =(id)=>{
        fetch(`http://localhost:5000/deletetask/${id}` , {
          method: 'DELETE',
          
        })
        .then(res => res.json())
        .then(data=>{
          if(data.deletedCount > 0){
            alert("deleted")
            refetch()
            
        }
          
        })
 }



  if (isLoading) {
    return (
      <div className="mx-auto w-16 h-16 border-4 border-dashed rounded-full t animate-spin border-primary"></div>
    );

    //delete_Task
  
  }
  return (
    <div className="mx-auto max-w-[780px] px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl mb-20">
        My All Task
      </h1>
      <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
        <div className="flex items-center">
         

          <div className="ml-3">
            <h3 className="text-lg font-medium text-white">{user?.displayName}</h3>
          </div>
        </div>

        <ul className="mt-4 space-y-2">
       {
        myTask.map(task=>{

          return(
         
            
            <li key={task._id}>
            <div className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
              <strong className="font-medium text-white">Task Name:</strong>
             

              <p  className="mt-1 text-xs font-medium text-gray-300">
                {
                  task?.task_name
                }
              </p>
              

              <button className="rounded border border-indigo-600 bg-indigo-600 px-5 mr-2 text-white mt-2 ">
                Update
              </button>
              <button onClick={()=>deleteTask(task._id)} className="rounded border border-indigo-600 bg-indigo-600 px-5 mr-2  text-white mt-2 ">
                Delete
              </button>
              <button className="rounded border border-indigo-600 bg-indigo-600 px-5 text-white mt-2 ">
                Completed
              </button>
            </div>
          </li>
            
            
     
          )
        })
       }
        </ul>
      </article>
    </div>
  );
};

export default Mytask;
