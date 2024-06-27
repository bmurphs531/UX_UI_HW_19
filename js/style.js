console.log("Your index.js file is loaded correctly!");

$(".button").on("hover", function () {
  $(".button").css("background-color", "white");
  $(".button").css("color", "black");
});

// $(".button").on("hover", function () {
//   $(this).css("color", "white");
//   $(this).css("background-color", "black");
// });

$(".button").on("hover", function () {
  $("animate").animate("ease-in", "300ms");
});
