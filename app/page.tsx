'use client'
import {useEffect, useState} from "react";

interface FooProps {
  x: number;
}
const Foo = ({x} : FooProps) => {
  useEffect(() => {
    console.log(x)
    return () => {console.log('Bye!')}
  },[]);
 
  return(
    <div>Foo : {x}</div>
  )
}
const IndexPage = () => {
  const [isShow, setIsShow] = useState(false)
  const [x, setX] = useState(1)
 
  return (
    <div>
      <p>Date: {x}</p>
      <button onClick={()=>setIsShow(!isShow)}>Toggle</button>
      <button onClick={()=>{setX(+new Date)}}>Change X</button>
      {isShow && <Foo x={x}></Foo>}
    </div>
  )
 }
export default IndexPage