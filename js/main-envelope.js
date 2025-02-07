$(document).ready(function () {



    var envelope = $('#envelope');
    // var btn_open = $("#open");
    // var btn_reset = $("#reset");

    envelope.click(function () {
        open();
    });

    // Use for buttoned open and close
    // btn_open.click(function () {
    //     open();
    // });
    // btn_reset.click(function () {
    //     close();
    // });

    function open() {
        envelope.addClass("open")
            .removeClass("close");

        $('.envlope-wrapper').delay(2000).fadeOut('slow');
        // $(".parallax-mirror").attr('style', 'z-index:');

        // $('.envlope-wrapper').delay(600).fadeOut('slow');
        // $('.envlope-wrapper').attr('style', 'display: none !important');

        // $('.main').show();
        // $('#header').show();
        // $('.parallax-mirror').show();

    }
    // function close() {
    //     envelope.addClass("close")
    //         .removeClass("open");
    // }

});