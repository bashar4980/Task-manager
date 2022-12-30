import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Authcontext/Authcontext";
import Reminder from "../Components/Reminder";

const Home = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate()
  const handleKeyDown = (event) => {
  
    if (event.key === "Enter") {
      const name = event.target.value;
      const email = user?.email;
      const img = "";
      const task_info = {
        name,
        email,
        img,
      };

      fetch("http://localhost:5000/task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task_info),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            alert("task is add successfully");
            navigate("/mytask")
          }
        });
    }
  };

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

          {user?.uid ? (
            <>
              <div className="mt-6 mb-0 space-y-4 rounded-lg p-8 ">
                <p className="text-2xl font-medium text-center">Add Task</p>

                <div>
                  <label htmlFor="text" className="text-sm font-medium">
                    Task
                  </label>

                  <div className="relative mt-1">
                    <input
                      type="text"
                      id="text"
                      onKeyDown={handleKeyDown}
                      className="w-full rounded-lg border border-gray-800 p-4 pr-12 text-sm shadow-sm"
                      placeholder="Write your task"
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Reminder></Reminder>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
