const btn = document.querySelector('.card__btn')
const allNumber = document.querySelectorAll('.card__ratingBox-item')
const yourRate = document.querySelector('.card__yourRate')
const secondCard = document.querySelector('.card__second-page')

const removeClass = () => {
	allNumber.forEach(element => {
		element.classList.remove('card__ratingBox-item--active')
	})
}
allNumber.forEach(element => {
	element.addEventListener('click', () => {
		removeClass()
		element.classList.add('card__ratingBox-item--active')
	})
})
btn.addEventListener('click', () => {
	const item = document.querySelector('.card__ratingBox-item--active')
	let dataID = item.getAttribute('data-id')
	yourRate.textContent = `You selected ${dataID} out 5`
	secondCard.style.zIndex = '2'
})
