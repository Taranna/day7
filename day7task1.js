var request=new  XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    let lat=data[0].latlng[0];
    let long=data[0].latlng[1];
    getweather(lat,long);


}
request.onerror=function(){
    alert('Network error');

}

function getweather(lat,long)
{

    var request=new XMLHttpRequest();
    let urlstring='https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon='+long+'&appid=2d4b1f2e2e15252ec3b346c4aaeb07cb';
    request.open('GET',urlstring,true);
    request.send();
    request.onload=function()
    {
        var data=JSON.parse(this.response);
        console.log(data);
    }

}
