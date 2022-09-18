const res = await fetch('http://localhost:3000/api/auth/status', {
	credentials: 'include'
});

const data = await res.json();


export function Test() {
	return <div> {JSON.stringify(data)} </div>
}

export default Test;
