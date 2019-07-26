var nasaapikey = "rR43eRX5TzWTzwfBtrj2DdnBpadBJajUEWIvQmiv";

function sendApiRequest(){
  var nasaapiurl = "https://api.nasa.gov/planetary/apod?api_key=" + nasaapikey;


  console.log(nasaapiurl);

  fetch(nasaapiurl)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    var title = document.createElement("h1");
    var img = document.createElement("img");
    var exp = document.createElement("p");
    console.log(json["url"]);
    console.log(json["explanation"]);

    title.innerHTML = json["title"];
    document.body.appendChild(title);

    img.src = json["url"];
    document.body.appendChild(img);

    exp.innerHTML = json["explanation"];
    document.body.appendChild(exp);
  })
}

sendApiRequest()
