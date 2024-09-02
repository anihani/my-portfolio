$(document).ready(function () {
    /* ----- Banner JS ----- */
    $("#Slider1").responsiveSlides({
        auto: true,
        nav: true,
        pause: true,
        controller: true,
        speed: 1000,
        timeout: 6000,
        namespace: 'Banner',
        manualControls: '.Banner-Tabs'
    });
    $("#Slider2").responsiveSlides({
        auto: true,
        nav: true,
        pause: true,
        controller: false,
        speed: 1000,
        timeout: 6000,
        namespace: 'blog-img',
        manualControls: '.blog-img-tabs'
    });
    $("#Menu-Slider").responsiveSlides({
        auto: true,
        nav: false,
        pause: true,
        controller: false,
        speed: 1000,
        timeout: 6000,
        namespace: 'Menu-slide',
        manualControls: '.Menu-tabs-control'
    });
    /* ----- Scroll JS ----- */
    $("#flexisel1").flexisel({
        visibleItems: 5,
        itemsToScroll: 1,
        animationSpeed: 1500,
        infinite: true,
        navigationTargetSelector: null,
        autoPlay: {
            enable: true,
            interval: 5000,
            pauseOnHover: true
        },
        responsiveBreakpoints: {
            portrait: {
                changePoint: 480,
                visibleItems: 1,
                itemsToScroll: 1
            },
            landscape: {
                changePoint: 640,
                visibleItems: 2,
                itemsToScroll: 1
            },
            phablet: {
                changePoint: 780,
                visibleItems: 3,
                itemsToScroll: 1
            },
            tablet: {
                changePoint: 840,
                visibleItems: 4,
                itemsToScroll: 1
            }
        }
    });
    $('#HorizontalTab').easyResponsiveTabs({
        tabidentify: 'docTab'
    });
});
