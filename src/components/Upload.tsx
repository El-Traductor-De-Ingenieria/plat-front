import { useState } from 'react';
//import { SuccessAlert } from './SuccessAlert';
export function Upload() {
	const [name, setName] = useState("");
	const [summary, setSummary] = useState("");
	const [file, setFile] = useState("");
	const [url, setUrl] = useState("");
	const [isFile, setIsFile] = useState(false);

	return (<div
		className="relative z-10"
		aria-labelledby="modal-title"
		role="dialog"
		aria-modal="true"
	>
		<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
		</div>

		<div className="fixed inset-0 z-10 overflow-y-auto">
			<div
				className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
			>
				<div
					className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl"
				>
					<div className="dark:bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<div className="sm:flex sm:items-start">
							<div
								className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"
							>
								<svg
									className="h-6 w-6 text-blue-600"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									></path>
								</svg>
							</div>
							<div
								className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
							>
								<h3
									className="text-lg font-medium leading-6 text-gray-900"
								>
									Subir un recurso
								</h3>
								<div className="mt-2">
									<p className="text-sm text-gray-500">
										Para subir un recursos debe rellenar el
										siguiente fomulario
									</p>
								</div>
								<div>
									<div className="grid gap-6 mb-6 md:grid-cols-2">
										<div>
											<input
												type="text"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												placeholder="Nombre"
												onChange={(e) => {setName(e.target.value)}}
												required
											/>
										</div>
										<div>
											<input
												type="text"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												placeholder="Resumen"
												onChange={(e) => setSummary(e.target.value)}
												required
											/>
										</div>
									</div>
									{
										isFile ?
											<div
												className="flex justify-center items-center w-full"
											>
												<label
													htmlFor="dropzone-file"
													className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
												>
													<div
														className="flex flex-col justify-center items-center pt-5 pb-6"
													>
														<svg
															aria-hidden="true"
															className="mb-3 w-10 h-10 text-gray-400"
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
															xmlns="http://www.w3.org/2000/svg"
														><path
															d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
														></path>
														</svg>
														<p
															className="mb-2 text-sm text-gray-500 dark:text-gray-400"
														>
															<span className="font-semibold"
															>Presione para subir un archivo</span
															> o arrastre y suelte
														</p>
														<p
															className="text-xs text-gray-500 dark:text-gray-400"
														>
															DOCX, PPTX, TEX, ETC (MAX.
															15Mb)
														</p>
													</div>
													<input
														type="file"
														className="hidden"
														onChange={(e) => setFile(e.target.value)}
													/>
												</label>
											</div>
											: <input
												type="text"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
												placeholder="url"
												onChange={(e) => setUrl(e.target.value)}
												required
											/>
									}
									<div className="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
										<input onClick={() => setIsFile(!isFile)} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
										<label htmlFor="bordered-checkbox-1" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Es un archivo</label>
									</div>
								</div>
							</div>
						</div>
						<div
							className="dark:bg-gray-900 bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
						>
							<button onClick={()=>{console.log(name, summary, file, url, isFile); uploadResourse(name, summary, file, url, isFile); console.log(" :D")}}
								type="button"
								className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
							>Subir</button
							>
							<button onClick={closeModal}
								type="button"
								className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
							>Cancelar</button
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>)
}

function closeModal() {

}

function uploadResourse(name: string, summary: string, file: any, url: any, isFile: any) {
	if (isFile) {
		uploadFile();
	} else {
		uploadText(name, summary, file, url);
	}
}

async function uploadText(name: string, summary: string, file: string, url: string) {
	console.log("Name: ",name)
	console.log("Summary: ",summary)
	console.log("File: ",file)
	console.log("URL: ",url)
	let body = JSON.stringify(
		{
			name: name,
			type: 'text',
			data: url
		});
	fetch('http://localhost:3000/api/repo/upload', {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: body
	}).then(async response => {
		console.log(await response.json())
	})
	.catch(error => {
		console.error(error)
	});

}
function uploadFile() {
	console.log("uploading file...")
}