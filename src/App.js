import { useState } from 'react'
import data from './data'
import Tours from './components/Tours'
function App(){

  const [state,setState]= useState(data)
  // console.log(state)


  if(state.length===0){
    return <div className='nothing_left'>
      <p style={{fontSize:'2rem',fontWeight:'bolder',fontFamily:'cursive'}}>Nothing Left 😶</p>
      <button onClick={()=>{setState(data)}} style={{height:'2rem',width:'6rem',backgroundColor:'greenyellow',border:'1px solid black',cursor:'pointer',}} >Refresh</button>
    </div>
  }

 const remove=(id)=>{
  const filtered = state.filter((items)=>{ return items.id !== id})
  setState(filtered)
  
 }



  return(
    <div>
      <Tours state={state} remove={remove} />

    </div>
  )
}
export default App