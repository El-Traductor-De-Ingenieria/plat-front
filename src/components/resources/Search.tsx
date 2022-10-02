import { Dispatch, SetStateAction, useState } from "react";
import { getResource } from '@components/hooks/resourceHook'
import { Upload } from "@components/upload/Upload";

export function Search() {
    const [text, setText] = useState("");
    const [quantity, setQuantity] = useState(10);
    const [pages, setPages] = useState(0);
    const [showUpload, setShowUpload] = useState(false);

    return <div>
        {showUpload ? <Upload
            showUpload={showUpload}
            setShowUpload={setShowUpload}
        ></Upload> : null}
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
            Buscar
        </label>
        <div className="relative">
            <div
                className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
            >
                <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
            <input
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Escriba el nombre del recurso"
                required
                onChange={e => setText(e.target.value)}
            />
            <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => { getResourse(text, quantity, pages, setQuantity, setPages) }}
            > Buscar
            </button>
        </div>
        <div className="flex flex-col items-center">
            <button
                type="button"
                className="my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-1.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => { toggleShowUpload(showUpload, setShowUpload) }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                >
                    <path
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                Añadir recurso
            </button>
        </div>
    </div>
}

async function getResourse(texto: string, quantity: number, pages: number, setQuantity: Dispatch<SetStateAction<number>>, setPages: Dispatch<SetStateAction<number>>) {
    console.log(await getResource(texto, quantity, pages));
}
function toggleShowUpload(showUpload: boolean, setShowUpload: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; }) {
    setShowUpload(!showUpload);
}