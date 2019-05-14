$('p').click(function(){
    $(this).slideToggle('slow');
})


$('button').mouseenter(function(){
    $(this).removeClass('makeRed').addClass('makeBlue');
})

$('button').mouseleave(function(){
    $(this).removeClass('makeBlue').addClass('makeRed');
})


/* this is one way to make the boxes change to red when clicked.. when one box is clicked, all boxes with the class matching it turn red
$(document).ready(function(){
    $(".box").on("click", function(){
        var classNames = $(this).attr("class").split(" ");
        $("." + classNames[1]).css("background-color", "red");
    });
})*/

/*this is another way to manipulate the boxes. */

$(document).ready(function(){
    $(".box").on("click", function(){
        /*when we click on an element with a 'box' class, this event will be fired*/
        var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0];
        var className = classNames[1];
        if ($(this).css("background-color") == "rgb(255, 0, 0)"){
            /*if this object is already red, turn it black*/
            $("." + className).css("background-color", "#000");
        } else{
            /*else turn all elements with a box class black 
            and then change the color of all elements with the same 
            class name as the clicked element to red*/
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }
        
        
    });
})