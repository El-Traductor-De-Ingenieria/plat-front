import { useState } from "react";

export function Pagination(){
    const [countQuantity, setCountQuantity] = useState(10);//Este estado contiene el valor del número de recursos a mostrar
    const [countPages, setCountPages] = useState(0);//Este estado contiene el valor de la cantidad de paginas en el paginador
    return (
    <div>
        <span className="text-sm text-gray-700 dark:text-gray-400">
                Recursos <span className="font-semibold text-gray-900 dark:text-white">{countQuantity}</span> Pagina <span className="font-semibold text-gray-900 dark:text-white">{countPages}</span>
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
                <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-l hover:hover:bg-blue-800 dark:bg-blue-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-blue-800 dark:hover:text-white" onClick={() => back(countPages, setCountPages)}>
                    <svg aria-hidden="true" className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"></path></svg>
                    Anterior
                </button>
                <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-r border-0 border-l border-blue-800 hover:bg-blue-800 dark:bg-blue-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-blue-800 dark:hover:text-white" onClick={() => nexts(countPages, setCountPages)}>
                    Siguiente
                    <svg aria-hidden="true" className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"></path></svg>
                </button>
            </div>
    </div>
)
}

function back(countPages: any, setCountPages: any) {
    if (countPages > 0) {
        setCountPages(countPages--);
    } else {
        setCountPages(0);
    }
}
function nexts(countPages: any, setCountPages: any) {
    setCountPages(countPages++);
}
