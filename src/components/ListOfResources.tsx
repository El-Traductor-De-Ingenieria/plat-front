import { useEffect, useState } from 'react';
import { Recursos } from './Resource';
import type { Resource } from '../models';

export const resourses: Resource[] = [
	{
		id: 0,
		title: "El cálculo de Desconocido 8va edicion",
		description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus praesentium totam suscipit magnam consectetur consequatur expedita provident numquam quae in qui doloremque ad quaerat explicabo accusamus magni, accusantium quidem?",
		author: "Desconocido",
		filename: "El cálculo de Desconocido 8va edicion.pdf",
	},
    {
		id: 1,
		title: "Ejercicios resultos del cálculo de Desconocido",
		description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus praesentium totam suscipit magnam consectetur consequatur expedita provident numquam quae in qui doloremque ad quaerat explicabo accusamus magni, accusantium quidem?",
		author: "Un estudiante aplicado",
		filename: "Ejercicios resultos del cálculo de Desconocido.tex",
	},
    {
		id: 2,
		title: "Reseña del cálculo de Desconocido",
		description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus praesentium totam suscipit magnam consectetur consequatur expedita provident numquam quae in qui doloremque ad quaerat explicabo accusamus magni, accusantium quidem?",
		author: "Un profesor apacionado",
		filename: "Reseña del cálculo de Desconocido.mp4",
	},
    {
		id: 3,
		title: "Podcast de tips para abordar al cálculo de Desconocido",
		description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus praesentium totam suscipit magnam consectetur consequatur expedita provident numquam quae in qui doloremque ad quaerat explicabo accusamus magni, accusantium quidem?",
		author: "La susodicha",
		filename: "Podcast de tips para abordar al cálculo de Desconocido.ogg",
	}
	,
    {
		id: 4,
		title: "Apuntes de la clase magistral de cálculo dictada por Desconocido",
		description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus praesentium totam suscipit magnam consectetur consequatur expedita provident numquam quae in qui doloremque ad quaerat explicabo accusamus magni, accusantium quidem?",
		author: "Otro estudiante",
		filename: "Apuntes de la clase magistral de cálculo dictada por Desconocido.xopp",
	}
	

];

const getData = async () => {
	const res = await fetch('http://localhost:3000/api/auth/status', {
		credentials: 'include'
	});

	const data = await res.json();
	return data;
};
const logout = async () => {
	const res = await fetch('http://localhost:3000/api/auth/logout', {
		credentials: 'include'
	});

	const data = await res.json();
	return data;
};

export function Resp() {
	return resourses.map(({ id, title, description, author, filename }) => {
		return (
			<Recursos
				id={id}
				title={title}
				description={description}
				author={author}
				filename={filename}
			></Recursos>
		);
	});
}

export function ListOfResources() {
    const [data, setData] = useState({});
	useEffect(() => {
		getData().then(setData);
	}, []);
	let response=JSON.parse(JSON.stringify(data))
    console.log(":/")
    console.log(response);
	if(response.id){
        console.log(response)
		console.log(":D");
		window.location.href = 'http://localhost:8080/';
	}
	console.log(response)
return <h1>Hello</h1>
}