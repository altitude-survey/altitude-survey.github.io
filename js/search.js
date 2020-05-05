
$(document).ready(function () {
    // Search toggle
    $(".search__toggle").on("click", function () {
        $(".search-content").toggleClass("is--visible");
        $(".initial-content").toggleClass("is--hidden");
        // set focus on input
        setTimeout(function () {
            $(".search-content input").focus();
        }, 400);
    });


    // Close search screen with Esc key
    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            if ($(".initial-content").hasClass("is--hidden")) {
                $(".search-content").toggleClass("is--visible");
                $(".initial-content").toggleClass("is--hidden");
            }
        }
    });
}
