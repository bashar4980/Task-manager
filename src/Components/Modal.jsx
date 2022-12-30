import React from "react";

export default function Modal({task, refetch}) {
  const [showModal, setShowModal] = React.useState(false);
  const submitHandeler=(e)=>{
    e.preventDefault();
    const taskName = e.target.task.value;
    const taskValue ={
            taskName
    }
    
    fetch(`http://localhost:5000/update/${task._id}`,{
      method:"PUT",
      headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(taskValue)

    })
    .then(res=>res.json())
    .then(data=>{
   
      if(data.acknowledged){
        alert("completed")
        refetch()
        setShowModal(false)
      }
       
    })

  }
  return (
    <>
      <button
       className="rounded border border-indigo-600 bg-indigo-600 px-5 mr-2 text-white mt-2 "
        type="button"
        onClick={() => setShowModal(true)}
      >
        Update
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">Update your task</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <form
          onSubmit={submitHandeler}
          className="mt-6 mb-0 space-y-4 rounded-lg p-8 "
        >
    

          <div>


            <div className="relative mt-1">
              <input
                type="text"
                id="text"
                defaultValue={task.task_name}
                name="task"
                className="w-full rounded-lg border border-gray-800 p-4 pr-12 text-sm shadow-sm"
                placeholder="Write your task"
              />
            </div>

           <div className="mt-5">
           <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Update task
          </button>
           </div>
          </div>

      
        </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
             
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
