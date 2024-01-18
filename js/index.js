var delayInMilliseconds = 600;

$(document).ready(function () {
  $(".Truck-button").on({
    click: function () {
      $(".Truck-car").addClass("Truck-car-transform");
      $(".Truck-body").addClass("Truck-body-transform");
      $(".Truck-wheel").addClass("Truck-wheel-transform");
      setTimeout(function () {
        $(".Truck-car").removeClass("Truck-car-transform");
        $(".Truck-body").removeClass("Truck-body-transform");
        $(".Truck-wheel").removeClass("Truck-wheel-transform");
      }, 1000);
      setTimeout(function () {
        $(".Truck-button").addClass("Truck-button-style");
      }, 1);
      setTimeout(function () {
        $(".Truck-button").removeClass("Truck-button-style");
      }, 1000)
    },
  });

  $(".Truck-red-button").on({
    click: function () {
      setTimeout(function () {
        $("#Truck-image").attr("src", "images/Truck-red.png");
      }, delayInMilliseconds);
    },
  });

  $(".Truck-white-button").on({
    click: function () {
      setTimeout(function () {
        $("#Truck-image").attr("src", "images/Truck.png");
      }, delayInMilliseconds);
    },
  });

  $(".Truck-green-button").on({
    click: function () {
      setTimeout(function () {
        $("#Truck-image").attr("src", "images/Truck-green.png");
      }, delayInMilliseconds);
    },
  });

  $(".Truck-yellow-button").on({
    click: function () {
      setTimeout(function () {
        $("#Truck-image").attr("src", "images/Truck-yellow.png");
      }, delayInMilliseconds);
    },
  });
});
