const { CDB_BASE_URL, API_KEY } = process.env

async function index(ingredients) {
	let endpoint = `${CDB_BASE_URL}/${API_KEY}/filter.php?i=${ingredients}`
	const res = await fetch(endpoint, {
		method: 'GET',
		contentType: 'application/json',
	})
	if (res.ok) {
		const data = await res.json()
		if (data.drinks === 'None Found') {
			return 'None Found'
		} else return data
	} else {
		throw new Error('Invalid request')
	}
}

async function show(id) {
	let endpoint = `${CDB_BASE_URL}/${API_KEY}/lookup.php?i=${id}`
	const res = await fetch(endpoint, {
		method: 'GET',
	})

	if (res.ok) {
		return await res.json()
	} else {
		throw new Error('Invalid request')
	}
}

async function list(letter) {
	let endpoint = `${CDB_BASE_URL}/${API_KEY}/search.php?f=${letter}`
	const res = await fetch(endpoint, {
		method: 'GET',
	})

	if (res.ok) {
		return await res.json()
	} else {
		throw new Error('Invalid request')
	}
}

module.exports = {
	list,
	show,
	index,
}
