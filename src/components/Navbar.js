import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = ({darkTheme,setDarkTheme}) => {
  
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">


          <Link to="/">
              <p className="text-2xl  font-bold text-white py-1 px-2 rounded dark: dark:text-gray-900">
                  {darkTheme?<img src="/images/seachIco2.png" alt="" className="w-1/12 h-1/4 ml-5 mt-5"/>:<img src="/images/searchIco.png" alt="" className="w-1/12 h-1/4 ml-5 mt-5"/>}
                  <h3 className="text-black p-2 dark:text-white">Feel Free To Search</h3>
              </p>
          </Link>

          <button type="button" onClick={()=>setDarkTheme(!darkTheme)} className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg'>
              {darkTheme ? '💡':'🌙'}
              
          </button>
      </div>
      <Search/>
    </div>
  );
};

export default Navbar;
