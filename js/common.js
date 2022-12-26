$(function () {
  $("#my-menu").mmenu({
    extensions: [
      "widescreen",
      "theme-black",
      "effect-menu-slide",
      "pagedim-black",
    ],
    navbar: {
      title: "<img src='img/logo-1.svg' alt='Салон красоты Смотлер'>",
    },
    offCanvas: {
      position: "right",
    },
  });
  let api = $("#my-menu").data("mmenu");

  api.bind("opened", function () {
    $(".hamburger").addClass("is-active");
  });
  api.bind("closed", function () {
    $(".hamburger").removeClass("is-active");
  });
});
