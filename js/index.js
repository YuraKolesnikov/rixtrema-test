const heartsContainer = document.querySelector('.js-hearts'),
 			trigger 				= document.querySelector('.js-trigger'),
 			likesInput 			= document.querySelector('.js-number-of-likes'),
 			textAlert 			= document.querySelector('.js-alert')

const svg = `
	<svg class="animated" width="24" height="24" viewBox="0 0 24 24">
    <path d="M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z" />
  </svg>
`

/* Generating stylesheet */
function appendStylesheet(css) {
	let head = document.head || document.getElementsByTagName('head')[0]
	let style = document.createElement('style')
	style.type = 'text/css'

	style.appendChild(document.createTextNode(css))
	head.appendChild(style)
}

function generateStylesheet() {
	let css = ''
	/* Generate css text */
	for (let i = 1; i <= 100; i++) {
		const animationDuration = `${generateRandomNum(3, 4)}s`
		const animationDelay = `${generateRandomNum(0, 2500)}ms`

		css += `
			.animated--${i} {
				left: ${generateRandomNum(20, 40)}%;
				animation: yAxis-${i} ${animationDuration} linear forwards, xAxis-${i} ${animationDuration} ease-in-out forwards;
			}

			@keyframes yAxis-${i} {
				0% {
					transform: translateY(${generateRandomNum(0, -150)}px);
					opacity: 0;
				}
				50% {
					opacity: ${generateRandomFloat(0.7, 1)};
				}
				100% {
					transform: translateY(-100vh);
					opacity: ${generateRandomFloat(0, 0.5)};
				}
			}

			@keyframes xAxis-${i} {
				0% {
					margin-left: 0;
				}
				50%  {
					margin-left: ${generateRandomNum(40, 120)}px;
				}
				10% {
					margin-left: 0;
				}
				100% {
					margin-left: ${generateRandomNum(-100, 100)}px;
				}
			}
		`
	}

	appendStylesheet(css)
}

generateStylesheet()

/* Creating hearts */
function createHeart() {
	let div = document.createElement('div')
	div.classList.add('animated')
	div.innerHTML = svg.trim()

	return div.firstChild
}

function generateHearts() {
	trigger.classList.add('button--blocked')
	const likesNum = window.localStorage.getItem('number_of_likes')

	for (let i = 1; i <= likesNum; i++) {
		const heart = createHeart()
		heart.classList.add(`animated--${generateRandomNum(1, 100)}`)
		heart.style.animationDelay = `${generateRandomNum(0, 2500)}ms`
		heartsContainer.appendChild(heart)
	}

	setTimeout(() => {
		while(heartsContainer.firstChild) {
			heartsContainer.removeChild(heartsContainer.firstChild)
		}
		trigger.classList.remove('button--blocked')
		if (likesNum >= 1000) {
			textAlert.textContent = 'Я предупреждал'
		}
	}, 6000);
}

trigger.addEventListener('click', generateHearts)