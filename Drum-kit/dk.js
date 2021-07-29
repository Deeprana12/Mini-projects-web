


for(var i = 0;i < document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        // alert("I got selected!!");
        // var audio = new Audio('sounds/tom-1.mp3');
        // audio.play();
        var x = this.innerHTML;
        mksnd(x);
        dAnim(x);

    });

}

document.addEventListener("keypress",function(event){
    mksnd(event.key);
    dAnim(event.key);
});

function mksnd(key){
               
        switch(key){

            case "w" : 
                var a = new Audio("sounds/tom-1.mp3");
                a.play();
            break;

            case "a" : 
                var a = new Audio("sounds/tom-2.mp3");
                a.play();
            break;

            case "s" : 
                var a = new Audio("sounds/tom-3.mp3");
                a.play();
            break;

            case "d" : 
                var a = new Audio("sounds/tom-4.mp3");
                a.play();
            break;

            case "j" : 
                var a = new Audio("sounds/snare.mp3");
                a.play();
            break;

            case "k" : 
                var a = new Audio("sounds/crash.mp3");
                a.play();
            break;
            
            case "l" : 
                var a = new Audio("sounds/kick-bass.mp3");
                a.play();

            break;

            default:
         }
    }

function dAnim(ckey){

    var v = document.querySelector("." + ckey);
    
    v.classList.add("pressed");

    setTimeout(function(){
        v.classList.remove("pressed");
    },100);

}