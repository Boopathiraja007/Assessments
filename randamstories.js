function myFun(){
    var array1 = ["Willey the coblin","Big Daddy","Father Christmas"];
    var array2 = ["WhiteHouse","DisneyLand","soup Kitchen"];
    var array3 = ["slug and crawled away","spountaneously combusted","melted into a puddle on the side walk"];
    var random1 = Math.floor(Math.random() * array1.length);
    var random2 = Math.floor(Math.random()* array1.length);
    var random3 = Math.floor(Math.random() * array1.length);
    var name = document.getElementById("nam").value;
    var temperature = document.getElementById("temp").value;
    var weight = document.getElementById("wei").value;
    if(temperature == ""){
       temperature = 94;
       }
    if(weight == ""){
       weight = 300;
       }
    if(name == ""){
       name = "Bob";
       }
    if(document.getElementById("uk").checked){
         temperature = (Math.round((temperature - 32) * (5/9))) + " celcius";
         weight = (Math.round(weight / 14)) + " stones";
        
       }else{
           temperature = temperature+" fahrenheit ";
           weight = weight+" pounds";
       }
    
    var paragraph = "It was "+temperature+" outside, so " +array1[random1] + " went for walk. When they got to the " + array2[random2] + ", they started in horror for a few moments, then " + array3[random3] +". "+name+" saw the whole thing, but was not surprised --- "+ array1[random1] +" weighs "+weight+",and it was a hot day."
    
    document.getElementById("para").innerHTML = paragraph;
}