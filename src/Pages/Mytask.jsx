import React from "react";

const Mytask = () => {
  return (
    <div className="mx-auto max-w-[780px] px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl mb-20">
        My All Task
      </h1>
      <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
        <div className="flex items-center">
          <img
            alt="Developer"
            src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            className="h-16 w-16 rounded-full object-cover"
          />

          <div className="ml-3">
            <h3 className="text-lg font-medium text-white">Claire Mac</h3>
          </div>
        </div>

        <ul className="mt-4 space-y-2">
          <li>
            <div className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
              <strong className="font-medium text-white">Task Name:</strong>

              <p className="mt-1 text-xs font-medium text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                consequuntur deleniti, unde ab ut in!
              </p>

              <button className="rounded border border-indigo-600 bg-indigo-600 px-5 mr-2 text-white mt-2 ">
                Update
              </button>
              <button className="rounded border border-indigo-600 bg-indigo-600 px-5 mr-2  text-white mt-2 ">
                Delete
              </button>
              <button className="rounded border border-indigo-600 bg-indigo-600 px-5 text-white mt-2 ">
                Completed
              </button>
            </div>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Mytask;
