$(document).ready(function () {

    /***************** Waypoints ******************/

    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function () {
        $('.wp6').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function () {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function () {
        $('.wp8').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp9').waypoint(function () {
        $('.wp9').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    /***************** Initiate Flexslider ******************/
    $('.flexslider').flexslider({
        animation: "slide"
    });

    /***************** Initiate Fancybox ******************/

    $('.single_image').fancybox({
        padding: 4
    });

    $('.fancybox').fancybox({
        padding: 4,
        width: 1000,
        height: 800
    });

    /***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });
    /* When user clicks a link */
    $('.header-nav li a').click(function () {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');

    });

    /***************** Header BG Scroll ******************/

    $(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 20) {
                $('section.navigation').addClass('fixed');
                $('header').css({
                    "border-bottom": "none",
                    "padding": "35px 0"
                });
                $('header .member-actions').css({
                    "top": "26px",
                });
                $('header .navicon').css({
                    "top": "34px",
                });
            } else {
                $('section.navigation').removeClass('fixed');
                $('header').css({
                    "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
                    "padding": "50px 0"
                });
                $('header .member-actions').css({
                    "top": "41px",
                });
                $('header .navicon').css({
                    "top": "48px",
                });
            }
        });
    });
    /***************** Smooth Scrolling ******************/

    $(function () {

        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 90
                    }, 2000);
                    return false;
                }
            }
        });

    });

    /********************** Social Share buttons ***********************/
    var share_bar = document.getElementsByClassName('share-bar');
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);

    for (var i = 0; i < share_bar.length; i++) {
        var html = '<iframe allowtransparency="true" frameborder="0" scrolling="no"' +
            'src="https://platform.twitter.com/widgets/tweet_button.html?url=' + encodeURIComponent(window.location) + '&amp;text=' + encodeURIComponent(document.title) + '&amp;via=ramswarooppatra&amp;hashtags=ramandantara&amp;count=horizontal"' +
            'style="width:105px; height:21px;">' +
            '</iframe>' +

            '<iframe src="//www.facebook.com/plugins/like.php?href=' + encodeURIComponent(window.location) + '&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=21&amp;appId=101094500229731&amp;width=150" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:150px; height:21px;" allowTransparency="true"></iframe>' +

            '<div class="g-plusone" data-size="medium"></div>';

        // '<iframe src="https://plusone.google.com/_/+1/fastbutton?bsv&amp;size=medium&amp;url=' + encodeURIComponent(window.location) + '" allowtransparency="true" frameborder="0" scrolling="no" title="+1" style="width:105px; height:21px;"></iframe>';

        share_bar[i].innerHTML = html;
        share_bar[i].style.display = 'inline-block';
    }

    /********************** Embed youtube video *********************/
    $(".player").YTPlayer({
        mute: true,  
        autoPlay: true,
        useOnMobile: true,  // Allows video to attempt playback on mobile
        mobileFallbackImage: "img/video_fallback.jpg",  // Show an image if video fails
        containment: "body",
        showControls: false,
        opacity: 1
    });
    
    


    /********************** Toggle Map Content **********************/
    $('#btn-show-map').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });
    $('#btn-show-content').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });

    /**********************  Menu  **********************/
     // When the modal opens
     $('#dc-modal').on('shown.bs.modal', function () {
        // Lock the body scroll
        $('body').addClass('modal-open');
    });

    // When the modal closes
    $('#dc-modal').on('hidden.bs.modal', function () {
        // Unlock the body scroll
        $('body').removeClass('modal-open');
    });

    
    
    /**********************  FAQ  **********************/
    $(document).ready(function() {
        $('#faq-content').hide();  // Hide FAQ content initially
    });
    
    $('.faq-toggle-btn').click(function () {
        $(this).toggleClass('active');  // Toggle the button's active state
        $('#faq-content').slideToggle(300);  // Smooth slide toggle for the FAQ section
    });
    

    /********************** RSVP **********************/
    // $('#rsvp-forme').on('submit', function (e) {
    //     e.preventDefault();
    //     var data = $(this).serialize();

    //     $('#alert-wrapper').html(alert_markup('info', '<strong>Just a sec!</strong> We are saving your details.'));

    //     if ($('#invite_code').val() !== '42069') {
    //         $('#alert-wrapper').html(alert_markup('danger', '<strong>Sory!</strong> Your invite code is incorrect.'));
    //     } else {
    //         $.post('https://script.google.com/macros/s/AKfycbzvimUNMsqDizvLx46y45Xqjzlm2NNf3KSmSJCgN4gk6JuVdLYyNXaXaf9vT9VN-lTv/exec', data)
    //             .done(function (data) {
    //                 console.log(data);
    //                 if (data.result === "error") {
    //                     $('#alert-wrapper').html(alert_markup('danger', data.message));
    //                 } else {
    //                     $('#alert-wrapper').html('');
    //                     $('#rsvp-modal').modal('show');
    //                 }
    //             })
    //             .fail(function (data) {
    //                 console.log(data);
    //                 $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server. '));
    //             });
    //     }
    // });
    var GOOGLE_API_URL = 'https://script.google.com/macros/s/AKfycbwakcs7hX-BRsQWSavzpKNPL40K8MPZubLt6hcNsN_te-0R70rMj78HftPbv26zCSkP-A/exec';
    // Lock scroll when modal is open
    $('#rsvp-modal').on('shown.bs.modal', function () {
        $('body').addClass('modal-open');
    });

    // Unlock scroll when modal is closed
    $('#rsvp-modal').on('hidden.bs.modal', function () {
        $('body').removeClass('modal-open');
    });
    // Handle the form submission for the invite code
    $('#input-form').on('submit', function (e) {
        e.preventDefault();
        if ($('#inviteCode').val() == '42069' ) {
            $('#input-form, #input-text').slideUp();
            $('#video-bg').addClass('visible');
            // Trigger a resize after showing the section to recalculate dimensions
            setTimeout(() => {
                $(window).trigger('resize');
            }, 300); // Delay ensures the element is fully visible before recalculating layout
            $('#nav-bar, #menu-day, #nav-icon, #map, #intro, #events, #day-events, #menu, #eng-pics, #prezola, #faq, #faq-day, #rsvp').show();
        } else if ($('#inviteCode').val() == '220309'){
            $('#input-form, #input-text').slideUp();
            $('#video-bg').addClass('visible');
            // Trigger a resize after showing the section to recalculate dimensions
            setTimeout(() => {
                $(window).trigger('resize');
            }, 300); // Delay ensures the element is fully visible before recalculating layout
            $('#nav-bar, #menu-evening, #nav-icon, #map, #intro, #events, #night-events, #eng-pics, #prezola, #faq, #faq-night, #evening-rsvp').show();
        } else {
            $('#alert-wrapper1').html(alert_markup('danger', '<strong>Sorry!</strong> Your invite code is incorrect.'));
            return;
        }

    });

    $(document).ready(function () {
        // Get elements
        const guestAttendance = $('select[name="guestAttendance"]');
        const guestDrink = $('select[name="guestDrink"]');
        const plusAttendance = $('select[name="plusAttendance"]');
        const plusDrink = $('select[name="plusDrink"]');
    
        // Function to toggle required attribute
        function toggleRequired(attendanceField, drinkField) {
            if (attendanceField.val() === "yes") {
                drinkField.attr("required", "required");
            } else {
                drinkField.removeAttr("required");
            }
        }
    
        // Event listener for guest attendance
        guestAttendance.on("change", function () {
            toggleRequired(guestAttendance, guestDrink);
        });
    
        // Event listener for plus one's attendance (if applicable)
        if (plusAttendance.length) {
            plusAttendance.on("change", function () {
                toggleRequired(plusAttendance, plusDrink);
            });
        }
    
        // Run once on page load to set the initial state
        toggleRequired(guestAttendance, guestDrink);
        if (plusAttendance.length) {
            toggleRequired(plusAttendance, plusDrink);
        }
    });
    

    $('#rsvp-form').on('submit', function (e) {
        e.preventDefault();
        
        $('#alert-wrapper2').html(alert_markup('info', '<strong>Just a sec!</strong> Checking your details.'));
        
        let getGuestJSON =  {
            action: "getGuestDetails",
            guestName: $('#guestName').val(),
            invite_code: $('#inviteCode').val()
        };
    
        // Send the POST request to the Google Apps Script Web App URL
        $.post(GOOGLE_API_URL, getGuestJSON)
        .done(function (response) {
            if (response.result === "error" && response.message === "Guest not found") {
                $('#alert-wrapper2').html(alert_markup('danger', 'We can\'t seem to find you on the guest list! Please reach out to Ben or Lucy if you think this is a mistake.'));
            } else if (response.result === "error") {
                // Handle other errors (like incorrect invite code)
                $('#alert-wrapper2').html(alert_markup('danger', '<strong>Sorry!</strong> ' + response.message));
            } else {
                console.log(response);
                console.log(response.hasPlusOne);
                var guestName = response.guestName;
                $('#hiddenGuestName').val(guestName);

                // Handle plus-one section display based on the response
                if (response.hasPlusOne) {
                    $('#plusOneDetails').show();
                    $('#plusOneNameDisplay').text(response.plusOneName || 'your plus one');
                    $('.plusOneNameDisplay').text(response.plusOneName || 'your plus one');
                    var plusOneFullName = response.plusOneFullName || response.plusOneName || 'plus one';
                    $('#hiddenPlusOneFullName').val(plusOneFullName);
                } else {
                    $('#plusOneDetails').hide();
                }
    
                // Show the modal for the next step of RSVP (attendance, dietary, drinks)
                $('#rsvp-modal').modal('show');
            }
        })
        .fail(function () {
            $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> There was an issue checking your details. Please reach out to Ben or Lucy.'));
        });
    });
    
    
    // Handle final RSVP submission within the modal
    $('#final-rsvp-form').on('submit', function (e) {
        e.preventDefault();
        // Find the submit button
        var submitButton = $(this).find('button[type="submit"]');

        // Lock the button and replace with spinner
        submitButton.prop('disabled', true); // Disable the button
        submitButton.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting...');
             
        var rsvpData = $(this).serializeArray();  // Serialize the form data into an array of key/value pairs
        var rsvpObject = {}; // Empty object to store form data
    
        // Convert serialized array into an object
        rsvpData.forEach(function (field) {
            rsvpObject[field.name] = field.value;
        });
        
        $('#alert-wrapper3').html(alert_markup('info', '<strong>Just a sec!</strong> Saving your RSVP details.'));
        
        // Save the RSVP details
        $.post(GOOGLE_API_URL, {
            action: 'saveRSVP',
            ...rsvpObject  // Use the object to spread the data
        })
        .done(function (response) {
            if (response.result === "error") {
                $('#alert-wrapper3').html(alert_markup('danger', response.message));
            } else {
                $('#alert-wrapper2').html(alert_markup('success', '<strong>Thank you!</strong> Your RSVP has been saved.'));
                $('#rsvp-modal').modal('hide');  // Hide the RSVP modal after successful submission
            }
        })
        .fail(function () {
            submitButton.prop('disabled', false);
            submitButton.html('Submit');
            $('#alert-wrapper3').html(alert_markup('danger', '<strong>Sorry!</strong> There was an issue saving your RSVP. Please reach out to Ben or Lucy.'));
        });
    });

    $('#evening-form').on('submit', function (e) {
        e.preventDefault();
        // Find the submit button
        var submitButton = $(this).find('button[type="evening-submit"]');
        $('#hiddenGuestAttendance').val('yes - evening');

        // Lock the button and replace with spinner
        submitButton.prop('disabled', true); // Disable the button
        submitButton.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting...');
             
        var rsvpData = $(this).serializeArray();  // Serialize the form data into an array of key/value pairs
        var rsvpObject = {}; // Empty object to store form data
    
        // Convert serialized array into an object
        rsvpData.forEach(function (field) {
            rsvpObject[field.name] = field.value;
        });
        
        $('#alert-wrapper-evening').html(alert_markup('info', '<strong>Just a sec!</strong> Saving your RSVP details.'));
        
        // Save the RSVP details
        $.post(GOOGLE_API_URL, {
            action: 'saveRSVP',
            ...rsvpObject  // Use the object to spread the data
        })
        .done(function (response) {
            if (response.result === "error") {
                $('#alert-wrapper-evening').html(alert_markup('danger', response.message));
            } else {
                $('#alert-wrapper-evening').html(alert_markup('success', '<strong>Thank you!</strong> Your RSVP has been saved.'));
                submitButton.html('Done!');
            }
        })
        .fail(function () {
            submitButton.prop('disabled', false);
            submitButton.html('Submit');
            $('#alert-wrapper-evening').html(alert_markup('danger', '<strong>Sorry!</strong> There was an issue saving your RSVP. Please reach out to Ben or Lucy.'));
        });
    });
    
    
});

/********************** Extras **********************/

// Google map
function initMap() {
    var location = {lat: 55.89138290242082, lng: -4.28971085071663};
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: location,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

function initBBSRMap() {
    var la_fiesta = {lat: 55.89138290242082, lng: -4.28971085071663};
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: la_fiesta,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: la_fiesta,
        map: map
    });
}

// alert_markup
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}
