function copy(def) {
		let copyText = document.getElementById(def).textContent;
	navigator.clipboard.writeText(copyText)
		.then(() => {
			alert('Copié dans le presse-papier !')
		})
		.catch(err => {
			alert('Une erreur s\' est produite')
			console.log('Something went wrong', err);
		})
}
function share(def) {
	let copyLink = document.getElementById(def).getAttribute('href');
	console.log(copyLink)
	navigator.clipboard.writeText(copyLink)
		.then(() => {
			alert('Lien copié dans le presse-papier !')
		})
		.catch(err => {
			alert('Une erreur s\' est produite')
			console.log('Something went wrong', err);
		})
}