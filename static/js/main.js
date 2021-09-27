var button = document.querySelector('.button')
var inputValu = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

// tried various codes (i found online) to get rid of the error I keep getting about a navigator something or another.

// var codeToInject = 'Object.defineProperty(navigator,"platform", { \
//   get: function () { return "MacIntel"; }, \
//   set: function (a) {} \
//  });';
// var script = document.createElement('script');
// script.appendChild(document.createTextNode(codeToInject));
// (document.head || document.documentElement).appendChild(script);
// script.parentNode.removeChild(script);

button.addEventListener('click', function () {
    fetch("http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={1516398fadffc9b676f41360d77da22e}&units=imperial")
        .then(response => Response.json())
        .then(data => {
        
        })

        .catch(() => {
            MessageChannel.textContent = "Please try again!"
});

// tried another version to see if that was the issue and nope, still doesn't work.

// const key = "data key number";
// const baseURL= "http://api.openweathermap.org/data/2.5/weather?q=Cleveland&appid=1516398fadffc9b676f41360d77da22e";
// fetch(baseURL)
//     .then((data) => { console.log(‘response’, data.json()) })
//     .catch((error) => {
//         console.log(error);
//     });
// const requestCity = async (city) => {
//     const baseURL = "ttp://api.openweathermap.org/data/2.5/weather"
//     const query = `?q=${city}&appid=${key}`;
//     // make fetch call - promise call
//     const response = await fetch(baseURL + query);
//     // promise date
//     const data = await response.json();
//     return data
// }