!(function($) {
    "use strict";

    // Chat Box
    
    setTimeout(function(){ 
      window.formbutton =
              window.formbutton ||
              function() {
                (formbutton.q = formbutton.q || []).push(arguments);
              };
            formbutton("create", {
              action: "https://formspree.io/f/myybnkzb",
              buttonImg: "<i class='fas fa-paper-plane' style='font-size:20px'/>",
              title: "Contact Me",
              fields: [
                {
                  type: "text",
                  label: "Name:",
                  name: "name",
                },
                {
                  type: "email",
                  label: "Email:",
                  name: "_replyto",
                },
                {
                  type: "text",
                  label: "Title:",
                  name: "title",
                },
                {
                  type: "textarea",
                  label: "Message:",
                  name: "message",
                },
                // {
                //   type: "checkbox",
                //   label: "Please send me your monthly newsletter",
                //   name: "_optin",
                // },
                { type: "submit", value: "Send" }
              ],
              styles: {
                fontFamily: "Montserrat",
                modal: {
                  border: "1px solid #6D6875",
                  boxShadow: "6px 6px 0 #6D6875",
                  borderRadius: "0",
                },
                title: {
                  padding: "24px 24px 0px 24px",
                  background: "rgba(0,0,0,0)",
                  color: "#2e2a37",
                  fontFamily: "Marcellus SC",
                  fontSize: "2em",
                },
                body: {
                    padding: "16px 24px 24px",
                },
                field: {
                  display: "flex",
                },
                submitField: {
                  justifyContent: "flex-end",            
                },
                label: {
                  width: "40%",
                },
                checkboxLabel: {
                  width: "auto",
                },
                input: {
                  borderRight: "1px solid rgba(0,0,0,0.1)",
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                  borderRadius: "0px"
                },
                button: {
                  border: "1px solid #6D6875",
                  boxShadow: "3px 3px 0px #6D6875",
                  // bottom: "10%",
                },
                closeButton: {
                  textShadow: "0 0 0 #2e2a37",
                }
              },
              initiallyVisible: false
            });
    }, 2000);

    
  
    // Preloader
    $(window).on('load', function() {
      if ($('#preloader').length) {
        $('#preloader').delay(2000).fadeOut('slow', function() {
          $(this).remove();
        });
      }
    });

    if ($('.typed').length) {
        var typed_strings = $(".typed").data('typed-items');
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
          strings: typed_strings,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000
        });
    }

    $(function(){
        var test = localStorage.input === 'true'? true: false;
        $('input').prop('checked', test || false);
    });

    $('input').on('change', function() {
        localStorage.input = $(this).is(':checked');
        console.log($(this).is(':checked'));
    });
    (function() {
        $('body').css('display', 'block');
    })();

    setTimeout(function(){ 
        $('#heading').css('display', 'flex');
    }, 2000);
  
})(jQuery);

function changeColor() {
    if (document.getElementById('toggle').checked) { // White Mode
        document.getElementById('my-body').style.backgroundColor = "#5CDB95";
        document.getElementById('heading').style.color = "#FC4445";
        document.getElementById('desc').style.color = "#2F2FA2";
        var cols = document.getElementsByClassName('cmd-line');
        for(i = 0; i < cols.length; i++) {
            cols[i].style.color = "white";
        }
        cols = document.getElementsByClassName('input');
        for(i = 0; i < cols.length; i++) {
            cols[i].style.color = "#2F2FA2";
        } 
    } else { // Dark Mode
        document.getElementById('my-body').style.backgroundColor = "rgb(25, 25, 25)";
        document.getElementById('name').style.color = "red";
        document.getElementById('desc').style.color = "#4AF626";
        var cols = document.getElementsByClassName('cmd-line');
        for(i = 0; i < cols.length; i++) {
            cols[i].style.color = "rgba(255,255,255,.75)";
        }
        cols = document.getElementsByClassName('input');
        for(i = 0; i < cols.length; i++) {
            cols[i].style.color = "#4AF626";
        }
    }
} 
