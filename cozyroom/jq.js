console.clear();

$(document).on("click", ".side-btn>div", function () {
    var $this = $(this);
    var $slider_bar = $this.parent().parent();
    var $slider = $slider_bar.find('>.slider');
    var $current = $slider.find('>.active');
    var $post
    var left_btn = $this.index() == 0;

    if (left_btn) {
        $post = $current.prev();
        if ($post.length == 0) {
            $post = $slider.find('>.slides-4');
        }
    } else {
        $post = $current.next();
        if ($post.length == 0) {
            $post = $slider.find('>.slides-1');
        }
    }

    $current.removeClass('active');
    $post.addClass('active');

    var index = $post.index();
    $slider_bar.find('.page-btn>.active').removeClass('active');
    $slider_bar.find('.page-btn>div').eq(index).addClass('active');
});

$(document).on('click', '.page-btn>div', function () {
    var $this = $(this);
    var $slider_bar = $this.parent().parent();
    var $slider = $slider_bar.find('>.slider');
    var index = $this.index();

    $this.siblings('.active').removeClass('active');
    $this.addClass('active');

    $slider.find('>.active').removeClass('active');
    $slider.find('>div').eq(index).addClass('active');
});

setInterval(function () {
    $('.side-btn>.right').click();
}, 5000);

$(document).on('click', 'a', function (e) {
    if ($(this).attr('href') == '#') {
        e.preventDefault();
    }
});

$(document).on('click', '.top-btn', function () {
    $(window).scrollTop(0);
});

function none() {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        console.log(scroll);

        if (scroll < 300) {
            $('.top-btn').addClass('none');
        } else {
            $('.top-btn').removeClass('none');
        }
    });
}
none();

function sub() {
    $(document).on("click", ".small-header>.sub-menu>.ham-btn", function () {
        $('html').addClass('on');
    })

    $(document).on("click", ".small-header>.sub-menu>.menu-box", function () {
        var $this = $(this);
        var $liactive = $this.find('>.inner>ul>li.active');

        $('html').removeClass('on');
        $liactive.removeClass('active');
    })

    $(document).on("click", ".small-header>.sub-menu>.menu-box>.inner", function (e) {
        e.stopPropagation();
    })

    $(document).on("click", ".small-header>.sub-menu>.menu-box>.inner>.top-box>.close", function () {
        var $this = $(this);
        var $menu_box = $this.parent().parent().parent();
        var $liactive = $menu_box.find('>.inner>ul>li.active');

        $('html').removeClass('on');
        $liactive.removeClass('active');
    })

    $(document).on("click", ".small-header>.sub-menu>.menu-box>.inner>ul>li", function () {
        var $this = $(this);

        var hasClass = $this.hasClass('active');

        $this.siblings('.active').removeClass('active');
        $this.addClass('active');

        if (hasClass) {
            $this.removeClass('active');
        }
    })

    $(document).on("click", ".small-header>.sub-menu>.menu-box>.inner>ul>li>ul", function (e) {
        e.stopPropagation();
    })
}
sub();

$(window).resize(function () {
    var width_size = window.outerWidth;

    if (width_size >= 992) {
        $('html').removeClass('on');
        $('.small-header>.sub-menu>.menu-box>.inner>ul>li.active').removeClass('active');
    }
})