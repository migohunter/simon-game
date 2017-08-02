$(document).ready(function() {
 //declare variables
  var random=[];
  var litID=[];
  var lit;
  var clicked=[];
  var i;
  var j=0;
  var count=1;
  var on;
  var off;
  var strict;
  var x;

 
  function change1() {
    //set interval length time
    if (count<=10) {
      off=400;
      on=800;
    }

    else {
      off=250;
      on=500;
    }
    
    //set interval + buttons light up
    x=setInterval(function() {
      if(random[j]==1) {
        lit="light1";
        $("#one").addClass(lit);
        $("#audio1")[0].play();
        litID.push(1);
        
        setTimeout(function(){
          $("#one").removeClass(lit);
        },off);
      }
    
      else if(random[j]==2) {
        lit="light2";
        $("#two").addClass(lit);
        $("#audio2")[0].play();
        litID.push(2);
        
        setTimeout(function(){
          $("#two").removeClass(lit);
        },off);
      }
      
      else if(random[j]==3) {
        lit="light3";
        $("#three").addClass(lit);
        $("#audio3")[0].play();
        litID.push(3);
        
        setTimeout(function(){
          $("#three").removeClass(lit);
        },off);
      }
    
      else {
        lit="light4";
        $("#four").addClass(lit);
        $("#audio4")[0].play();
        litID.push(4);
        
        setTimeout(function(){
          $("#four").removeClass(lit);
        },off);
    }
    
    j++;
    
    if (j>=count) {
      clearInterval(x);
    }
  
    },on);
  }
  
  //checks user array and litID array
  function checking() {
    if (litID.length==clicked.length) {
      if (litID.join() == clicked.join()) {
      if (count==20) {
        setTimeout (function() {
          alert("You win!");
          history.go(0);
        },1000);
      }
      else {
        setTimeout (function() {
          $("#count").text(count+1);
          count++;
          litID=[];
          clicked=[];
          j=0;
          change1();
        },1000);
      }
    }
    
    //else case if user array doesn't match  
    else {
      if (strict==1) {
        history.go(0);
      }
      else {
        setTimeout (function() {
          $("#count").text("!!");
          
          litID=[];
          clicked=[];
          j=0;
          change1();
        },1000);
      }
    }
  }
}

  //to switch on
  $("#on").click( function() {
    $("#count").text("--");
    
    for (i=0;i<20;i++) {
      random[i]=Math.ceil((Math.random()*4));
    }
    
    //turn on strict
    $("#strict").click(function() {
      strict=1;
    });  
    
    //start game
    $("#start").click(function() {
      $("#count").text(count);
      
      change1();
    })
    
    //user inputs
    $("#one").click(function() {
      $("#one").addClass("light1");
      $("#audio1")[0].play();
      
      clicked.push(1);
      
      setTimeout(function() {
        $("#one").removeClass("light1")
      },250);
      
      checking();
    });

    $("#two").click(function() {
      $("#two").addClass("light2");
      $("#audio2")[0].play();
      
      clicked.push(2);
      
      setTimeout(function() {
        $("#two").removeClass("light2")
      },250);
      
      checking();
  });
    
    $("#three").click(function() {
      $("#three").addClass("light3");
      $("#audio3")[0].play();
      
      clicked.push(3);
      
      setTimeout(function() {
        $("#three").removeClass("light3")
      },250);
      
      checking();
  }); 
    
    $("#four").click(function() {
      $("#four").addClass("light4");
      $("#audio4")[0].play();
      
      clicked.push(4);
      
      setTimeout(function() {
        $("#four").removeClass("light4")
      },250);
 
      
      checking();
  });
  });
  //turn off
  $("#off").click(function () {
    history.go(0);
  });

});