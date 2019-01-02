$(document).ready(function(){
  $("#submit").click(function(){
        var a = document.getElementById("Select").value;
        $.ajax({url:a, success: function(result){
        var ab = JSON.parse(result);
        var map = ab.coord.lat+","+ab.coord.lon;
        var link = "https://www.google.com/maps/search/?api=1&query="+map;
        var mapLink = "<a href = "+link+">+"+map+"+</a>";
        var cityName = ab.name;
        var temperature = ab.main.temp;
        var description = ab.weather[0].description;
        var date = Date();
        var dateObj = "";
        for(var i=0;i<25;i++){
            if(i==15){
               dateObj+="<br>  Time : ";
               }
             dateObj+=date[i];
        }
        var icon ="F:\\boopathi\\Images\\"+ab.weather[0].icon+".jpg";;
        var image = "<img src="+icon+" width = '150' height='150'></img>"
        document.getElementById("myDiv").style.display="block";
        $("#Icon").append(image);
        $("#Date").append("<h2>"+dateObj+"</h2>");
        $("#description").append("<h3>Description : "+description+"</h3>");
        $('#cityName').append("<h2><i>"+cityName+"</i><h2>");
        $('#temperature').append("<p><h1><i>Temperature</i><br>"+temperature+"&#176 f</h1><p>");
        $("#temp").append("<p >From : "+ab.main.temp_min+"&#176 f<br>To : "+ab.main.temp_max+"&#176 f</p>");
        $('#table').append( 
            '<table style=  border = "1px" margin = "10px" cellspacing = "10px" cellpadding = "10px" align = "center"><tr><th>Coordinate</th><td>'+mapLink+"</td></tr><tr><th>Main</th><td>"+ab.weather[0].main+"</td></tr><tr><th>Wind</th><td>"+ab.wind.speed+"km/s</td></tr><tr><th>Humidity</th><td>"+ab.main.humidity+"</td></th></table>");
        $("#tableTwo").append(
            '<table style=border = "1px" margin = "10px" cellspacing = "10px" cellpadding = "10px" align = "center"');
    }});
  });
});
