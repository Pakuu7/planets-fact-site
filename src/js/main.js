const hamburgerMenu = document.querySelector('.hamburger-icon')
const navMobile = document.querySelector('.nav-mobile')

const tabs = [
	{ button: document.querySelector('.tab-overview'), content: document.querySelector('.tab-overview-content') },
	{ button: document.querySelector('.tab-structure'), content: document.querySelector('.tab-structure-content') },
	{ button: document.querySelector('.tab-surface'), content: document.querySelector('.tab-surface-content') },
]

let activeIndex = 0

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

hamburgerMenu.addEventListener('click', () => {
	navMobile.classList.toggle('hidden')
})

function switchTab(index) {
	console.log(index);
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
		contents.forEach((content) => {
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
			button.classList.add('tab-emphasis')
		} else {
			button.classList.remove('tab-emphasis')
		}
	})

	tabsTabletDesktop.forEach(({ buttons }, i) => {
		buttons.forEach((button) => {
			if (i == activeIndex) {
				button.classList.add('tab-emphasis')
			} else {
				button.classList.remove('tab-emphasis')
			}
		})
	})
}

tabs.forEach(({ button }, index) => {
	console.log(button);
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

