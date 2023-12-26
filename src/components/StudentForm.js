import { useEffect, useState } from "react";

export function StudentForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [rollNo, setRollNo] = useState("");

    const arr = [name, email, rollNo];

    useEffect(()=>{
        setName(props.obj.name);
        setEmail(props.obj.email);
        setRollNo(props.obj.rollNo);
    }, [props.obj.name,props.obj.email,props.obj.rollNo])
   
    const handleClick = () => {
        props.getState(arr);
    }

    return(
        <div>
            <input defaultValue={name} style={{maxWidth:"400px",margin:"10px auto"}} onChange={(e)=>setName(e.target.value)} class="form-control" placeholder="Enter your name" required/>
            <input defaultValue={email} style={{maxWidth:"400px",margin:"10px auto"}} onChange={(e)=>setEmail(e.target.value)}  class="form-control" placeholder="Enter your email" required/>
            <input defaultValue={rollNo} style={{maxWidth:"400px",margin:"10px auto"}} onChange={(e)=>setRollNo(e.target.value)}  class="form-control" placeholder="Enter your roll number" required/>
            <button onClick={handleClick} type="submit" class="btn btn-success mx-auto d-block">{props.children}</button>
        </div>
    )
}