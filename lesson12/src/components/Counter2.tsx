import { ReactNode } from "react"

type Counter2Props = {
    setCount: React.Dispatch<React.SetStateAction<number>>
    children: ReactNode
}

const Counter2 = ({setCount, children}:Counter2Props) => {
  return (
    <div>
        <h1>{children}</h1>
        
        <button onClick={()=>{setCount(prev => prev+1)}}> inc </button>
        <button onClick={()=>{setCount(prev => prev-1)}}> dec </button>
    </div>
  )
}

export default Counter2