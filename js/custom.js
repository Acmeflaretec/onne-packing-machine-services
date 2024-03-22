// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})


document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('#image-gallery img');
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.boxShadow = '0 0 20px white';
        });
        img.addEventListener('mouseout', () => {
            img.style.boxShadow = 'none';
        });
    });
});
