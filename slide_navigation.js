
var currentId='';
var currentTab='';
var tabContainerHeight=75;

$('.et-hero-tab').click(function (e) {
    var scrollTop=$($(this).attr('href')).offset().top-75;
    $('body').animate({scrollTop:scrollTop},500);
});

$(window).scroll(function (e) {
    checkHeaderPosition();
    findCurrentTabSelector();
});

function checkHeaderPosition() {
    var offset = $('.et-hero-tabs').height() - $('.et-hero-tabs-container').height();
    if ($(window).scrollTop() > offset) {
        //$('.et-header').addClass('et-header--move-up');
        $('.et-hero-tabs-container').addClass('et-hero-tabs-container--top-second');
    }else {
        $('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top-second');
    }
}

function findCurrentTabSelector() {
    var newCurrentId='';
    var newCurrentTab='';
    $('.et-hero-tab').each(function () {
        var id=$(this).attr('href');
        var offsetTop=$(id).offset().top-tabContainerHeight;
        var offsetBottom=$(id).offset().top + $(id).height() -tabContainerHeight;
        //var offsetTop=$(id).offset().top-$(id).height()+tabContainerHeight;
        //var offsetBottom=$(id).offset().top +tabContainerHeight;
        var offsetWindow=$(window).scrollTop();
        if($(window).scrollTop()>offsetTop && $(window).scrollTop()<offsetBottom){
            newCurrentId = id;
            newCurrentTab = $(this);
        }
    });

    if (currentId != newCurrentId || currentId === null) {
        currentId = newCurrentId;
        currentTab = newCurrentTab;
        setSliderCss();
    }
}

function setSliderCss() {
    var width=0;
    var left=0;
    if(currentTab){
        width = currentTab.css('width');
        left = currentTab.offset().left;
    }
    $('.et-hero-tab-slider').css('width', width);
    $('.et-hero-tab-slider').css('left', left);
}