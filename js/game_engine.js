$(function() {
  var the_seconds=59;
  display = $('#time');
  display2 = $('#psi_meter');
  startTimer(the_seconds, display, display2);

  var the_water_bomb=0;

  var the_fire_1_state="Red";
  var the_fire_2_state="Red";
  var the_fire_3_state="Red";
  var the_fire_4_state="Red";
  var the_fire_5_state="Red";

  var the_enemy_1="Free";
  var the_enemy_2="Free";
  var the_enemy_3="Free";
  var the_enemy_4="Free";
  var the_enemy_5="Free";
  var the_enemy_x_1="Free";
  var the_enemy_x_2="Free";
  var the_enemy_x_3="Free";
  var the_enemy_x_4="Free";
  var the_enemy_x_5="Free";

  var fire_1_score=1;
  var fire_2_score=1;
  var fire_3_score=1;
  var fire_4_score=1;
  var fire_5_score=1;
  var total_score=5; 

  $("#water_bomb").draggable({
    helper: "clone"
  });
  $("#artificial_rain").draggable({
    helper: "clone"
  });
  $("#restore_forest").draggable({
    helper: "clone"
  });

  $("#enemy_1").draggable();
  $("#enemy_2").draggable();
  $("#enemy_3").draggable();
  $("#enemy_4").draggable();
  $("#enemy_5").draggable();
  $("#enemy_x_1").draggable();
  $("#enemy_x_2").draggable();
  $("#enemy_x_3").draggable();
  $("#enemy_x_4").draggable();
  $("#enemy_x_5").draggable();

  $("#fire_1").droppable({
    drop: function(event, ui) {
      var the_object=ui.draggable.attr('title').trim().toLowerCase();
      if(the_object == "water bomb") { bombed(the_fire_1_state,1); }
      if(the_object == "artificial rain") { rained(the_fire_1_state,1); }
      if(the_object == "restore forest") { restored(the_fire_1_state,1); }
    }
  });

  $("#fire_2").droppable({
    drop: function(event, ui) {
      var the_object=ui.draggable.attr('title').trim().toLowerCase();
      if(the_object == "water bomb") { bombed(the_fire_2_state,2); }
      if(the_object == "artificial rain") { rained(the_fire_2_state,2); }
      if(the_object == "restore forest") { restored(the_fire_2_state,2); }
    }
  });

  $("#fire_3").droppable({
    drop: function(event, ui) {
      var the_object=ui.draggable.attr('title').trim().toLowerCase();
      if(the_object == "water bomb") { bombed(the_fire_3_state,3); }
      if(the_object == "artificial rain") { rained(the_fire_3_state,3); }
      if(the_object == "restore forest") { restored(the_fire_3_state,3); }
    }
  });

  $("#fire_4").droppable({
    drop: function(event, ui) {
      var the_object=ui.draggable.attr('title').trim().toLowerCase();
      if(the_object == "water bomb") { bombed(the_fire_4_state,4); }
      if(the_object == "artificial rain") { rained(the_fire_4_state,4); }
      if(the_object == "restore forest") { restored(the_fire_4_state,4); }
    }
  });

  $("#fire_5").droppable({
    drop: function(event, ui) {
      var the_object=ui.draggable.attr('title').trim().toLowerCase();
      if(the_object == "water bomb") { bombed(the_fire_5_state,5); }
      if(the_object == "artificial rain") { rained(the_fire_5_state,5); }
      if(the_object == "restore forest") { restored(the_fire_5_state,5); }
    }
  });

  $("#jail").droppable({
    drop: function(event, ui) {
      var the_object=ui.draggable.attr('title').trim().toLowerCase();
      jailed(the_object);
    }
  });

  function bombed(state,location)
  {
    if(state == "Red" || state == "Orange")
    {
      var audio = new Audio('audio/water.wav');
      audio.play();

      the_water_bomb++;
      //$("#fire_"+location).css('background-color', '#FFBF00');
      document.getElementById("fire_"+location).src = "images/fire-kecil.gif";

      if(the_water_bomb == 5)
      {
        artificial_rain.style.visibility='visible';
        //$("#fire_"+location).css('background-color', '#FFBF00');
        document.getElementById("fire_"+location).src = "images/fire-kecil.gif";
        the_water_bomb=0;

        if(location == 1) { the_fire_1_state="Orange"; }
        if(location == 2) { the_fire_2_state="Orange"; }
        if(location == 3) { the_fire_3_state="Orange"; }
        if(location == 4) { the_fire_4_state="Orange"; }
        if(location == 5) { the_fire_5_state="Orange"; }
      }
    }
  }

  function rained(state,location)
  {
    if(state == "Red" || state == "Orange")
    {
      var audio = new Audio('audio/rain.wav');
      audio.play();

      artificial_rain.style.visibility='hidden';
      //$("#fire_"+location).css('background-color', '#848484');
      document.getElementById("fire_"+location).src = "images/hangus.png";
      shown(location);

      if(location == 1) { the_fire_1_state="Grey"; }
      if(location == 2) { the_fire_2_state="Grey"; }
      if(location == 3) { the_fire_3_state="Grey"; }
      if(location == 4) { the_fire_4_state="Grey"; }
      if(location == 5) { the_fire_5_state="Grey"; }
    }
  }

  function shown(location)
  {
    the_number = Math.floor(Math.random() * 2) + 1;
    display2 = $('#time2');

    if(location == 1 && the_number == 1) { enemy_1.style.visibility='visible'; var the_seconds2 = 6; startTimer2(the_seconds2, display2, "1"); }
    if(location == 2 && the_number == 1) { enemy_2.style.visibility='visible'; var the_seconds2 = 6; startTimer2(the_seconds2, display2, "2"); }
    if(location == 3 && the_number == 1) { enemy_3.style.visibility='visible'; var the_seconds2 = 6; startTimer2(the_seconds2, display2, "3"); }
    if(location == 4 && the_number == 1) { enemy_4.style.visibility='visible'; var the_seconds2 = 6; startTimer2(the_seconds2, display2, "4"); }
    if(location == 5 && the_number == 1) { enemy_5.style.visibility='visible'; var the_seconds2 = 6; startTimer2(the_seconds2, display2, "5"); }
    if(location == 1 && the_number == 2) { enemy_x_1.style.visibility='visible'; var the_seconds2 = 2; startTimer2(the_seconds2, display2, "x1"); }
    if(location == 2 && the_number == 2) { enemy_x_2.style.visibility='visible'; var the_seconds2 = 2; startTimer2(the_seconds2, display2, "x2"); }
    if(location == 3 && the_number == 2) { enemy_x_3.style.visibility='visible'; var the_seconds2 = 2; startTimer2(the_seconds2, display2, "x3"); }
    if(location == 4 && the_number == 2) { enemy_x_4.style.visibility='visible'; var the_seconds2 = 2; startTimer2(the_seconds2, display2, "x4"); }
    if(location == 5 && the_number == 2) { enemy_x_5.style.visibility='visible'; var the_seconds2 = 2; startTimer2(the_seconds2, display2, "x5"); }
  }

  function jailed(enemy)
  {
    var audio = new Audio('audio/jail_cell_door.mp3');
    audio.play();

    restore_forest.style.visibility='visible';
    var the_seconds3 = 5;
    display3 = $('#time3');
    startTimer3(the_seconds3, display3);

    if(enemy == "enemy 1") { enemy_1.style.visibility='hidden'; the_enemy_1="Jailed"; }
    if(enemy == "enemy 2") { enemy_2.style.visibility='hidden'; the_enemy_2="Jailed"; }
    if(enemy == "enemy 3") { enemy_3.style.visibility='hidden'; the_enemy_3="Jailed"; }
    if(enemy == "enemy 4") { enemy_4.style.visibility='hidden'; the_enemy_4="Jailed"; }
    if(enemy == "enemy 5") { enemy_5.style.visibility='hidden'; the_enemy_5="Jailed"; }
    if(enemy == "enemy x 1") { enemy_x_1.style.visibility='hidden'; the_enemy_x_1="Jailed"; }
    if(enemy == "enemy x 2") { enemy_x_2.style.visibility='hidden'; the_enemy_x_2="Jailed"; }
    if(enemy == "enemy x 3") { enemy_x_3.style.visibility='hidden'; the_enemy_x_3="Jailed"; }
    if(enemy == "enemy x 4") { enemy_x_4.style.visibility='hidden'; the_enemy_x_4="Jailed"; }
    if(enemy == "enemy x 5") { enemy_x_5.style.visibility='hidden'; the_enemy_x_5="Jailed"; }
  }

  function restored(state,location)
  {
    if(state == "Grey")
    {
      var audio = new Audio('audio/applause.mp3');
      audio.play();

      restore_forest.style.visibility='hidden';
      $("#fire_"+location).droppable("disable");
      $("#fire_"+location).css('display', 'none');

      if(location == 1) { the_fire_1_state="Green"; }
      if(location == 2) { the_fire_2_state="Green"; }
      if(location == 3) { the_fire_3_state="Green"; }
      if(location == 4) { the_fire_4_state="Green"; }
      if(location == 5) { the_fire_5_state="Green"; }
    }
  }

  function startTimer(duration, display, display2) {

    var audio = new Audio('audio/DanceOfDeath.mp3');
    audio.play();

    var timer = duration, minutes, seconds;
    var intervalId = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.text(seconds);

      if(the_fire_1_state == "Green") { fire_1_score = 4; }
      else if(the_fire_1_state == "Grey") { fire_1_score = 3; }
      else if(the_fire_1_state == "Orange") { fire_1_score = 2; }
      else if(the_fire_1_state == "Red") { fire_1_score = 1; }

      if(the_fire_2_state == "Green") { fire_2_score = 4; }
      else if(the_fire_2_state == "Grey") { fire_2_score = 3; }
      else if(the_fire_2_state == "Orange") { fire_2_score = 2; }
      else if(the_fire_2_state == "Red") { fire_2_score = 1; }

      if(the_fire_3_state == "Green") { fire_3_score = 4; }
      else if(the_fire_3_state == "Grey") { fire_3_score = 3; }
      else if(the_fire_3_state == "Orange") { fire_3_score = 2; }
      else if(the_fire_3_state == "Red") { fire_3_score = 1; }

      if(the_fire_4_state == "Green") { fire_4_score = 4; }
      else if(the_fire_4_state == "Grey") { fire_4_score = 3; }
      else if(the_fire_4_state == "Orange") { fire_4_score = 2; }
      else if(the_fire_4_state == "Red") { fire_4_score = 1; }

      if(the_fire_5_state == "Green") { fire_5_score = 4; }
      else if(the_fire_5_state == "Grey") { fire_5_score = 3; }
      else if(the_fire_5_state == "Orange") { fire_5_score = 2; }
      else if(the_fire_5_state == "Red") { fire_5_score = 1; }

      total_score = fire_1_score+fire_2_score+fire_3_score+fire_4_score+fire_5_score;

      if(total_score >= 5 && total_score <= 6) { the_total_score="> 500"; $("#deadly").css('visibility', 'visible'); }
      if(total_score >= 7 && total_score <= 9) { the_total_score="> 300"; $("#harzadous").css('visibility', 'visible'); }
      if(total_score >= 10 && total_score <= 12) { the_total_score="201 - 300"; $("#veryunhealthy").css('visibility', 'visible'); }
      if(total_score >= 13 && total_score <= 15) { the_total_score="101 - 200"; $("#unhealthy").css('visibility', 'visible'); }
      if(total_score >= 16 && total_score <= 18) { the_total_score="51 - 100"; $("#moderate").css('visibility', 'visible'); }
      if(total_score >= 19 && total_score <= 20) { the_total_score="0 - 50"; $("#good").css('visibility', 'visible'); }

      display2.text(the_total_score);

      if(timer < 50)
      {
        //$("#fire_3").css('display', 'block');
        //$("#fire_4").css('display', 'block');
        //$("#fire_5").css('display', 'block');
      }

      if (--timer < 0) {

        if(total_score >= 5 && total_score <= 6) { alert("PSI > 500\n\nOh no! The situation is getting worse. The end is near! Not only you've left the five hot spot with raging fire. With this level of PSI, its very hazardous for people and animals to stay and breathe the air. People can die at this PSI level.\n\nIn 2015 forest fire, it was reported that 19 people died due to respiratory infections and 10 people killed due to smog from forest and land fires. Moreover, dozens reported dead in road accidents due to poor visibility. This can happened again when your PSI level reached this high.\n\nPlay again?\n\nSign an online petition at Change.org, urging Indonesian Presiden Joko Widodo to take real action in enforcing the law and restore the peatland."); }
        if(total_score >= 7 && total_score <= 9) { alert("PSI > 300\n\nWatch out! You failed to stop the haze and extinguish all the forest fire. You have many hotspot left and soon it will be burning all over again. The perpetrators who are responsible for this fire got away and they can trigger the same fires next time.\n\nMoreover, the air quality has become worst in decades and reached a hazardous level. People are discourage from travelling and avoid outdoor activities.\n\nInside the forest, orangutan and other wildlife animals become the first victims of this fire. With total orangutan population of less than 50 thousand in Sumatera and Borneo, we cant afford to loose any of those precious animals.\n\nPlay again?\n\nSign an online petition at Change.org, urging Indonesian Presiden Joko Widodo to take real action in enforcing the law and restore the peatland."); }
        if(total_score >= 10 && total_score <= 12) { alert("PSI 201 - 300\n\nCome on, you can do better than this! You still have forestfires burning in Indonesia and that's spreading a lot of haze to neighbouring countries.\n\nYou need to start thinking an evacuation plan because the air quality is very unhealthy at this PSI level.\n\nThe Singapore parliament issued a law called The Transboundary Haze Pollution Act in 2014 to go after companies that started fires or let their concessions burn. Its time for regional cooperation.\n\nPlay again?\n\nSign an online petition at Change.org, urging Indonesian Presiden Joko Widodo to take real action in enforcing the law and restore the peatland."); }
        if(total_score >= 13 && total_score <= 15) { alert("PSI 101 - 200\n\nBad news! Although, you manage to extinguish several part of the forestfire in Indonesia, you still have some hot spot left. As the result, your PSI level is unhealthy for human.\n\nYou dont have to evacuate everybody from their homes yet, but you have to warn people to reduce prolonged or strenuous physical exertion. Children and senior citizens also need to be taken care of in this kind of situation.\n\nThe Indonesian government estimated that the haze crisis would cost it between 300-475 trillion rupiah (up to US$35 billion or S$47 billion) to mitigate. It's estimated that this year's haze will cost Indonesia's economy US $14 billion.\n\nPlay again?\n\nSign an online petition at Change.org, urging Indonesian Presiden Joko Widodo to take real action in enforcing the law and restore the peatland."); }
        if(total_score >= 16 && total_score <= 18) { alert("PSI 51 - 100\n\nWell done! You manage to extinguish almost all the forestfire in Indonesia. Now your PSI level is moderate and below the unhealthy level.\n\nHowever, there's a possibility next year the forest fire will rage again because you havent catch all the culprit.\n\nLast April 2016, President Joko Widodo said that he is planning to issue a moratorium on opening new palm oil plantation in peatland and forest areas. Lets hope this policy can improve the situation.\n\nPlay again?\n\nSign an online petition at Change.org, urging Indonesian Presiden Joko Widodo to take real action in enforcing the law and restore the peatland."); }
        if(total_score >= 19 && total_score <= 20) { alert("PSI 0 - 50\n\nCongratulation! You are truly a forest hero. You manage to extinguish all the forest fires in Indonesia, arrest the bad guys and restore the forest.\n\nThanks to you, now people across South East Asia do not have to endure the choking haze again this year. All the wildlife animals, including the endangered Orangutan, now can return to their homes safely.\n\nPlay again?\n\nSign an online petition at Change.org, urging Indonesian Presiden Joko Widodo to take real action in enforcing the law and restore the peatland."); }

        clearInterval(intervalId);
        location.reload();
      }
    }, 1000);
  }

  function startTimer2(duration, display, enemy) {
    var timer = duration, minutes, seconds;
    var intervalId = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.text(minutes + ":" + seconds);

      if (--timer < 0) { 
        if(enemy == "1")
        { 
          if(the_enemy_1 == "Free")
          {
            enemy_1.style.visibility='hidden';
            //$("#fire_1").css('background-color', '#FF4000'); 
            document.getElementById("fire_1").src = "images/fires/fire2.gif";
            the_fire_1_state="Red"; 
            clearInterval(intervalId);
          }
          else
          {
            clearInterval(intervalId);
          }
        }
        if(enemy == "2")
        { 
          if(the_enemy_2 == "Free")
          {
            enemy_2.style.visibility='hidden';
            //$("#fire_2").css('background-color', '#FF4000');
            document.getElementById("fire_2").src = "images/fires/fire2.gif"; 
            the_fire_2_state="Red"; 
            clearInterval(intervalId);
          }
          else
          {
            clearInterval(intervalId);
          }
        }
        if(enemy == "3")
        { 
          if(the_enemy_3 == "Free")
          {
            enemy_3.style.visibility='hidden';
            //$("#fire_3").css('background-color', '#FF4000'); 
            document.getElementById("fire_3").src = "images/fires/fire2.gif";
            the_fire_3_state="Red"; 
            clearInterval(intervalId);
          }
          else
          {
            clearInterval(intervalId);
          }
        }
        if(enemy == "4")
        { 
          if(the_enemy_4 == "Free")
          {
            enemy_4.style.visibility='hidden';
            //$("#fire_4").css('background-color', '#FF4000'); 
            document.getElementById("fire_4").src = "images/fires/fire2.gif";
            the_fire_4_state="Red"; 
            clearInterval(intervalId);
          }
          else
          {
            clearInterval(intervalId);
          }
        }
        if(enemy == "5")
        { 
          if(the_enemy_5 == "Free")
          {
            enemy_5.style.visibility='hidden';
            //$("#fire_5").css('background-color', '#FF4000'); 
            document.getElementById("fire_5").src = "images/fires/fire2.gif";
            the_fire_5_state="Red"; 
            clearInterval(intervalId);
          }
          else
          {
            clearInterval(intervalId);
          }
        }
        if(enemy == "x1")
        { 
          if(the_enemy_x_1 == "Free")
          {
            enemy_x_1.style.visibility='hidden';
            //$("#fire_1").css('background-color', '#FF4000'); 
            document.getElementById("fire_1").src = "images/fires/fire2.gif";
            the_fire_1_state="Red"; 
            clearInterval(intervalId);
          }
          else
          {
            clearInterval(intervalId);
          }
        }
        if(enemy == "x2")
        { 
          if(the_enemy_x_2 == "Free")
          {
            enemy_x_2.style.visibility='hidden';
            //$("#fire_2").css('background-color', '#FF4000'); 
            document.getElementById("fire_2").src = "images/fires/fire2.gif";
            the_fire_2_state="Red"; 
            clearInterval(intervalId);
          }
          else
          {
            clearInterval(intervalId);
          }
        }
        if(enemy == "x3")
        { 
          if(the_enemy_x_3 == "Free")
          {
            enemy_x_3.style.visibility='hidden';
            //$("#fire_3").css('background-color', '#FF4000'); 
            document.getElementById("fire_3").src = "images/fires/fire2.gif";
            the_fire_3_state="Red"; 
            clearInterval(intervalId);
          }
          else
          {
            clearInterval(intervalId);
          }
        }
        if(enemy == "x4")
        { 
          if(the_enemy_x_4 == "Free")
          {
            enemy_x_4.style.visibility='hidden';
            //$("#fire_4").css('background-color', '#FF4000'); 
            document.getElementById("fire_4").src = "images/fires/fire2.gif";
            the_fire_4_state="Red"; 
            clearInterval(intervalId);
          }
          else
          {
            clearInterval(intervalId);
          }
        }
        if(enemy == "x5")
        { 
          if(the_enemy_x_5 == "Free")
          {
            enemy_x_5.style.visibility='hidden';
            //$("#fire_5").css('background-color', '#FF4000'); 
            document.getElementById("fire_5").src = "images/fires/fire2.gif";
            the_fire_5_state="Red"; 
            clearInterval(intervalId);
          }
          else
          {
            clearInterval(intervalId);
          }
        }
      }
    }, 1000);
  }

  function startTimer3(duration, display) {
    var timer = duration, minutes, seconds;
    var intervalId = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.text(minutes + ":" + seconds);

      if (--timer < 0) {
        if(the_fire_1_state == "Grey")
        {
          $('#enemy_1').css('position', 'absolute');
          $('#enemy_1').css('top', 150); //or wherever you want it
          $('#enemy_1').css('left', 500); //or wherever you want it
          $('#enemy_x_1').css('position', 'absolute');
          $('#enemy_x_1').css('top', 150); //or wherever you want it
          $('#enemy_x_1').css('left', 500); //or wherever you want it
          //$("#fire_1").css('background-color', '#FF4000');
          document.getElementById("fire_1").src = "images/fires/fire2.gif";
          the_fire_1_state="Red";
          restore_forest.style.visibility='hidden';
          clearInterval(intervalId);
        }
        else
        {
          clearInterval(intervalId);
        }
        if(the_fire_2_state == "Grey")
        {
          restore_forest.style.visibility='hidden';
          $('#enemy_2').css('position', 'absolute');
          $('#enemy_2').css('top', 150); //or wherever you want it
          $('#enemy_2').css('left', 550); //or wherever you want it
          $('#enemy_x_2').css('position', 'absolute');
          $('#enemy_x_2').css('top', 150); //or wherever you want it
          $('#enemy_x_2').css('left', 550); //or wherever you want it
          //$("#fire_2").css('background-color', '#FF4000');
          document.getElementById("fire_2").src = "images/fires/fire2.gif";
          the_fire_2_state="Red";
          clearInterval(intervalId);
        }
        else
        {
          clearInterval(intervalId);
        }
        if(the_fire_3_state == "Grey")
        {
          restore_forest.style.visibility='hidden';
          $('#enemy_3').css('position', 'absolute');
          $('#enemy_3').css('top', 150); //or wherever you want it
          $('#enemy_3').css('left', 600); //or wherever you want it
          $('#enemy_x_3').css('position', 'absolute');
          $('#enemy_x_3').css('top', 150); //or wherever you want it
          $('#enemy_x_3').css('left', 600); //or wherever you want it
          //$("#fire_3").css('background-color', '#FF4000');
          document.getElementById("fire_3").src = "images/fires/fire2.gif";
          the_fire_3_state="Red";
          clearInterval(intervalId);
        }
        else
        {
          clearInterval(intervalId);
        }
        if(the_fire_4_state == "Grey")
        {
          restore_forest.style.visibility='hidden';
          $('#enemy_4').css('position', 'absolute');
          $('#enemy_4').css('top', 150); //or wherever you want it
          $('#enemy_4').css('left', 650); //or wherever you want it
          $('#enemy_x_4').css('position', 'absolute');
          $('#enemy_x_4').css('top', 150); //or wherever you want it
          $('#enemy_x_4').css('left', 650); //or wherever you want it
          //$("#fire_4").css('background-color', '#FF4000');
          document.getElementById("fire_4").src = "images/fires/fire2.gif";
          the_fire_4_state="Red";
          clearInterval(intervalId);
        }
        else
        {
          clearInterval(intervalId);
        }
        if(the_fire_5_state == "Grey")
        {
          restore_forest.style.visibility='hidden';
          $('#enemy_5').css('position', 'absolute');
          $('#enemy_5').css('top', 150); //or wherever you want it
          $('#enemy_5').css('left', 700); //or wherever you want it
          $('#enemy_x_5').css('position', 'absolute');
          $('#enemy_x_5').css('top', 150); //or wherever you want it
          $('#enemy_x_5').css('left', 700); //or wherever you want it
          //$("#fire_5").css('background-color', '#FF4000');
          document.getElementById("fire_5").src = "images/fires/fire2.gif";
          the_fire_5_state="Red";
          clearInterval(intervalId);
        }
        else
        {
          clearInterval(intervalId);
        }
      }
    }, 1000);
  }
});