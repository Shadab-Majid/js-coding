var rect = document.querySelector('#center');

rect.addEventListener("mousemove", function(details) {
    var reactangleLocation = rect.getBoundingClientRect();  
    var cursorPosition = details.screenX;
    var rectWidth = reactangleLocation.width;
    var rectCenter = rectWidth / 2;
    var cursorPositionInRect  = cursorPosition - reactangleLocation.left;

    if(cursorPositionInRect < rectCenter) {
        var redColor = gsap.utils.mapRange(
            0,
            rectCenter,
            255,
            0,
            cursorPositionInRect
        );
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4,
        });
    }
    else {
        var blueColor = gsap.utils.mapRange(
            rectCenter+1,
            rectWidth,
            0,
            255,
            cursorPositionInRect
        );
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4,
        });
    }
    // console.log(cursorPositionInRect);
})

// console.log(gsap.utils.mapRange(0, 250, 255, 0, 23));