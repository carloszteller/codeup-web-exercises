"use strict";

(function() {
    // Get the current year and place in year class located in the footer
    var currentDate = new Date(Date.now());
    document.getElementsByClassName('year')[0].innerText = currentDate.getFullYear();
})();