class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        // grab reference to all images
        this.images = document.querySelectorAll('img');
        // create a current index
        this.currentIndex = 0; // ?
        //  create buttons, buttons are gonna need some click handlers
        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');
        this.leftButton.addEventListener('click', )
        this.rightButton.addEventListener('click', )
    }
    
}

let carousel = document.querySelector('.carousel');

carousel.forEach($carousel => new Carousel($carousel));
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/


