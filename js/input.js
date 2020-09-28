likesInput.addEventListener('input', e => {
	/* Resetting 'state' */
	textAlert.textContent = ''
	trigger.classList.remove('button--blocked')

	const value = +e.target.value

	if (isNaN(value)) {
		textAlert.textContent = 'Пожалуйста, введите число'
	}

	if (value >= 1000) {
		textAlert.textContent = 'Я бы не советовал'
	}

	if (value >= 3000) {
		textAlert.textContent = 'Пожалуйста, нинада'
		trigger.classList.add('button--blocked')
	}

	window.localStorage.setItem('number_of_likes', value)
})

document.addEventListener('DOMContentLoaded', e => {
	likesInput.value = '100'
	window.localStorage.setItem('number_of_likes', 100)
})