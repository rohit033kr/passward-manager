import React from "react";
import { useRef, useState, useEffect } from "react"
import {v4 as uuidv4} from 'uuid';



const Manager = () => {
  const ref = useRef()
  const passwordRef=useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setPasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords")
    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }
  }, [])

  const showPassword = () => {
    passwordRef.current.type = "text"
    console.log(ref.current.src)
    if (ref.current.src.includes("icons/eyecross.svg")) {
      ref.current.src = "icons/eye.svg"
      passwordRef.current.type = "password"
    }
    else {
      ref.current.src = "icons/eyecross.svg"
      passwordRef.current.type = "text"
    }
  }
  const savePassword = () => {
    if(form.site.length >3 && form.username.length >3 && form.password.length >3){
    setPasswordArray([...passwordArray, {...form, id: uuidv4()}])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
    console.log(passwordArray)
    setform({ site: "", username: "", password: "" })
    }
  }

  const deletePassword = (id) =>{
    console.log("Delete password with id",id)
    let c=confirm("do you really want to delete password?")
    if(c){
    setPasswordArray(passwordArray.filter(item=>item.id!==id))
    localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
    }
  }
  const editPassword = (id) =>{
    console.log("editing password with id",id)
    setform(passwordArray.filter(i=>i.id===id)[0])
    setPasswordArray(passwordArray.filter(item=>item.id!==id))
  }
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }
  return (
    <>

      <div className="absolute top-0 z-[-2] h-screen w-screen bg-green-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.5),rgba(255,255,255,0))]"></div>

      <div className="mycontainer">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-green-700"> &lt; </span>
          <span>Password</span><span className="text-green-700"> Manager/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">Your own password manager</p>

        <div className="flex flex-col p-4 text-black gap-8 items-center">
          <input value={form.site} onChange={handleChange} placeholder="Enter website URL" className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name="site" id="" />
          <div className="flex w-full judtify-between gap-8">
            <input value={form.username} onChange={handleChange} placeholder="Enter UserName" className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name="username" id="" />
            <div className="relative">
              <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder="Enter Password" className="rounded-full border border-green-500 w-full p-4 py-1" type="password" name="password" id="" />
              <span className="absolute right-[3px] top-[4px] cursor-pointer" onClick={showPassword}>
                <img ref={ref} className="p-1" width={26} src="icons/eye.svg" alt="eye" />

              </span>
            </div>
          </div>
          <button onClick={savePassword} className="flex justifiy-center item-center gap-2 bg-green-300
           hover:bg-green-400 rounded-full px-8 py-2 w-fit border border-green-900">

            SavePass</button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div>No passwords to show </div>}
          {passwordArray.length !=0 &&<table className="table-auto w-full rounded-md overflow-hidden ">
            <thead className="bg-green-800 text-white">
              <tr>
                <th className="py-2">Sight</th>
                <th className="py-2">UserName</th>
                <th className="py-2">Password</th>
                <th className="py-2 w-20">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-green-100">
              {passwordArray.map((item, index)=>{
                return <tr key={index}>
                  <td className="py-2 border-2 border-white text-center "><a href={item.site} target='blank'>{item.site}</a></td>
                  <td className="py-2 border-2 border-white text-center">{item.username}</td>
                  <td className="py-2 border-2 border-white text-center ">{item.password}</td>
                  <td className="justify-center py-2 border-2 border-white text-center flex w-20">
                    <span className="cursor-pointer mx-2 " onClick={()=>{editPassword(item.id)}}>
                      <img src="icons/edit.svg" alt="" />
                    </span>
                    <span className="cursor-pointer mx-2 " onClick={()=>{deletePassword(item.id)}}>
                      <img src="icons/delete.svg" alt="" />
                    </span>
                  </td>
                </tr>
              })}
            </tbody>
          </table>}
        </div>
      </div>
    </>
  );
};

export default Manager;
