import { useEffect, useState } from "react"
import { ErrorBoundary } from "./page/ErrorBondary"
import Josue from "./page/Josue"
 function uSeJosue(initial = 0){
  const[change , setChange]= useState(initial)
  const handle =()=>{
    return{
      changed:change,
       incrementation :()=> setChange(change => change + 1),
       decrementation :()=> setChange(change => change -1)
    }
  }

  return handle();
 }
// 074529272

function App(){
  const {changed , incrementation,decrementation} = uSeJosue(0)

  return(
    <div>
      <ErrorBoundary fallback={<p>impossible de charge le page</p>}>
        <Josue/>
      </ErrorBoundary>
      <h1>{changed}</h1>
      <button onClick={incrementation}> incrementation</button>
      <button onClick={decrementation}> decrementation</button>
    </div>
  )
}

export default App
