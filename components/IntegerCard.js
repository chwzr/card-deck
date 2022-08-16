import React from "react"
import "../styles/tailwind.css"

export default function IntegerCard(props) {
    return (
        <div className="bg-slate-700 w-48 h-20 p-2 rounded-lg shadow-lg text-white flex flex-col">
            <div className="w-full flex justify-between">
                <div className="font-mono text-xs">
                    {props.label}
                </div>
                <div className="-mt-2 -mr-2 p-2 hover:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>

            <div className="font-mono text-xl -mt-4 flex w-full h-full items-center justify-center">
                {props.value}
            </div>
        </div>
    )
}