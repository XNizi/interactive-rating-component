const allRating = document.querySelectorAll('.card__ratingItem')
const submitBtn = document.querySelector('.card__submit')
const yourRate = document.querySelector('.card__yourRate')
const secondPage = document.querySelector('.second-page')
allRating.forEach(el => {
	el.addEventListener('click', () => {
		allRating.forEach(el => {
			el.classList.remove('card__ratingItem--active')
		})
		el.classList.add('card__ratingItem--active')
	})
})
submitBtn.addEventListener('click', () => {
	let rate = 1
	allRating.forEach(el => {
		if (el.classList.contains('card__ratingItem--active')) {
			rate = Number(el.textContent)
		}
	})
	yourRate.textContent = `You selected ${rate} out of 5`
	secondPage.classList.add('second-page--active')
})
