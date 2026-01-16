import './App.css'
import { useState } from 'react'
import QueueForm from './components/QueueForm';
import QueueDispaly from './components/QueueDisplay';



export default function App(){
  const[queue,setQueue] = useState([])


const addToQueue= (customer) =>{
  // add data in queue
  setQueue([...queue , {...customer , id:Date.now() , status:"waiting"}]);
};

const upadateStatus = (id , newStatus) => {
  //remove data from Queue
  setQueue(queue.map(customer => 
    customer.id === id ? {...customer , status : newStatus}
    : customer
  ))
};

const removeFromQueue = (id) => {
  // remove data from Queue
    setQueue(queue.filter(customer => customer.id !== id))

};


  return (
    <div  className="app">
    
<header>
          <h1>Queue Management Application</h1>
         <p>Manage your customer Efficently</p>
</header>
<main>
<QueueForm onAdd={addToQueue}/>

  <QueueDispaly
  queue={queue}
  onUpdateStatus={upadateStatus}
  onRemove={removeFromQueue}
  />
</main>
    </div>
  )
}