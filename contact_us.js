/*Question 1 */
window.addEventListener("onload",addFunStuff() );

(function(){
    alert('Welcome to the Contact Us page! Have Fun....if you DARE!!!');
})();

function addFunStuff() {

    /*12.1 function names or named function */
    //greenFun();
    
    yellowFun();
    addStuff();
    addText();
    alertB();
    infinityBtn();
    saltySun();
    eventTable();
    formStars();
    formNovas();
    formPlanets();
    styleMoney();
    blah();
    
    
}

//Question 12.4 self invoking function!
(function () {alert("I am super fast")})();
/*Question 3.b and 12.4 self invoking function */
 (function greenFun() {
    var x, i;
  x = document.querySelectorAll(".Green")
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "green"
  }
  
})();

/*Question 3.b */
 function yellowFun() {
    x = document.querySelector(".Yellow")
    x.style.backgroundColor = "yellow";
}
/*12.2 function expression */
var fakeYellow = yellowFun;
/*Question 3.a */
function addStuff() {
    var btn = document.createElement("BUTTON");
    var dummy = document.createElement("p");
    dummy.innerText = "If you bored and want to have a little fun; then I have provided fun activites to bore you to death CIAO!";
    btn.innerHTML = "CLICK ME IF YOU DARE";
    var ohboy = document.getElementById("coolstuff")
    ohboy.appendChild(dummy);
    ohboy.appendChild(btn);
    /*Question 4.a */
    //12.3 anoymous funtion yay
    btn.addEventListener("mousedown", function() {
        
        btn.style.backgroundColor = "red";
        alert("yay you turned the button red!");
        /*12.2 */
        alert("expression function yay.." + fakeYellow);
    })

}
/* Question 4.b */
function addText() {
    var perry = document.createElement("p");
    perry.innerText = "I dare you to type something below!";
    
    var textStuff = document.createElement("input");
    var ohboy = document.getElementById("coolstuff")
    ohboy.appendChild(perry)
    ohboy.appendChild(textStuff);
    textStuff.addEventListener("keydown", function() {

        alert("Im not going to stop annoying you!");
    })
}
/*Question 4.c part1 */
function alertB() {
    var btn2 = document.createElement("BUTTON");
    btn2.innerHTML = "CLICK ME IF YOU WANT SOMETHING TO HAPPEN";
    var ohboy = document.getElementById("coolstuff")
    ohboy.appendChild(btn2)
    
    btn2.addEventListener("mousedown", trollTime);
}
/*Question 4.c part2 */
function trollTime() {
    setTimeout(function()
    {alert("GOT YOU! I bet you thought this button didnt do anything!");},5000);
    
}
/*Question 5 */
function infinityBtn() {
    /*Question 5.1 */
    var btn3 = document.createElement("BUTTON");
    btn3.innerHTML = "So you want to make BUTTON ehhh?";
    /*Question 5.2 */
    var ohboy = document.getElementById("coolstuff")
    ohboy.appendChild(btn3)
    
    btn3.addEventListener("mousedown", fakeButton);
}
function fakeButton() {
    var btn4 = document.createElement("BUTTON");
    btn4.innerHTML = "Existence is Pain, Please click Me to end my PAIN!";
    var ohboy = document.getElementById("coolstuff")
    ohboy.appendChild(btn4)
    
    btn4.addEventListener("mousedown",function(){
        /*Question 5.3 */
        setTimeout(function(){ohboy.removeChild(btn4)},1000)
    });
}
/*Question 10 */
function makebtn() {
    var ohboy = document.getElementById("coolstuff")
    var ult = document.createElement("button");
    ult.innerHTML = "Submit";
    ult.addEventListener("mousedown", function(){alert("Thanks for your feedback");})
    ohboy.appendChild(ult);
    

}
/*Question 6a and 6b */
function saltySun() {
    var woowoo = document.createElement("link");
  woowoo.setAttribute("rel","stylesheet");
  woowoo.setAttribute("href","ss_insert.css");
  document.head.appendChild(woowoo);
}

/*Question 8 */
function eventTable() {
    var cool = document.createElement("p");
    cool.innerHTML = "Here Lies the Event Secrets! Have fun trying to decipher that mess!!!";

    var ohboy = document.getElementById("coolstuff")
    ohboy.appendChild(cool);
    var divine = document.createElement("div");    
    var events = ["Monday", "Friday"];
    var headings = ["What day", "What Event", "How many days till Event?"];
    var eventType = ["Dont drink coffee day", "Fasting on tea drink coffee instead day"];
    var days = [Math.floor(Math.random() * 10),Math.floor(Math.random() * 10)];
    var fullTable = "<table>";
    
    
    fullTable += "<tr>";
    for (var i = 0; i < headings.length; i++) {
        fullTable += "<th>" + headings[i] + "</th>";
        
        
    }
    fullTable += "</tr>";
    
    for (var j = 0; j < 2; j++) {
        fullTable += "<tr>";
        fullTable += "<td>" + events[j] + "</td>" + "<td>" + eventType[j] + "</td>" + "<td>" + days[j] + "</td>";
        fullTable += "</tr>";
    }
    fullTable += "</table>";
    ohboy.appendChild(divine);
    divine.setAttribute("id", "thistable");
    document.getElementById("thistable").innerHTML = fullTable;
}

/*Question 10.1 */
function formStars() {
    var cool1 = document.createElement("p");
    cool1.innerHTML = "Below is a fancy set of feedback forms, and I would appreciate if you responded with your feedback! I guess either way I will force you soo..ya have fun with that!";
    var ohboy = document.getElementById("coolstuff")
    ohboy.appendChild(cool1);
    var suprise = document.createElement("form");
    suprise.innerHTML = "<p>Did you have a Ball? If so please check the box below!</p>"
    ohboy.appendChild(suprise);
    var checkYourSelf = document.createElement("INPUT");
    checkYourSelf.setAttribute("type", "checkbox");
    
    ohboy.appendChild(checkYourSelf);
}
/*Question 10.2 */
function formNovas() {
    var ohboy = document.getElementById("coolstuff");
    var suprise = document.createElement("form");
    suprise.innerHTML = "<p>if you had fun fill in the tiny, small, and hard to see button!</p>"; 
    ohboy.appendChild(suprise);
    var pleaseFillMeIn = document.createElement("input");
    pleaseFillMeIn.setAttribute("type", "radio");
    ohboy.appendChild(pleaseFillMeIn);
}
/*Question 10.3 */
function formPlanets () {
    var ohboy = document.getElementById("coolstuff");
    var suprise = document.createElement("form");
    suprise.innerHTML = "<p>Would so much not want to read your opinion but..if you have the undying need to express yourself through silly tantrums; then please by all means type your heart away below!</p>"; 
    ohboy.appendChild(suprise);

    var pleaseTypeFaster = document.createElement("textarea");
    ohboy.appendChild(pleaseTypeFaster);
    makebtn();

}

/*Question 11 */
function styleMoney() {
    
    var superStyles = document.createElement("style");
    document.head.appendChild(superStyles);
   // superStyles.sheet.insertRule("#pink {color: red;}");
    document.styleSheets[document.styleSheets.length-1].insertRule("#pink {color : white;}",0);
}
function blah () {
    var ohboy = document.getElementById("coolstuff");
    var suprise = document.createElement("p");
    ohboy.appendChild(suprise);
    suprise.setAttribute("id", "God");
    var hello;
    //12.5 arrow function
    hello = () => "Thanks for viewing our page again and hope you have a great day";
    document.getElementById("God").innerHTML = hello();
}
