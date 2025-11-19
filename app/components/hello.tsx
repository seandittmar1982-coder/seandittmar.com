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
            <p className="card">Hello from client component <code>/components/hello.tsx</code>(using fetch to access backend via useEffect: <code>/api/hello</code> ) </p>
            <p className="card">Result from route handler: {resultFromRouteHandler}</p>
        </div>
    )
}

