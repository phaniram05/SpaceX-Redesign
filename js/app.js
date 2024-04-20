// encapsulate

(function() {

    // variables written inside this will not be available outside.
    // node js uses this internally.

    let socials = document.querySelectorAll('.social div')
    socials.forEach(function(social, index) {
        //icons-move is the name of keyframes in app.css file
        // adding delay of 0.2 s in addition their index/7 values
        // effects: ease-in-out, 
        social.style.animation = `icons-move 0.6s cubic-bezier(.51,.92,.24,1.15) forwards ${index/7 + 0.2}s`;
    })


    let rocketPieces = document.querySelectorAll('.rocket-body span')

    let rocket = document.querySelector('.rocket')

    // Why / 5 ? waits till we scroll some part of the section
    let triggerStart = window.innerHeight / 5; 

    let rocketOffsetTop = rocket.offsetTop;

    let thirdOffsetTop = rocketPieces[2].offsetTop;

    document.addEventListener('scroll', (event)=> {
        if (window.scrollY > (rocketOffsetTop - triggerStart)){
            rocketPieces[0].classList.add('active');
            rocketPieces[1].classList.add('active');
        }else {
            rocketPieces[0].classList.remove('active');
            rocketPieces[1].classList.remove('active');
        }

        if (window.scrollY > (thirdOffsetTop - triggerStart)){
            rocketPieces[2].classList.add('active')
        }else{
            rocketPieces[2].classList.remove('active')
        }
    })

}())