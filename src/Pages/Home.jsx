import React, { useContext } from "react";
import { UserContext } from "../Authcontext/Authcontext";
import Reminder from "../Components/Reminder";

const Home = () => {
  const {user} = useContext(UserContext)
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
          className="mt-6 mb-0 space-y-4 rounded-lg p-8 "
        >
          <p className="text-2xl font-medium text-center">Add Task</p>

          <div>
            <label htmlFor="text" className="text-sm font-medium">
              Task
            </label>

            <div className="relative mt-1">
              <input
                type="text"
                id="text"
                className="w-full rounded-lg border border-gray-800 p-4 pr-12 text-sm shadow-sm"
                placeholder="Write your task"
              />
            </div>
          </div>

      
        </form></> : <><Reminder></Reminder></>
         }
        </div>
      </div>
    </div>
  );
};

export default Home;
