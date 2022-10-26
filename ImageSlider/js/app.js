const slides = document.querySelectorAll(".slide");
var counter = 0;
// console.log(slides);
slides.forEach(
    (slide, index) => {
        slide.style.bottom = `${index * 100}%`
    }
)

const goPrev = () => {
    if (counter < 0) return;
    counter--;
    slideImage()
}

const goNext = () => {
    if (counter > 3) return;
    counter++;
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateY(${counter * 100}%)`
        }
    )
}