import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../Authcontext/Authcontext";

const Completed = () => {
  const { user } = useContext(UserContext);
  const {
    data: myTask,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/task/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="mx-auto w-16 h-16 border-4 border-dashed rounded-full t animate-spin border-indigo-600"></div>
    );
  }

  //delete task
  const deleteTask = (id) => {
    fetch(`http://localhost:5000/deletetask/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("deleted");
          refetch();
        }
      });
  };

  //complete task

  const NotcompleteTask = (id) => {
    fetch(`http://localhost:5000/incomplete/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Not completed");
          refetch();
        }
      });
  };
  //update task 

  return (
    <div className="mx-auto max-w-[780px] px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl mb-20">
        Completed Task
      </h1>
      <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
        <h1 className="text-white text-xl">
          <strong>{user?.displayName}</strong>
        </h1>
        {myTask.map((task) => {
          return (
            <>
              {task?.status === true && (
                <ul className="mt-4 space-y-2" key={task._id}>
                  <li>
                    <div className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                      <strong className="font-medium text-white">
                        Task Name:
                      </strong>

                      <p className="mt-1 text-xs font-medium text-gray-300">
                        {task?.task_name}
                      </p>

                      <button
                        onClick={() => deleteTask(task._id)}
                        className="rounded border border-indigo-600 bg-indigo-600 px-5 mr-2  text-white mt-2 "
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => NotcompleteTask(task._id)}
                        className="rounded border border-indigo-600 bg-indigo-600 px-5 text-white mt-2 "
                      >
                        Not Completed
                      </button>
                    </div>
                  </li>
                </ul>
              )}
            </>
          );
        })}
      </article>
    </div>
  );
};

export default Completed;
