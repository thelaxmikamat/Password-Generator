import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"

function PasswordGenerator(){

 const[Password, setPassword]= useState("");
 const[length, setLength]= useState(8);
 const[numberChanged, setnumberchanged]= useState(false);
 const[charachterChanged, setcharachterchanged]= useState(false); //false isliye liya h taki checkbox dikhe automatic tick na aaye

const generatePassword=useCallback(()=>{
   let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberChanged)
        str+="0123456789";
    if(charachterChanged)
        str+="+-*/#@()^&!~{}";

    let pass= ""
    for(let i =0; i<length; i++){
        pass+= str[Math.floor(Math.random()*str.length)]
    }
    setPassword(pass);
},[length,numberChanged,charachterChanged])
useEffect(()=>{
    generatePassword();
},[])

    return(
        <>
        <div className="second">
        <h1 style={{fontSize:'3rem', fontWeight:'bold'}}>Password Generator</h1>
        <h2 style={{color:'#8F0B9C', fontSize:'2rem', fontWeight:'bold'}}>{Password}</h2>
        <div className="first">
            <input type="range" min={5} max={25} value={length} onChange={(e)=>setLength(e.target.value)}></input>
            <label>Length({length})</label>
             {/*for number*/}
            <input type="checkbox" defaultChecked={numberChanged} onChange={()=>setnumberchanged(!numberChanged)}></input>
            <label> Number</label>
             {/*for charachter */}
             <input type="checkbox" defaultChecked={charachterChanged} onChange={()=>setcharachterchanged(!charachterChanged)}></input>
            <label> Character</label>
            <button className="button" onClick={generatePassword}>Change Password</button>
        </div>
        </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);