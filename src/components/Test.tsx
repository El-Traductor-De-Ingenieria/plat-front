import { useEffect, useState } from 'react';

const getData = async () => {
	const res = await fetch('http://localhost:3000/api/auth/status', {
		credentials: 'include'
	});

	const data = await res.json();
	return data;
};

export function Test() {
	const [data, setData] = useState(null);
	useEffect(() => {
		getData().then(setData);
	}, []);
  
	return <div>{JSON.stringify(data)}</div>;
}
