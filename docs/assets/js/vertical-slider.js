var cards = $('#card-slider .slider-item').toArray();

startAnim(cards);

function startAnim(array){
    if(array.length >= 4 ) {
        TweenMax.fromTo(array[0], 0.5, 
            {x:0,y:0,opacity:0.4},
            {x:0, y:-120, opacity:0, zIndex: 0, delay:0.05, ease: Cubic.easeInOut, onComplete: sortArray(array)});

        TweenMax.fromTo(array[1], 0.5, 
            {x:-25, y: 125, opacity:1, zIndex: 1}, 
            {x:0, y: 0, opacity:0.5, zIndex: 0, boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', ease: Cubic.easeInOut});

        TweenMax.to(array[2], 0.5, 
            {bezier:[{x:0, y:250}, 
            {x:-30, y:230}, 
            {x:-25, y:145}], boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', zIndex: 1, opacity: 1, ease: Cubic.easeInOut});

        TweenMax.fromTo(array[3], 0.5, 
            {x:0, y:400, opacity: 0, zIndex: 0}, 
            {x:0, y:350, opacity: 0.5, zIndex: 0, ease: Cubic.easeInOut}, );
    } else {
        $('#card-slider').append('<p>Lo sentimos, el carrusel debe contener más de 3 diapositivas.</p>')
    }
}

function sortArray(array) {
    clearTimeout(delay);
    var delay = setTimeout(function(){
        var firstElem = array.shift();
        array.push(firstElem);
        return startAnim(array); 
    },5000)
}
