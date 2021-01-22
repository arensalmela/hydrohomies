$(document).ready(function () {
    $("#sign-in-btn").on("click", function () {
    var userName = $("#username").val();
    localStorage.setItem("userName", userName);
    console.log("this function");
    if (userName === "") {
      $("#username").val("");
      $(".username-error").text("Please enter a username");
      $("#username").attr("style", "border: 2px solid red; border-radius: 4px");
      $("#username").attr("placeholder", "Please enter a username");
    } else {
      $("#sign-in-btn").attr("href", "./posts.html");
    }
  });

  $("#new-user-btn").on("click", function () {
    var newUser = $("#new-username").val();
    localStorage.setItem("userName", newUser);
    console.log("this function");
    if (newUser === "") {
      $(".signup-error").text("Please enter a username");
      $("#new-username").attr(
        "style",
        "border: 2px solid red; border-radius: 4px"
      );
    } else {
      $("#new-user-btn").attr("href", "./posts.html");
    }
  });

  
});

