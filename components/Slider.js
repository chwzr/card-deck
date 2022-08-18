import React from "react"
import "../styles/tailwind.css"
import { KernelManager, SessionAPI, SessionManager, ServerConnection } from '@jupyterlab/services';

export default function Slider({ label, initialValue, inputKey, notebookName }) {

    const [value, setValue] = React.useState(initialValue)
    const comm = React.useRef()

    React.useEffect(() => {

        const init = async () => {
            const serverSettings = ServerConnection.makeSettings(
                {
                    baseUrl: "https://jupyter.cavorit.de",
                    appUrl: "https://jupyter.cavorit.de",
                    token: '',
                    wsUrl: "wss://jupyter.cavorit.de"
                });

            const kernelManager = new KernelManager({ serverSettings });
            const sessionManager = new SessionManager({ kernelManager, serverSettings });
            const sessionModels = await SessionAPI.listRunning(serverSettings);
            let session
            if (sessionModels.length > 0) {
                session = sessionManager.connectTo({ model: sessionModels[0] });
                console.log(`Connected to ${session.name} / ${session.kernel.name} `);
            } else {
                let sessionModel = await SessionAPI.startSession({ kernel: { name: "python3" }, name: notebookName, path: notebookName, type: "notebook" }, serverSettings)
                console.log(sessionModel)
                session = sessionManager.connectTo({ model: sessionModel });
                console.log(`created and connected to ${session.name} / ${session.kernel.name}`);
            }

            comm.current = session.kernel.createComm('apergy.card');
            comm.current.onMsg = msg => {
                console.log("got value update from kernel", msg.content)
                setValue(msg.content.data.value)
            }
            comm.current.onClose = msg => {
                console.log("kernel closed comm handler", msg)
            }
            await comm.current.open({ input_key: inputKey, initialValue: initialValue }).done;
        }
        init()


    }, [])


    const updateValue = async (e) => {
        let v = e.target.value
        setValue(v)
        await comm.current.send({ input_key: inputKey, value: v }).done;
    }


    return (
        <div className="bg-slate-700 w-48 h-20 p-2 rounded-lg shadow-lg text-white flex flex-col">
            <div className="w-full flex justify-between">
                <div className="font-mono text-xs">
                    {label}
                </div>
                <div className="-mt-2 -mr-2 p-2 hover:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>

            <div className="font-mono text-xl -mt-4 flex flex-col w-full h-full items-center justify-center">
                <div className="text-xs mb-2">{value}</div>
                <input id="default-range" type="range" onChange={updateValue} value={value} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
            </div>
        </div>
    )
}