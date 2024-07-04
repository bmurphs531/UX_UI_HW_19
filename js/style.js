console.log("Your index.js file is loaded correctly!");

$(".myButton").on("hover", function () {
  $(".myButton").css("background-color", "white");
  $(".myButton").css("color", "black");
});

// $(".button").on("hover", function () {
//   $(this).css("color", "white");
//   $(this).css("background-color", "black");
// });

$(".myButton").on("hover", function () {
  $("animate").animate("ease-in", "300ms");
});
