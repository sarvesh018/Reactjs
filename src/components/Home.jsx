import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
    const components = [
        {id: 1, links:"useState"}, 
        {id: 2, links:"form"},
        {id: 3, links:"moveItems"},
        {id: 4, links:"temp"},
        {id: 5, links:"mockUp"}
    ];
  return (
    <div className="bg-[#61DBFB] text-black px-10 placeholder-gray-200 rounded-xl">
        <h1 className='px-4 py-8'>React Documentation</h1>
        <div className='px-4 py-2 flex flex-wrap items-center justify-center'>
            {components.map((map) => (
                <Link key={map.id} to={map.links} className="bg-[#1b7f98] rounded-lg border-black px-4 py-2 mx-2 my-2 text-black hover:bg-[#232323] hover:text-[#61DBFB]"> 
                    {map.links} 
                </Link>
            ))}
        </div>
    </div>
  )
}
