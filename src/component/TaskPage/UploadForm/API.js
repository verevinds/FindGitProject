const upload = (file, onSuccess, onFailure) => {
	const data = new FormData()
	data.append('file', file)

	window
		.fetch('https://file.io/?expires=1w', {
			method: 'POST',
			mode: 'cors',
			body: data
		})
		.then(response => {
			if (response.ok) {
				return response.json()
			}
			throw new Error(response.status)
		})
		.then(data => onSuccess(data))
		.catch(error => {
			onFailure(error)
		})
}

export { upload }
