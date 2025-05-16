let rect = document.querySelector('#center');
let y_rect = document.querySelector('#y-changing');

rect.addEventListener("mousemove", function(details) {
    let reactangleLocation = rect.getBoundingClientRect(); 
    let cursorPosition = details.screenX;
    let rectWidth = reactangleLocation.width;
    let rectCenter = rectWidth / 2;
    let cursorPositionInRect  = cursorPosition - reactangleLocation.left;

    if(cursorPositionInRect < rectCenter) {
        let redColor = gsap.utils.mapRange(
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
        let blueColor = gsap.utils.mapRange(
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
y_rect.addEventListener("mousemove", function(details) {
    let reactangleLocation = y_rect.getBoundingClientRect();
    let yPosition = details.clientY;
    let height = reactangleLocation.height;
    let yCenter = height / 2;
    let yCursorPositionInRect = yPosition - reactangleLocation.top;
    if(yCursorPositionInRect < yCenter) {
        let yellowColor = gsap.utils.mapRange(
            0,
            yCenter,
            255,
            0,
            yCursorPositionInRect
        );
        gsap.to(y_rect, {
            backgroundColor: `rgb(255, ${yellowColor}, 0)`, // red stays 255
            ease: Power4,
        });
    } else {
        let greenColor = gsap.utils.mapRange(
            yCenter,
            height,
            128,
            0,
            yCursorPositionInRect
            );
        gsap.to(y_rect, {
            backgroundColor: `rgb(0, ${greenColor}, 0)`,
            ease: Power4,
        });
    }
    // console.log(yPosition, height, yCenter, yCursorPositionInRect);
})
// console.log(gsap.utils.mapRange(0, 250, 255, 0, 23));





/**
 * 
 * keywords which used to declear valriable in js. 
 * there var, let and const
 * 
 * differnce between this var and let is 
 * 
 */