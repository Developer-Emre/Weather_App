import React from 'react'
import { getCurrentData } from '../utils/currentData'
import { IoLocationSharp } from "react-icons/io5";

interface CurrentProps {
    data: {
        current: {
            condition:{
                icon:string;
                text:string;
            };
            temp_c:number;
        };
        location: {
            name: string;
            region: string;
        }; 
    };
}

const Current = ({data}: CurrentProps) => {

    const currentData = getCurrentData();
    const weatherIcon = data.current.condition.icon;

  return (

    <div className='flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2'>
        <div className='flex items-center'>
            <div>
                <h1 className='text-3xl text-white'>Today</h1>
                <p className='text-white'>{currentData}</p>
            </div>
                {weatherIcon &&(
                    <div>
                        <img className='w-[50px] object-cover' src= {weatherIcon} alt={data.current.condition.text} />
                    </div>
                )}
        </div>
        <div>
            <p className='text-5xl text-white'>
                {data.current.temp_c.toFixed()}
                <span className='text-3xl'>°</span>
            </p>
            <span className='text-white'>{data.current.condition.text}</span>
    </div>
    <div>
        { data.location ? (<div className='flex items-center text-black bg-white/90 px-2 py-2 rounded-xl'>
            <IoLocationSharp />
            <span>
                {data.location.name},{data.location.region}
            </span>
        </div>
):null}
    </div>
</div>
  )
}

export default Current