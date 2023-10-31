import React, { useState } from "react";
import GoBack from "./GoBack";

export default function Form() {
  const [name, setName] = useState("Sarvesh");
  const [message, setMessage] = useState('');

  const handleAlert = (e) => {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if(message.trim().length > 0){
      alert(`You said "${message}" to ${name}`);
    } 
    else{
      alert("Invalid Message")
    }
  }

  return (
    <>
      <div className="flex flex-col gap-10">
        <div>
          <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
            <label>
              To:{" "}
              <select value={name} onChange={(e) => setName(e.target.value)}>
                <option value="Sarvesh">Sarvesh</option>
                <option value="Kaustubh">Kaustubh</option>
              </select>
            </label>
            <label>
              <textarea
                value={message}
                onChange={(e) => handleAlert(e)}
                id=""
                cols="30"
                rows="3"
              />
            </label>
            <button type="submit" className="bg-slate-50 text-black">
              Send
            </button>
          </form>
        </div>
        <div className="mt-10">
          <GoBack />
        </div>
      </div>
    </>
  );
}
