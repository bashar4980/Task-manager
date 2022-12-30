import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import AddTask from './Pages/AddTask';
import Completed from './Pages/Completed';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Mytask from './Pages/Mytask';
import Signup from './Pages/Signup';


const router = createBrowserRouter([{
  path:"/",
  element:<Main></Main>,
  children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
  {
    path:"/signup",
    element:<Signup></Signup>
  },{
    path:"/mytask",
    element:<Mytask></Mytask>
  },
  {
    path:"/complete",
    element:<Completed></Completed>
  }
  ,
  {
    path:"/addtask",
    element:<AddTask></AddTask>
  }
  ]

}])

const App = () => {
  return (
    <div>
    <RouterProvider router={router}>

    </RouterProvider>

    </div>
  );
};

export default App;