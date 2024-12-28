const hamburgerMenu = document.querySelector('.hamburger-icon')
const navMobile = document.querySelector('.nav-mobile')

let activeIndex = 0

const tabs = [
	{ button: document.querySelector('.tab-overview'), content: document.querySelector('.tab-overview-content') },
	{ button: document.querySelector('.tab-structure'), content: document.querySelector('.tab-structure-content') },
	{ button: document.querySelector('.tab-surface'), content: document.querySelector('.tab-surface-content') },
]

const tabsTabletDesktop = [
	{
		buttons: document.querySelectorAll('.tab-overview-tablet-desktop'),
		contents: document.querySelectorAll('.tab-overview-content'),
	},
	{
		buttons: document.querySelectorAll('.tab-structure-tablet-desktop'),
		contents: document.querySelectorAll('.tab-structure-content'),
	},
	{
		buttons: document.querySelectorAll('.tab-surface-tablet-desktop'),
		contents: document.querySelectorAll('.tab-surface-content'),
	},
]

const pageStyles = {
	'/index.html': { border: 'rgb(65, 158, 187)', background: 'rgb(65, 158, 187)' },
	'/earth.html': { border: 'rgb(45 104 240)', background: 'rgb(45 104 240)' },
	'/mars.html': { border: 'rgb(205 81 32)', background: 'rgb(205 81 32)' },
	'/jupiter.html': { border: 'rgb(236 173 122)', background: 'rgb(236 173 122)' },
	'/saturn.html': { border: 'rgb(252 203 107)', background: 'rgb(252 203 107)' },
	'/uranus.html': { border: 'rgb(30 193 162)', background: 'rgb(30 193 162)' },
	'/venus.html': { border: 'rgb(237 162 73)', background: 'rgb(237 162 73)' },
	'/neptune.html': { border: 'rgb(65 158 187)', background: 'rgb(65 158 187)' },
};

const currentPath = window.location.pathname;
const pageColor = pageStyles[currentPath];

if (pageColor) {
	document.documentElement.style.setProperty('--tab-border-color', pageColor.border);
	document.documentElement.style.setProperty('--tab-background-color', pageColor.background);
}


hamburgerMenu.addEventListener('click', () => {
	navMobile.classList.toggle('hidden')
})

function switchTab(index) {
	activeIndex = index

	tabs.forEach(({ content }, i) => {
		if (i == index) {
			content.classList.add('flex')
			content.classList.remove('hidden')
		} else {
			content.classList.remove('flex')
			content.classList.add('hidden')
		}
	})

	tabsTabletDesktop.forEach(({ contents }, i) => {
		contents.forEach(content => {
			if (i == index) {
				content.classList.add('flex')
				content.classList.remove('hidden')
			} else {
				content.classList.remove('flex')
				content.classList.add('hidden')
			}
		})
	})
	updateTabStyles(index)
}

function updateTabStyles(activeIndex) {
	tabs.forEach(({ button }, i) => {
		if (i == activeIndex) {
			button.classList.add('tab-emphasis-border')
		} else {
			button.classList.remove('tab-emphasis-border')
		}
	})

	tabsTabletDesktop.forEach(({ buttons }, i) => {
		buttons.forEach(button => {
			if (i == activeIndex) {
				button.classList.add('tab-emphasis-background')
			} else {
				button.classList.remove('tab-emphasis-background')
			}
		})
	})
}

tabs.forEach(({ button }, index) => {
	button.addEventListener('click', () => {
		switchTab(index)
	})
})

tabsTabletDesktop.forEach(({ buttons, contents }, index) => {
	buttons.forEach(button => {
		button.addEventListener('click', () => {
			switchTab(index)
		})
	})
})
switchTab(0)
