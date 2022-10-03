import { SetStateAction, useState } from "react";
import { Upload } from "@components/upload/Upload";

export function HideUpload() {

    const [showUpload, setShowUpload] = useState(false);

    return <div>
        {showUpload ? <Upload
            showUpload={showUpload}
            setShowUpload={setShowUpload}
        ></Upload> : null}
        
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
					stroke-width="1.5"
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
					></path>
				</svg>
                Solicitar agregación de recursos
            </button>
        </div>
        </div>       
}

function toggleShowUpload(showUpload: boolean, setShowUpload: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; }) {
    setShowUpload(!showUpload);
}