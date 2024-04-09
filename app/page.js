"use client"
import React,{useState} from "react";
import axios from "axios";
export default function Home() {
  const [linkName,setLinkName] = useState();
  const [saveName,setSaveName] = useState();
  const [loading,setLoading] = useState(false);
  const handleSubmit = async ()=>{
    setLoading(false);
    const jsonData = {
      "link_to_generate":linkName,
      "file_save_name":saveName
    };
    try{
    const response = await axios.post("http://127.0.0.1:8000/items",jsonData);}
    catch(err){
      console.log("err");
      setLoading(true);
    }

  }
  return (
    <div className="flex flex-col justify-center items-center">
     <p className="flex flex-wrap mt-16 font-bold text-2xl mb-16">Convert link/text to QR Code</p>
      <p className="mb-2">Enter the link/text</p>
      <input type="text" required onChange={(event)=>{setLinkName(event.target.value)}} style={{border:"2px solid black",width:"240px",borderRadius:"20px"}}/>
      <p className="mt-2 mb-2">Name to save the file</p>
      <input type="text" required onChange={(event)=>{setSaveName(event.target.value)}} style={{border:"2px solid black",width:"240px",borderRadius:"20px"}}/>
      <button type="submit" className="mt-4 bg-cyan-200" style={{border:"2px solid black",width:"240px",borderRadius:"20px"}} onClick={handleSubmit}>Submit</button>
      {loading && <p className="text-red-500">*Enter the required fields</p>}
    </div>
  );
}
