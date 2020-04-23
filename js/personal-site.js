"use strict";

(function() {
    // Codemirror editor
    let html = CodeMirror.fromTextArea($('#skills')[0],  {
        mode: 'xml',
        lineNumbers: true,
        lineWrapping: true,
        readOnly: true
    });

    // Get the current year and place in year class located in the footer
    var currentDate = new Date(Date.now());
    document.getElementsByClassName('year')[0].innerText = currentDate.getFullYear();
})();