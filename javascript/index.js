
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

$(document).ready(function () {
    function countUp(element, start, end, duration) {
        let range = end - start;
        let increment = end > start ? 1 : -1;
        let stepTime = Math.abs(Math.floor(duration / range));
        let current = start;
        let timer = setInterval(function () {
            current += increment;
            $(element).text(current);
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    function triggerCountUp(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).find('.count').each(function () {
                    let $this = $(this);
                    let endValue = parseInt($this.text());
                    $this.text(0);
                    countUp(this, 0, endValue, 1000);
                });
                observer.unobserve(entry.target); // Stop observing after animation is triggered
            }
        });
    }

    // Initialize Intersection Observer
    const observer = new IntersectionObserver(triggerCountUp, { threshold: 0.5 });

    // Observe the section containing the counters
    $('.resultsection').each(function () {
        observer.observe(this);
    });
});

// result-carousel
$(".result-carousel").owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplayTimeout: 1500, // Change autoplay speed (default is 5000)
    smartSpeed: 500, // Speed of slide transition (default is 250)
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
    // result-carousel
})

// testimonial carousel

$(".testimonial-carousel").owlCarousel({
    items: 1, // Show one testimonial at a time
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000, // Different autoplay speed
    autoplayHoverPause: true,
    smartSpeed: 600,
    dots: true,
    nav: false,
    autoplayTimeout: 3000, // Change autoplay speed (default is 5000)
    smartSpeed: 500, // Speed of slide transition (default is 250)
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});

// testimonial carousel


