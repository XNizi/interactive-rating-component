const AllRatingElements = document.querySelectorAll('.card__rating-element')
const submitBtn = document.querySelector('.submitBtn')
const rateNumber = document.querySelector('.rateNumber')
const ShowElement = document.querySelector('.rating-component--show-rate')

let rate = 0

const showRate = () => {
	AllRatingElements.forEach(element => {
		if (element.classList.contains('activeRating')) {
			rate = element.getAttribute('id')
         rateNumber.textContent = rate
			ShowElement.classList.add('show')
		}
	})
}

const ClearClass = () => {
	AllRatingElements.forEach(element => {
		element.classList.remove('activeRating')
	})
}

AllRatingElements.forEach(element => {
	element.addEventListener('click', () => {
		ClearClass()
		element.classList.add('activeRating')
	})
})

submitBtn.addEventListener('click', showRate)
