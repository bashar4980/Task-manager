import React from "react";

const Completed = () => {
  return (
    <div className="mx-auto max-w-[780px] px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl mb-20">
        Completed Task
      </h1>
      <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
        <ul className="mt-4 space-y-2">
          <li>
            <div className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
              <strong className="font-medium text-white">Task Name:</strong>

              <p className="mt-1 text-xs font-medium text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                consequuntur deleniti, unde ab ut in!
              </p>

              <button className="rounded border border-indigo-600 bg-indigo-600 px-5 mr-2  text-white mt-2 ">
                Delete
              </button>
              <button className="rounded border border-indigo-600 bg-indigo-600 px-5 text-white mt-2 ">
                Not Completed
              </button>
            </div>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Completed;
