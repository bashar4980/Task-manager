import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Authcontext/Authcontext";
import Reminder from "../Components/Reminder";



const AddTask= () => {
  const {user} = useContext(UserContext)
  const navigate = useNavigate()
 
  const formHandeler =(e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.task.value;
    const email = user?.email
    const img = form.img.files[0];
    const formData = new FormData();
    formData.append("image", img);

    fetch("https://api.imgbb.com/1/upload?key=1eff288954b9974ef2fda790f07621f6", {
      method: "POST",
      body: formData,
    })
    .then((res) => res.json())
    .then(data=>{
      const img = data.data.url
      if(data.success){
        const taskInfo ={
          name,
          email,
          img
        }

        fetch("http://localhost:5000/task", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(taskInfo),
        })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            alert("task is add successfully");
            navigate("/mytask")
          }
        });



      }
    })

  }
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg border border-gray-100  shadow-2xl py-20">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Welcome to task manager App
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Time secduling is important for every person. A good plan give you
            good life. So Start now , and add your planning
          </p>

         {
          user?.uid ? <>
          <form
          action=""
          onSubmit={formHandeler}
          className="mt-6 mb-0 space-y-4 rounded-lg p-8 "
        >
          <p className="text-lg font-medium">Add Task</p>

          <div>
            <label htmlFor="text" className="text-sm font-medium">
              Task
            </label>

            <div className="relative mt-1">
              <input
                type="text"
                id="text"
                name="task"
                className="w-full rounded-lg border border-gray-800 p-4 pr-12 text-sm shadow-sm"
                placeholder="Write your task"
              />
            </div>
          </div>

          <div>
            <label htmlFor="files" className="block text-sm font-medium mb-5">
              Add Task photo
            </label>
            <div className="flex">
              <input
                type="file"
                name="img"
                
                id="files"
                className="w-full px-8 py-5 border-2 border-dashed rounded-md border-gray-700 text-gray-400 "
              />
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Add task
          </button>
        </form></> : <><Reminder></Reminder></>
         }
        </div>
      </div>
    </div>
  );
};

export default AddTask;
