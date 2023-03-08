const renderItems = (collection) => {
	collection.forEach(item => {
		console.log(item)
	})
}



fetch('./assets/collection.json')
	.then(response => response.json())
	.then(collection => {
		renderItems(collection)
	})
