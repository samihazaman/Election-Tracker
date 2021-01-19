var biden = "https://upload.wikimedia.org/wikipedia/commons/e/e1/Joe_Biden_official_portrait_2013_%28cropped%29.jpg";

var trump = "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg";

var dp = 0;
var rp = 0;

function results () {
    
        if (dp>=270) {
    
       $(".result").text("Joe Biden wins!"); 
       $(".result").css("color", "blue"); 
       $(".image").append("<img src=" + biden + ">");        
       $(".dp").hide();
       $(".rp").hide();    
       $(".oneclick").hide();     
    }

       else if (rp>=270) {
           
      $(".result").text("Donald Trump wins!"); 
      $(".result").css("color", "red"); 
      $(".image").append("<img src=" + trump + ">");
      $(".dp").hide();
      $(".rp").hide();    
      $(".oneclick").hide();     
       }
    
    else  {
           
    $(".result").text("Keep voting!"); 
        } 
}


$(".dp").click(function() {
     dp+=100;
     results();
         
});

$(".rp").click(function(){
     rp+=100;
     results();

});