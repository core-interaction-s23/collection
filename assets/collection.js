// This function will render your items.
const renderItems = (collection) => {
	collection.forEach(item => {
		console.log(item)
	})
}



// This gets your JSON file…
fetch('assets/collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function!
		renderItems(collection)
	})
