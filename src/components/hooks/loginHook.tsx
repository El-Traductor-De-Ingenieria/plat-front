export const getStatus = async () => {
	const res = await fetch('http://localhost:3000/api/auth/status', {
		credentials: 'include'
	})
	return await res.json();
};

export const logout = async () => {
	const res = await fetch('http://localhost:3000/api/auth/logout', {
		credentials: 'include'
	})
	window.location.href = 'http://localhost:8080';
	return await res.json();
};