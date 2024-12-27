const hamburgerMenu = document.querySelector('.hamburger-icon')
const navMobile = document.querySelector('.nav-mobile')
const tabOverview = document.querySelector('.tab-overview')
const tabStructure = document.querySelector('.tab-structure')
const tabSurface = document.querySelector('.tab-surface')
const tabOverviewContent = document.querySelector('.tab-overview-content')
const tabStructureContent = document.querySelector('.tab-structure-content')
const tabSurfaceContent = document.querySelector('.tab-surface-content')

const tabs = [
    { button: document.querySelector('.tab-overview'), content: document.querySelector('.tab-overview-content') },
    { button: document.querySelector('.tab-structure'), content: document.querySelector('.tab-structure-content') },
    { button: document.querySelector('.tab-surface'), content: document.querySelector('.tab-surface-content') }
];

hamburgerMenu.addEventListener('click', () => {
    navMobile.classList.toggle('hidden')
})

tabs.forEach(({button, content}, index) => {
    button.addEventListener('click', () => {
        tabs.forEach(({ content: otherContent }, otherIndex) => {
            if(index === otherIndex) {
                otherContent.classList.add('flex')
                otherContent.classList.remove('hidden')
            } else {
                otherContent.classList.remove('flex')
                otherContent.classList.add('hidden')
            }
            
            currentTab()
        })
    })
})

function currentTab() {
    tabs.forEach(({button, content}, index) => {
        if(content.classList.contains('flex')) {
            button.classList.add('tab-emphasis')
        } else {
            button.classList.remove('tab-emphasis')
        }
    })
}

currentTab()