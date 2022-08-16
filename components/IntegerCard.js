import React from "react"
import "../styles/tailwind.css"
import { InformationCircleIcon } from '@heroicons/react/outline'

export default function IntegerCard(props) {
    return (
        <div className="bg-slate-700 w-48 h-20 p-2 rounded-lg shadow-lg text-white flex flex-col">
            <div className="w-full flex justify-between">
                <div className="font-mono text-xs">
                    {props.label}
                </div>
                <div className="-mt-2 -mr-2 p-2 hover:text-blue-400">
                    <InformationCircleIcon className="w-4 h-4 "></InformationCircleIcon>
                </div>
            </div>

            <div className="font-mono text-xl -mt-4 flex w-full h-full items-center justify-center">
                {props.value}
            </div>
        </div>
    )
}