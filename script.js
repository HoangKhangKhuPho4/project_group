$(document).ready(function () {
  $(".dropdown-trigger").on("mouseenter", function () {
    $(".dropdown").hide(); // Ẩn tất cả dropdowns
    $(this).next(".dropdown").show(); // Hiển thị dropdown tiếp theo
  });

  $(".menu").on("mouseleave", function () {
    $(".dropdown").hide(); // Ẩn tất cả dropdowns khi rời khỏi menu
  });
});
$(document).ready(function () {
  $(".menu-column a").on("focus", function () {
    $(this).css("background-color", "yellow");
  });
  $(".menu-column a").on("blur", function () {
    $(this).css("background-color", "");
  });
});
$(".dropdown-trigger").hover(
  function () {
    $(this).css("background-color", "#a0522d");
  },
  function () {
    $(this).css("background-color", "");
  }
);
$(".menu-column a").hover(
  function () {
    $(this).css("background-color", "yellow");
  },
  function () {
    $(this).css("background-color", "");
  }
);

$(".dropdown-trigger").on("mouseenter", function () {
  $(this).next(".dropdown").show();
});

$(".menu").on("mouseleave", function () {
  $(".dropdown").hide();
});

$(".dropdown").mouseleave(function () {
  $(this).hide();
});

// Bước 1
$(".dropdown").addClass("hidden");

// Bước 2
$(".dropdown-trigger").on("click", function () {
  $(this).next(".dropdown").toggle();
});

// Bước 3
$(document).on("click", function (event) {
  var $trigger = $(".dropdown-trigger");
  if ($trigger !== event.target && !$trigger.has(event.target).length) {
    $(".dropdown").hide();
  }
});
