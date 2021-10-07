let buttonSwitch = document.getElementById('switch-container')
let body = document.getElementById('lightOrDark')
let luna = document.getElementById('luna')
let sun = document.getElementById('sun')
let switchToggle = document.getElementById('switch-toggle')
let hasClickedOnSwitch;
let hasClicked = JSON.parse(localStorage.getItem('hasClicked'))
sun.style.display = 'none'
body.onload = () => {
	if(hasClicked === true){
		body.classList.toggle('dark')
		luna.style.display = 'none'
		sun.style.display = 'flex'
		switchToggle.classList.add('active')
	}
}
buttonSwitch.addEventListener('click', ()=> {
	if(body.classList.contains('dark')){
		body.classList.toggle('dark')
		hasClickedOnSwitch = false
		luna.style.display = 'flex'
		sun.style.display = 'none'
		switchToggle.classList.remove('active')
		localStorage.setItem('hasClicked', JSON.stringify(hasClickedOnSwitch))
	} else {
		body.classList.toggle('dark')
		hasClickedOnSwitch = true
		luna.style.display = 'none'
		sun.style.display = 'flex'
		switchToggle.classList.add('active')
		localStorage.setItem('hasClicked', JSON.stringify(hasClickedOnSwitch))
	}
})
