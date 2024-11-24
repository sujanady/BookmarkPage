import React from 'react'
import { useState, useEffect } from 'react';

const Time = () => {

  const [currentTime, setCurrentTime] = useState(new Date());
  const [show, setShow] = useState(false)
  const [note, setNote] = useState('');



  const handleChange = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit = () => {
    localStorage.setItem('note', note);
    setShow(false)
  }

  const savedValue = localStorage.getItem('note');

  const handleEdit = () => {
    setNote(savedValue)
    setShow(true)
  }



  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const second = currentTime.getSeconds().toString().padStart(2, '0');
  const dayNo = currentTime.getDay();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = daysOfWeek[dayNo]

  const date = currentTime.toLocaleDateString()

  // const date = currentTime.getVarDate().toString();



  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className='container bg-slate-950 w-full h-full p-4' >
      <div className="flex justify-between items-center">
        <span className="bg-slate-900 hover:bg-slate-800 cursor-pointer time text-orange-400 font-thin text-8xl">{hours}:{minutes}:{second}</span>
        <div className="">
          <div className="day bg-slate-900 hover:bg-slate-800 rounded-xl cursor-pointer text-rose-600 font-serif text-4xl font-bold">{day}</div>
          <div className="horizontal bg-white h-[1px] my-1"></div>
          <div className="date bg-slate-900 hover:bg-slate-800 rounded-xl cursor-pointer  text-sky-800 font-bold text-4xl">{currentTime.getDate()}/{currentTime.getMonth()}/{currentTime.getFullYear()}</div>
        </div>

      </div>

      <div className="mt-14 h-30">

        <div className="ml-[85%]">
          <button onClick={handleEdit} className='material-icons my-2 cursor-pointer hover:bg-slate-800 hover:ring-4 ring-slate-800 rounded-xl text-sky-800 '>edit</button>
          {show === true && <button onClick={handleSubmit} className='material-icons text-rose-800 hover:bg-slate-800 hover:ring-4 ring-slate-800 rounded-xl ml-5'>done_outline</button>}
        </div>

        {show === true &&
          <input className='bg-slate-900 w-[100%] h-24 text-6xl px-1  font-thin text-white border-none outline-none' value={note} onChange={handleChange} type="text" placeholder='Hii' />
        }
        {show === false && <div className="bg-slate-900 w-[100%] h-24 text-6xl py-4 px-1 font-thin text-white">{savedValue}</div>}

      </div>

    </div>
  )
}

export default Time
2