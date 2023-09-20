$(document).ready(function () {
  let popupFlags = $(".popup-flag");

  function popUp(i) {
    if (i >= popupFlags.length) {
      return;
    }

    let currentFlag = popupFlags.eq(i);

    currentFlag.fadeIn(1000, function () {
      currentFlag.removeClass("popup-flag");

      setTimeout(function () {
        popUp(i + 1);
      }, 0.1);
    });
  }

  popUp(0);

  $(".fade-up").each(function () {
    let duration = $(this).data("duration") || 1000;
    let $element = $(this);
    $element.css({
      opacity: 0,
    });
    $element.animate(
      {
        opacity: 1,
      },
      {
        duration: duration,
        start: function () {
          $element.css({
            animation: "fadeUp " + duration / 1000 + "s",
          });
        },
        complete: function () {
          $element.css({
            animation: "none",
          });
        },
      }
    );
  });
});
