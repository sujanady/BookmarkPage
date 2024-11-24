import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Links = () => {
  const [myform, setFormmy] = useState(false)
  const [style, setStyle] = useState({ substyle: { fontSize: '20px' }, content: "Add Link", add: "add" })
  const [form, setForm] = useState({ link: "", site: "" })
  const [passwordArray, setPasswordArray] = useState([])
  const [link, setLink] = useState({ color: 'white' })
  const [link_page, setLink_page] = useState(1)


  useEffect(() => {
    let passwords = localStorage.getItem("passwords")

    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }

  }, [])



  const deletePassword = (id) => {
    let c = confirm("Do you really want to delete your password?")

    if (c) {

      setPasswordArray(passwordArray.filter(item => item.id !== id))
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))

    }
  }

  const editPassword = (id) => {
    console.log("Editing password with id", id);
    setForm(passwordArray.filter(item => item.id === id)[0])
    setPasswordArray(passwordArray.filter(item => item.id !== id))
    setFormmy(true)
  }




  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }


  const saveSite = () => {

    
    if (form.link.length >= 3 && form.site.length >= 1  && passwordArray.length <= 19) {
      setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
      toast('🦄 Your Link Saved', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log(passwordArray.length)

    }

    else if(form.link.length < 3 || form.site.length < 1) {
      alert("Minimum length of site link is 4 and site name is 3")
    }

    else if(passwordArray.length > 19){
      alert("There is no space for new link")
    }

  }



  const onForm = (params) => {
    if (myform === true) {
      setFormmy(false)
      setStyle({ substyle: { fontSize: '20px' }, content: "Add Link", add: "add" })


    }

    else {
      setFormmy(true)
      setStyle({ substyle: { backgroundColor: '#86efac', fontSize: '12px' }, content: "Enter Link" })

    }
  }

  const onLink = () => {
    setLink({ fontSize: '16px', backgroundColor: '#52525b', color: '#D81B60' })
  }



  return (

    <div className='container w-full h-full  '>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="links bg-white mb-4 px-2 py-4 grid grid-cols-4 ring-8 ring-rose-400 rounded-lg">

        {passwordArray.map((item, index) => {

          return <div key={index} className="flex w-36 max-w-36 ">
            <a href={item.link} target='_blank' > <div style={link} className="link flex justify-center items-center cursor-pointer m-2 max-w-24 min-w-24 h-14 bg-zinc-800  hover:bg-zinc-700 hover:ring-8  ring-4 rounded-xl ring-blue-600">
              <span className='text-xl font-bold' >{item.site}</span>
            </div>

            </a>
            <div className="icons flex-col">
              <div onClick={() => { editPassword(item.id) }} className='material-icons2 my-2 text-blue-600 cursor-pointer hover:bg-gray-200 hover:ring-4 ring-gray-200 rounded-3xl '>edit</div>
              <div onClick={() => { deletePassword(item.id) }} className='material-icons2 text-red-600 cursor-pointer hover:bg-gray-200 hover:ring-4 ring-gray-200 rounded-3xl'>delete</div>

            </div>



          </div>


        })}


      </div>

      <div style={style.substyle} onClick={onForm} className="add w-32 h-10 bg-green-500 hover:bg-green-400 rounded-xl flex gap-2 cursor-pointer justify-center items-center">
        <span className="material-icons text-white">{style.add}</span> <span className=' font-bold text-white'>{style.content} </span>
      </div>

      {
        myform === true && <div className="form my-4">
          <input className='rounded-xl border-2 border-green-300 w-full py-1 px-4 my-2' onChange={handleChange} value={form.link} name='link' type="text" placeholder='Enter Website Link' />
          <div className='flex gap-5 my-2'>
            <input className='rounded-xl border-2 border-green-300 w-[70%] py-1 px-4' onChange={handleChange} value={form.site} name='site' type="text" placeholder='Enter Website Name' />
            <button onClick={saveSite} className='text-white rounded-xl text-2xl bg-green-500 hover:bg-green-400 w-[25%] h-9' >Add Link</button>

          </div>
        </div>
      }


    </div >
  )
}

export default Links
