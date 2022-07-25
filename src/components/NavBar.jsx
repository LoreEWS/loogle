import React from 'react'
import { Link } from 'react-router-dom';
import { Search } from './Search';

export const NavBar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 rounded dark:bg-gray-500 dark:text-gray-900">
        <div className="flex justify-between items-center space-x-5 w-screen">
            <Link to="/">
                <p className="text-3xl bg-[#04254e] font-bold text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-gray-900">
                    <span className="text-blue-500">L</span>
                    <span className="text-red-500">o</span>
                    <span className="text-yellow-500">o</span>
                    <span className="text-blue-500">g</span>
                    <span className="text-green-500">l</span>
                    <span className="text-red-500">e</span>
                </p>
            </Link>
            <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg ">
                {darkTheme ? 'Light' : 'Dark'}
            </button>
        </div>
        <Search />
    </div>
  )
}
