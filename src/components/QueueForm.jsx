import { useState } from "react"
import {FaUserPlus} from 'react-icons/fa'
export default function QueueForm({onAdd}){
    const [name , setName] = useState('');
    const [service , setService] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        // validation 
        if(!name.trim() || !service.trim()) return
        onAdd({name , service})
        setName('')
        setService('')
        
    }
return(
    <>
    <h1>QueueForm</h1>
    <form className="queue-form" onSubmit={handleSubmit}>
<h2>Add to Queue</h2>
<div className="form-group">
<input type="text " placeholder="Customer Name" value={name} 
onChange={(e) => setName(e.target.value)}/>
</div>


<div className="">
<select value={service} onChange={(e) => 
    setService(e.target.value)}>
        <option value="">Select Services</option>
        <option value="consultation">consultation</option>
        <option value="payment">payment</option>
        <option value="support">support</option>

    </select>
</div>
<button type="submit">
    <FaUserPlus/>Add Customer</button>
    </form>
    </>
)
}