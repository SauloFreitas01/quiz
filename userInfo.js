let user_name = sessionStorage.getItem("name");
let user_lastName = sessionStorage.getItem("lastName");
let user_Email = sessionStorage.getItem("email");
let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");
document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;
document.querySelector("span.time_taken").innerHTML = user_time;

