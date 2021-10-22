var bodyH = document.querySelector("body");

window.addEventListener("scroll", ()=>{
    bodyH.style.height = `${window.scrollY+window.innerHeight}px`;
});

document.addEventListener("DOMContentLoaded", () => {
    //Array of images as cards.
    const cardArray = [
        {
            name: 'Bagel',
            img: './Page assets/images/Memory game/Bagel.png'
        },
        {
            name: 'Bagel',
            img: './Page assets/images/Memory game/Bagel.png'
        },
        {
            name: 'Burger',
            img: './Page assets/images/Memory game/Burger.png'
        },
        {
            name: 'Burger',
            img: './Page assets/images/Memory game/Burger.png'
        },
        {
            name: 'Donut',
            img: './Page assets/images/Memory game/Donut.png'
        },
        {
            name: 'Donut',
            img: './Page assets/images/Memory game/Donut.png'
        },
        {
            name: 'Fries',
            img: './Page assets/images/Memory game/Fries.png'
        },
        {
            name: 'Fries',
            img: './Page assets/images/Memory game/Fries.png'
        },
        {
            name: 'Juice',
            img: './Page assets/images/Memory game/Juice.png'
        },
        {
            name: 'Juice',
            img: './Page assets/images/Memory game/Juice.png'
        },
        {
            name: 'Pizza',
            img: './Page assets/images/Memory game/Pizza.png'
        },
        {
            name: 'Pizza',
            img: './Page assets/images/Memory game/Pizza.png'
        },
        {
            name: 'Salad',
            img: './Page assets/images/Memory game/Salad.png'
        },
        {
            name: 'Salad',
            img: './Page assets/images/Memory game/Salad.png'
        },
        {
            name: 'Sandwich',
            img: './Page assets/images/Memory game/Sandwich.png'
        },
        {
            name: 'Sandwich',
            img: './Page assets/images/Memory game/Sandwich.png'
        },
    ];
    //Function for randomly arranging elements of our array
    cardArray.sort(() => 0.5 - Math.random());

    //Variables
    const grid = document.querySelector(".grid");
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    const result = document.getElementById('result');
    const alertRed = document.querySelector(".alertRed");
    const alertGreen = document.querySelector(".alertGreen");
    const reload = document.querySelector(".reload");

    //Function for placing items in the grid.
    function createBoard(){
        for(let i=0 ; i<cardArray.length ; i++){
            var card = document.createElement('img');
            card.setAttribute('src' , './Page assets/images/Memory game/Back.png');
            card.setAttribute('data-id' , i);
            card.addEventListener("click", flipCard);
            card.addEventListener("click", removeAlert);
            grid.appendChild(card);
        };
    };

    //Function for checking a match and error display.
    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOne = cardsChosenId[0];
        const optionTwo = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]){
            alertGreen.classList.add("show");
            cards[optionOne].setAttribute('src', './Page assets/images/Memory game/Blank.png')
            cards[optionTwo].setAttribute('src', './Page assets/images/Memory game/Blank.png')
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOne].setAttribute('src', './Page assets/images/Memory game/Back.png')
            cards[optionTwo].setAttribute('src', './Page assets/images/Memory game/Back.png')
            alertRed.classList.add("show");
        };

        cardsChosen = [];
        cardsChosenId = [];
        result.innerText = cardsWon.length;

        if(cardsWon.length === (cardArray.length)/2){
            result.innerText = "Congrats! You found them all!"
            reload.style.display = "block";
            reload.addEventListener("click",()=>{
                window.location.reload();
            })
        };
    };

    //Function for removing alert.
    function removeAlert(){
        alertRed.classList.remove("show");
        alertGreen.classList.remove("show");
    }

    //Function for changing the image on clicking.
    function flipCard(){
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch , 500);
        };
    };

    //Finally initialising the grid.
    createBoard();
})