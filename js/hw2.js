//Javascript File
var go = document.getElementById("go");

var playAgainButton = document.querySelector('#playAgain');
playAgainButton.style.display = 'none';

var madLib = function(){
    go.style.display = 'none';
    
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
    
    madLib.innerHTML = "A vacation is when you take a trip to some <adj>" + w1 +
    "</adj> place with your <adj>" + w2 + "</adj> family.  Usually you go to some place that is near a/an <noun>" +
    w3 + "</noun> or up on a/an <noun>" + w4 + "</noun>. A good vacation place is one where you can ride <pnoun>" +
    w5 + "</pnoun> or play <other>" + w6 + "</other> or go hunting for <pnoun>" + w7 + "</pnoun>.  I like to spend my time <ing>" +
    w8 + "</ing> or <ing>" + w9 + "</ing>. When parents go on a vacation, they spend their time eating " +
    " three <pnoun>" + w10 + "</pnoun> a day, and fathers play golf, and mothers sit around <ing>" + w11 +
    "</ing>. Last summer, my little brother fell in a/an <noun>" + w12 + "</noun> and got poison <other>" + w13 +
    "</other> all over his <other>" + w14 + "</other> My family is going to go to (the) <other>" + w15 + "</other>, and I will " +
    "practice <ing>" + w16 + "</ing>. Parents need vacations more than kids because parents are always " +
    "very <adj>" + w17 + "</adj> and because they have to work <other>" + w18 + "</other> hours every day all year " +
    "making enough <pnoun>" + w19 + "</pnoun> to pay for the vacation."
    
    playAgain.style.display = 'inline';
    playAgain.addEventListener('click', resetGame);
};

function resetGame(){
    location.reload();
}

go.addEventListener('click', madLib)