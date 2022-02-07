(function() {

function isElementInViewport(el) {
    
    var rect = el.getBoundingClientRect();
    
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

var header = document.querySelector('header');
document.querySelector('.burger').addEventListener('click', function() {
    header.className = header.className == 'active' ? '' : 'active';
});



/**********/
/* SKILLS */
/**********/

var skills = document.querySelector('.skills');
if (skills != null) {
var skillBar = document.querySelectorAll('.skill-bar');
var skillBarLength = skillBar.length;

var i = 0;
var setSkillBarsVIsible = function() {
    var item = skillBar[i];
    setTimeout(function() {
        item.className += ' visible'
        i++;
        if (i < skillBarLength) {
            setSkillBarsVIsible();
        }
    }, 100);
}

var handler = function() {
    if (isElementInViewport(skills)) {
        skills.className += ' visible'
        if (window.addEventListener) {
            removeEventListener('DOMContentLoaded', handler, false);
            removeEventListener('load', handler, false);
            removeEventListener('scroll', handler, false);
            removeEventListener('resize', handler, false);
        } else if (window.attachEvent) {
            detachEvent('onDOMContentLoaded', handler);
            detachEvent('onload', handler);
            detachEvent('onscroll', handler);
            detachEvent('onresize', handler);
        }
        setSkillBarsVIsible();
    }
}

if (window.addEventListener) {
    addEventListener('DOMContentLoaded', handler, false);
    addEventListener('load', handler, false);
    addEventListener('scroll', handler, false);
    addEventListener('resize', handler, false);
} else if (window.attachEvent)  {
    attachEvent('onDOMContentLoaded', handler);
    attachEvent('onload', handler);
    attachEvent('onscroll', handler);
    attachEvent('onresize', handler);
}

}

/**************/
/* END SKILLS */
/**************/



/************/
/* CAROUSEL */
/************/

var prevButton = document.querySelector('#prev');
if (prevButton != null) {

var nextButton = document.querySelector('#next');
var dots = document.querySelector('#dots');
var activeDot = document.querySelector('#active-dot');
var dot = document.querySelectorAll('.dot');
var dotLength = dot.length;
var slides = document.querySelector('#slides');
var slide = document.querySelectorAll('.slide');
var slideContent = document.querySelectorAll('.slide-content');
var slideLength = slide.length;
var currentTransform = 0;
var maxTransform = 0;

var dotStyle = activeDot.currentStyle || window.getComputedStyle(activeDot);
var dotWidth = parseInt(dotStyle.width.replace(/\D/g,''));
var dotTop = parseInt(dotStyle.top.replace(/\D/g,''));
var dotSize = dotWidth + dotTop;

for (var i = 0; i < slideLength; i++) {
    maxTransform = -i * 100;
}

for (var i = 0; i < dotLength; i++) {
    var item = dot[i];
    item.addEventListener('click', function() {
        var currentIndex = -currentTransform / 100;
        var clickedDot = this.getAttribute('data-dot');
        var diff = clickedDot - currentIndex;
        if (diff > 0) {
            for (var j = 0; j < diff; j++) {
                next();
            }
        } else if (diff < 0) {
            for (var j = 0; j > diff; j--) {
                prev();
            }
        }
    });
    console.log(item);
}

var translateY = 'translateY(-' + (slideContent[0].offsetHeight + 10) + 'px)';
dots.style.transform = translateY;

var moveDots = function() {
    dots.style.transform = 'translateY(-' + (slideContent[-currentTransform / 100].offsetHeight + 10) + 'px)';
};

var next = function() {
    var translateDot = 0;
    if (currentTransform == maxTransform) {
        currentTransform = 0;
    } else {
        currentTransform -= 100;
        translateDot = (-currentTransform / 100) * dotSize;
    }
    moveDots();
    slides.style.transform = 'translateX(' + currentTransform + '%)';
    activeDot.style.transform = 'translateX(' + translateDot + 'px)';

};

var prev = function() {
    var translateDot = 0;
    if (currentTransform == 0) {
        currentTransform = maxTransform;
        translateDot = dotSize * (slideLength - 1);
    } else {
        currentTransform += 100;
        translateDot = (-currentTransform / 100) * dotSize;
    }
    moveDots();
    slides.style.transform = 'translateX(' + currentTransform + '%)';
    activeDot.style.transform = 'translateX(' + translateDot + 'px)';
};

prevButton.addEventListener('click', prev);
nextButton.addEventListener('click', next);

var touchStart = 0;
var touchEnd = 0;
var beginTouched = false;

var swipeBegin = function(event) {
    touchStart = event.type == 'mousedown' ? event.screenX : event.changedTouches[0].screenX;
    beginTouched = true;
}

var swipeEnd = function(event) {
    if (!beginTouched) {
        return;
    }
    touchEnd = event.type == 'mouseup' ? event.screenX : event.changedTouches[0].screenX;
    var swipeDistance = touchStart - touchEnd;
    if (swipeDistance > -30 && swipeDistance < 30) {
        beginTouched = false;
        return;
    }
    if (swipeDistance < 0) {
        prev();
    } else {
        next();
    }
    beginTouched = false;
}

slides.addEventListener('touchstart', swipeBegin);
slides.addEventListener('mousedown', swipeBegin);

slides.addEventListener('touchend', swipeEnd);
slides.addEventListener('mouseup', swipeEnd);

window.addEventListener('resize', moveDots);

}

/****************/
/* END CAROUSEL */
/****************/



/***********/
/* CONTACT */
/***********/

var contactForm = document.querySelector('#contact-form');
var submitContainer = document.querySelector('#submit-container');
var resetForm = document.querySelector('#reset');
var messageSent = document.querySelector('#message-sent');
var closePopup = document.querySelector('#close-popup');
if (contactForm != null) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        submitContainer.className = 'loading';
        var firstName = document.querySelector('#first-name').value;
        var lastName = document.querySelector('#last-name').value;
        var telephone = document.querySelector('#telephone').value;
        var email = document.querySelector('#email').value;
        var description = document.querySelector('#description').value;
        var data = 'first_name=' + firstName + '&last_name=' + lastName + '&telephone=' + telephone + '&email=' + email + '&description=' + description;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
         } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                console.log(xmlhttp.responseText);
                resetForm.click();
                submitContainer.className = '';
                messageSent.className = 'visible';
            }
        }
        xmlhttp.open('POST', 'https://formsubmit.co/ajax/nathan.martzolff@gmail.com', true);
        xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlhttp.send(data);
    });

    closePopup.addEventListener('click', function() {
        messageSent.className = '';
    });
}

/***************/
/* END CONTACT */
/***************/

})();