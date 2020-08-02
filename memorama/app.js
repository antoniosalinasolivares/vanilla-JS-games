document.addEventListener('DOMContentLoaded', () => {

	var  cardArray = [
		{
			name: 'fries',
			img: 'images/fries.png'
		},
		{
			name: 'fries',
			img: 'images/fries.png'
		},
		{
			name: 'cheeseburger',
			img: 'images/cheeseburger.png'
		},
		{
			name: 'cheeseburger',
			img: 'images/cheeseburger.png'
		},
		{
			name: 'hotdog',
			img: 'images/hotdog.png'
		},
		{
			name: 'hotdog',
			img: 'images/hotdog.png'
		},
		{
			name: 'milkshake',
			img: 'images/milkshake.png'
		},
		{
			name: 'milkshake',
			img: 'images/milkshake.png'
		},
		{
			name: 'ice-cream',
			img: 'images/ice-cream.png'
		},
		{
			name: 'ice-cream',
			img: 'images/ice-cream.png'
		},
		{
			name: 'pizza',
			img: 'images/pizza.png'
		},
		{
			name: 'pizza',
			img: 'images/pizza.png'
		},
	]

	const shuffle = (array) => {
		array.sort(() => Math.random() - 0.5);
	}

	shuffle(cardArray)
	console.log(cardArray)

	// getting the board from the html document
	const grid = document.querySelector('.grid')
	let cardsChosen = []
	let cardsBlanked = []
	// creating a board
	const createBoard = () => {
		for(let i = 0; i  < cardArray.length; i++){
			var card = document.createElement('img')
			card.setAttribute('src','./images/blank.png')
			card.setAttribute('data-id', i)
			card.addEventListener('click',flipCard)
			grid.appendChild(card)
		}
	}

	const flipCard = (event) => {
		let currentElement = event.currentTarget
		let selectedCardId = currentElement.getAttribute('data-id')
		if(currentElement.getAttribute('src') === 'images/white.png'){
			console.log('Por que haces click en esas cosas, chato :(')
		}else{
			cardsChosen.push(currentElement)
			currentElement.setAttribute('src', cardArray[selectedCardId].img)
			if(cardsChosen.length === 2) {
				setTimeout(checkMatches, 500)
			}
		}
	}
	

	const checkMatches = () => {
		const element1 = cardsChosen.pop()
		const element2 = cardsChosen.pop()
		if(element1.getAttribute('src') === element2.getAttribute('src')){
			element1.setAttribute('src', 'images/white.png')
			element2.setAttribute('src', 'images/white.png')
			cardsBlanked.push(element1)
			cardsBlanked.push(element2)
			
		} else {
			element1.setAttribute('src', 'images/blank.png')
			element2.setAttribute('src', 'images/blank.png')
		}
		if(cardsBlanked.length === cardArray.length){
			if(confirm('You won!')){
				location.reload();
			}
		}
	}



	createBoard()
})