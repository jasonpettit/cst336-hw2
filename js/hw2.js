//Javascript File
var go = document.getElementById("go");

var playAgainButton = document.querySelector('#playAgain');
playAgainButton.style.display = 'none';

var madLib = function(){
    var madLib = document.getElementById("madLib");
    var w1 = document.getElementById("w1").value;
    var w2 = document.getElementById("w2").value;
    var w3 = document.getElementById("w3").value;
    var w4 = document.getElementById("w4").value;
    var w5 = document.getElementById("w5").value;
    var w6 = document.getElementById("w6").value;
    var w7 = document.getElementById("w7").value;
    var w8 = document.getElementById("w8").value;
    var w9 = document.getElementById("w9").value;
    var w10 = document.getElementById("w10").value;
    var w11 = document.getElementById("w11").value;
    var w12 = document.getElementById("w12").value;
    var w13 = document.getElementById("w13").value;
    var w14 = document.getElementById("w14").value;
    var w15 = document.getElementById("w15").value;
    var w16 = document.getElementById("w16").value;
    var w17 = document.getElementById("w17").value;
    var w18 = document.getElementById("w18").value;
    var w19 = document.getElementById("w19").value;
    
    madLib.innerHTML = "A vacation is when you take a trip to some <b>" + w1 +
    "</b> place with your <b>" + w2 + "</b> family.  Usually you go to some place that is near a/an <b>" +
    w3 + "</b> or up on a/an <b>" + w4 + "</b>. A good vacation place is one where you can ride <b>" +
    w5 + "</b> or play <b>" + w6 + "</b> or go hunting for <b>" + w7 + "</b>.  I like to spend my time <b>" +
    w8 + "</b> or <b>" + w9 + "</b>. When parents go on a vacation, they spend their time eating <b>" +
    "</b> three <b>" + w10 + "</b> a day, and fathers play golf, and mothers sit around <b>" + w11 +
    "</b>. Last summer, my little brother fell in a/an <b>" + w12 + "</b> and got poison <b>" + w13 +
    "</b> all over his <b>" + w14 + "</b> My family is going to go to (the) <b>" + w15 + "</b>, and I will<b>" +
    "</b> practice <b>" + w16 + "</b> Parents need vacations more than kids because parents are always<b>" +
    "</b> very <b>" + w17 + "</b> and because they have to work <b>" + w18 + "</b> hours every day all year <b>" +
    "</b> making enough <b>" + w19 + "</b> to pay for the vacation."
};

go.addEventListener('click', madLib)