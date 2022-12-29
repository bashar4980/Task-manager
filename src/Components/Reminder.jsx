import React from 'react';
import { Link } from 'react-router-dom';

const Reminder = () => {
    return (
        <div >
            <div className="rounded-lg text-center">
  <div className="px-6 py-5">
    <p className="font-medium">Please Login or Register then you can add task</p>

    <div className="mt-4 space-y-2">
      <Link to="/login"
        className="block rounded-full border border-blue-500 px-8 py-3 text-sm font-medium text-blue-600"
      
      >
       Login
      </Link>
      <Link to="/signup"
        className="block rounded-full border border-blue-500 px-8 py-3 text-sm font-medium text-blue-600"
      
      >
       Register
      </Link>
    </div>

  
  </div>

</div>
        </div>
    );
};

export default Reminder;