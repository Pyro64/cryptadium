$(window).on("load", function () {
  ($preloader = $(".preloader")),
    ($loader = $preloader.find(".preloader__image"));
  $loader.delay(200).fadeOut();
  $preloader.delay(200).fadeOut("slow");
});
$(".history__table-tbody--js").click(function () {

  $(this).children(".history__dateItem").children(".history__arrow").toggleClass("open--table");
});
 $(".accordeon-js").click(function(){
   $(this).toggleClass("in").next().stop().slideToggle();
})
$(document).ready(function () {
  const targetTab = document.querySelectorAll("[data-targetTab]"),
    content = document.querySelectorAll(".content-js");

  targetTab.forEach(function (elem) {
    elem.addEventListener("click", function (e) {
      const target = this.getAttribute("data-targetTab");
      content.forEach(function (elem) {
        elem.classList.remove("content-js--opacity", "content-js--active");
      });
      targetTab.forEach(function (elem) {
        elem.classList.remove("active");
      });
      this.classList.add("active");
      const tab = document.querySelector('[data-tab="' + target + '"]');
      tab.classList.add("content-js--active");
      setTimeout(function () {
        tab.classList.add("content-js--opacity");
      }, 380);
    });
  });

  const targetTime = document.querySelectorAll("[data-targetTime]"),
    time = document.querySelectorAll(".time-js");

  targetTime.forEach(function (elem) {
    elem.addEventListener("click", function (e) {
      const target = this.getAttribute("data-targetTime");
      time.forEach(function (elem) {
        elem.classList.remove("time-js--opacity", "time-js--active");
      });
      targetTime.forEach(function (elem) {
        elem.classList.remove("active");
      });
      this.classList.add("active");
      const tab = document.querySelector('[data-time="' + target + '"]');
      tab.classList.add("time-js--active");
      setTimeout(function () {
        tab.classList.add("time-js--opacity");
      }, 380);
    });
  });

  if ($(".select")) {
    $(".select").niceSelect();
  }
  const questionBlock = document.querySelectorAll(".questions__block");
  const question = document.querySelectorAll(".questions-js");

  $(".questions-js").click(function () {
    $(this).next().toggle("questions__block--active");
  });
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".questions").length) {
      $(".questions__block").hide();
    }
    e.stopPropagation();
  });

  $(".referal__level-title").click(function () {
    $(this).toggleClass("referal__level-title--open");
  });

  jQuery("#datetimepicker1").datetimepicker({
    i18n: {
      de: {
        months: [
          "Januar",
          "Februar",
          "März",
          "April",
          "Mai",
          "Juni",
          "Juli",
          "August",
          "September",
          "Oktober",
          "November",
          "Dezember",
        ],
        dayOfWeek: ["So.", "Mo", "Di", "Mi", "Do", "Fr", "Sa."],
      },
    },
    timepicker: false,
    format: "d.m.Y",
  });
  jQuery("#datetimepicker2").datetimepicker({
    i18n: {
      de: {
        months: [
          "Januar",
          "Februar",
          "März",
          "April",
          "Mai",
          "Juni",
          "Juli",
          "August",
          "September",
          "Oktober",
          "November",
          "Dezember",
        ],
        dayOfWeek: ["So.", "Mo", "Di", "Mi", "Do", "Fr", "Sa."],
      },
    },
    timepicker: false,
    format: "d.m.Y",
  });

  let labels = ["BTC", "Other", "USD", "dollar"];
  let values = ["10", "10", "60", "20"];
  let colors = ["#F0B90B", "#005FFA", "#7EBAFD", "#68AFF8"];
  $("#value1").text(`${values[0]} %`);
  $("#value2").text(`${values[1]} %`);
  $("#value3").text(`${values[2]} %`);
  $("#value4").text(`${values[3]} %`);

  let color1 = document.getElementById("color1");
  let color2 = document.getElementById("color2");
  let color3 = document.getElementById("color3");
  let color4 = document.getElementById("color4");
  if ((color1, color2, color3, color4)) {
    color1.style.backgroundColor = colors[0];
    color1.style.width = `${values[0]}%`;
    color2.style.backgroundColor = colors[1];
    color2.style.width = `${values[1]}%`;
    color3.style.backgroundColor = colors[2];
    color3.style.width = `${values[2]}%`;
    color4.style.backgroundColor = colors[3];
    color4.style.width = `${values[3]}%`;

    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: [labels[0], labels[1], labels[2], labels[3]],
        datasets: [
          {
            data: [values[0], values[1], values[2], values[3]],
            backgroundColor: [colors[0], colors[1], colors[2], colors[3]],
            borderAlign: "inner",
            borderWidth: 3,
            borderColor: "#fff",
          },
        ],
      },
      options: {
        // title: {
        //     display: true,
        //     text: 'Recommended Daily Diet',
        //     position: 'top',
        //     fontSize: 16,
        //     fontColor: '#111',
        //     padding: 20
        // },
        legend: {
          display: false,
          position: "bottom",
          labels: {
            boxWidth: 20,
            fontColor: "#111",
            padding: 15,
          },
        },
        tooltips: {
          enabled: true,
        },
        cutoutPercentage: 80,
        plugins: {
          datalabels: {
            color: "#000",
            textAlign: "center",
            font: {
              lineHeight: 1.6,
            },
            formatter: function (value, ctx) {
              return ctx.chart.data.labels[ctx.dataIndex] + "\n" + value + "%";
            },
          },
        },
      },
    });
  }
  function statisticsDiagram(arrayCurrency) {
    var c_labels = [],
      c_colors = [],
      c_data = [];
    arrayCurrency.forEach((currency) => {
      c_labels.push(currency.label + " - " + currency.value + "%");
      c_colors.push(currency.color);
      c_data.push(currency.value);
      $(".diagram-labels").append(
        "<div class='diagram-labels__item'><span style='background-color: " +
          currency.color +
          "'></span>" +
          currency.label +
          " - " +
          currency.value +
          "%</div>"
      );
    });
    var ctx = document.getElementById("statistics__pie-canvas");
    var myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: c_labels,
        datasets: [
          {
            data: c_data,
            backgroundColor: c_colors,
            borderColor: [
              "rgba(0, 0, 0, 0)",
              "rgba(0, 0, 0, 0)",
              "rgba(0, 0, 0, 0)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        cutoutPercentage: 80,
      },
    });
  }

  $(".statistic").each(function () {
    var amount = 0;
    $(this)
      .find(".statistic__block:not(.inactive)")
      .each(function () {
        var bar = $(this).find(".statistic__bar");
        var sum = $(bar).attr("data-sum");
        sum = Number(sum.replace(/\s+/g, "").trim());
        amount += sum;
      });
    $(this)
      .find(".statistic__block:not(.inactive)")
      .each(function () {
        var bar = $(this).find(".statistic__bar");
        var sum = $(bar).attr("data-sum");
        sum = Number(sum.replace(/\s+/g, "").trim());
        var percent = ((sum / amount) * 100).toFixed(1);
        console.log(percent);
        $(bar)
          .attr("data-percent", percent)
          .css({
            height: percent + "%",
            "background-color": getRandomColor(),
          });
      });
  });

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  $(document).on("click", ".autentificathion__block-link--email", function (e) {
    $.fancybox.open({
      touch: false,
      closeExisting: true,
      src: "#email",
      type: "inline",
    });
  });
  $(document).on(
    "click",
    ".autentificathion__block-link--password",
    function (e) {
      $.fancybox.open({
        touch: false,
        closeExisting: true,
        src: "#password",
        type: "inline",
      });
    }
  );
  $(document).on("click", ".autentificathion__btn-item--modal", function (e) {
    $.fancybox.open({
      touch: false,
      closeExisting: true,
      src: "#val",
      type: "inline",
    });
  });
  $(document).on("click", ".modalBox__btn-item--active", function (e) {
    $.fancybox.open({
      touch: false,
      closeExisting: true,
      src: "#instruchtion",
      type: "inline",
    });
  });
  $(document).on("click", "#newIpLable1", function (e) {
    $.fancybox.open({
      touch: false,
      closeExisting: true,
      src: "#newSetting",
      type: "inline",
    });
  });

  $("#notSaveSetting").on("click", function () {
    if ($("#newip1").is(":checked")) {
      $("#newip1").prop("checked", false);
    } else {
      $("#newip1").prop("checked", true);
    }
    $.fancybox.close();
  });

  $(".header__flag-svg").click(function () {
    $(".flag").stop().slideToggle();
  });
  $(".flag__close").click(function () {
    $(".flag").stop().slideUp();
  });
  $(".burger").click(function () {
    $(".header").toggleClass("header--open");
    $("body").toggleClass("fixed");
    $(".sidebar").toggleClass("sidebar--open");
  });
  var formButton = document.querySelector(".content__form-btn"),
    formEye = document.querySelectorAll(".eye-js"),
    errorPassword = "content__form-input--error",
    formInput = document.querySelectorAll(".input-js"),
    formCode = Array.from(document.querySelectorAll(".content__form-number")),
    inputPassword = document.querySelectorAll(".content__form-password"),
    inputQuiz = document.querySelector(".content__form-input--quiz");

  function validateForm(formList) {
    var list = Array.from(formList);
    for (var i = 0; i < list.length; i++) {
      if (!list[i].value) {
        return false;
      }
    }
    return true;
  }

  if (formInput) {
    formInput.forEach(function (elem) {
      setTimeout(function () {
        elem.addEventListener("keyup", function () {
          if (validateForm(formInput)) {
            formButton.classList.remove("content__form-btn--notFull");
          } else {
            formButton.classList.add("content__form-btn--notFull");
          }
        });
        elem.addEventListener("blur", function () {
          if (!validateForm(formInput)) {
            formButton.classList.add("content__form-btn--notFull");
          }
        });
      }, 0);
    });
  }

  if (formCode) {
    formCode.forEach(function (elem, index) {
      elem.addEventListener("input", function (e) {
        elem.value = e.data;
        var nextInput = formCode[index + 1];
        var prevInput = formCode[index - 1];

        if (elem.value.length == 1) {
          if (nextInput) {
            nextInput.focus();
          }
        }
        if (elem.value.length == 0) {
          if (prevInput) {
            prevInput.focus();
          }
        }
      });
      setTimeout(function () {
        elem.addEventListener("keyup", function () {
          if (validateForm(formCode)) {
            formButton.classList.remove("content__form-btn--notFull");
          } else {
            formButton.classList.add("content__form-btn--notFull");
          }
        });
        elem.addEventListener("blur", function () {
          if (!validateForm(formCode)) {
            formButton.classList.add("content__form-btn--notFull");
          }
        });
      }, 0);
    });
  }

  if (formButton) {
    formButton.addEventListener("click", function () {
      var attribute = inputPassword.value;
      if (attribute != 555) {
        inputPassword.parentElement.classList.add(errorPassword);
        inputPassword.setAttribute("type", "text");
        inputPassword.value = "Неверный пароль";
      }
    });
    inputPassword.forEach(function (e) {
      e.addEventListener("focus", function () {
        if (this.parentElement.classList.contains(errorPassword)) {
          this.value = "";
          inputPassword.setAttribute("type", "password");
          this.parentElement.classList.remove(errorPassword);
        }
      });
    });

    formEye.forEach(function (elem) {
      elem.addEventListener("click", function () {
        elem.classList.toggle("content__form-icon--active");
        if (document.querySelector(".content__form-icon--active")) {
          this.previousElementSibling.setAttribute("type", "text");
        } else {
          this.previousElementSibling.setAttribute("type", "password");
        }
      });
    });
  }
  const copy = document.getElementById("copyInput");
  $(".copyBtn").click(function () {
    $(this).text("Скопировано");
    copy.select();
    document.execCommand("copy");
  });
  $(".history__filterBtn").click(function () {
    $(".history__params").toggleClass("history__params--active");
  });
  $(".history__close").click(function () {
    $(".history__params").removeClass("history__params--active");
  });
});
