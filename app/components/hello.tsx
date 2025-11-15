'use client'
import { useState,useEffect } from "react";
export default function Hello() {
    const [resultFromRouteHandler, setResultFromRouteHandler] = useState("")


    useEffect(() => {
      const getResult = async () => {
        const response = await fetch('/api/hello')
        const data = await response.json()
        setResultFromRouteHandler(data.message)
      }
    
     getResult()
    }, [])
    return (
        <div>
            <p>Hello from client component <span>/components/hello.tsx</span>(using fetch to access backend via useEffect: <span>/api/hello</span>)</p>
            <p>Result from route handler: {resultFromRouteHandler}</p>
        </div>
    )
}

