export const getResource = async (texto: string, cantidad: number, pagina: number) => {
	let res:any;
	let body = JSON.stringify(
		{
			query: texto,
			"num": cantidad,
			"page": pagina
		});
	fetch('http://localhost:3000/api/repo/search', {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: body
	}).then(async response => {
		res = await response.json()
		console.log(res)
	})
		.catch(async error => {
			res = await error.json()
			console.error(res)
		});
		return res;
};