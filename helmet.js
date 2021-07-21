(function($) {
  "use strict";
  $(window).on("load", function() { // makes sure the whole site is loaded
  var masthead = $(<div class="header">
                      <a href="#default" class="logo">CompanyLogo</a>
                    <div class="header-right">
                      <a class="active" href="#home">Home</a>
                      <a href="#contact">Contact</a>
                      <a href="#about">About</a>
                    </div>
                   </div>);
    $('body').prepend(masthead);
  });
