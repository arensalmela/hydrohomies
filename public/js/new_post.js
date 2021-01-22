$(document).ready(function () {
  //***clear local storage on logout==========================================
  $("#logOutBTN").on("click", function () {
    return localStorage.clear();
  });

  //***user entry error checks==========================================
  $("#submitBTN").on("click", function () {
    const loadSpinner = $("a").click(function () {
      $("#overlay").fadeIn().delay(2000).fadeOut();
    });

    $("#newReviewTitleErrMsg").html("");
    $("#newReviewBodyErrMsg").html("");
    $("#dropdownErrMsg").html("");

    const brand = $("#brand").val();
    const flavor = $("#flavor").val();
    const bubbles = $("#bubbles").val();
    const rating = $("#rating").val();
    const title = $("#newReviewTitle").val();
    const body = $("#newReviewBody").val();
    const userName = localStorage.getItem("userName");

    const newReview = {
      brand: brand,
      flavor: flavor,
      bubbles: bubbles,
      rating: rating,
      title: title,
      body: body,
      user_name: userName,
    };

    //*title errors==========================================
    if (isValid(title)) {
    } else {
      $("#newReviewTitleErrMsg").append(
        $("<p>Do not include special characters</p>")
      );
      return;
    }
    if (hasNumber(title)) {
      $("#newReviewTitleErrMsg").append($("<p>Do not include numbers</p>"));
      return;
    } else {
    }

    //*body errors==========================================
    if (body === "") {
      $("#newReviewBodyErrMsg").append($("<p>Please write a review</p>"));
      return;
    } else {
      loadSpinner();
    }

    //*dropdown menus errors==========================================
    if (
      brand === undefined ||
      brand === "Select Brand" ||
      flavor === undefined ||
      flavor === "Select Flavor" ||
      bubbles === undefined ||
      bubbles === "Select Bubbles" ||
      rating === undefined ||
      rating === "Select Rating"
    ) {
      $("#dropdownErrMsg").append(
        $("<p>Looks like you didn't select from all the dropdowns.</p>")
      );
      return;
    } else {
    }

    //***AJAX request for cards==========================================
    $.ajax({
      method: "POST",
      url: "/api/new_review",
      data: newReview,
    }).done(function (response) {
      console.log(response);
    });

    $(this).attr("href", "./posts.html");
  });

  function isValid(title) {
    return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(title);
  }

  function hasNumber(myString) {
    return /\d/.test(myString);
  }

  //***AJAX requests for dropdown menus==========================================
  $.ajax({ method: "GET", url: "/api/brands" }).done((result) => {
    $("#brand").append(`<option selected>Select Brand</option>`);
    result.forEach((brand) => {
      if (brand !== "" || brand !== null) {
        $("#brand").append(
          `<option value= "${brand.brand_name}">${brand.brand_name}</option>`
        );
      } else {
      }
    });
    $(".chzn-select").trigger("chosen:updated");
  });

  $.ajax({ method: "GET", url: "/api/flavors" }).done((result) => {
    $("#flavor").append(`<option selected>Select Flavor</option>`);
    result.forEach((flavor) => {
      if (flavor !== "" || flavor !== null) {
        $("#flavor").append(
          `<option value= "${flavor.flavor}">${flavor.flavor}</option>`
        );
      } else {
      }
    });
    $(".chzn-select").trigger("chosen:updated");
  });

  $.ajax({ method: "GET", url: "/api/bubbles" }).done((result) => {
    $("#bubbles").append(`<option selected>Select Bubbles</option>`);
    console.log(result);
    result.forEach((bubbles) => {
      if (bubbles !== "" || bubbles !== null) {
        if (bubbles.bubbles === true) {
          $("#bubbles").append(`<option value= "true">Yes Bubbles!</option>`);
        } else {
          $("#bubbles").append(`<option value= "false">No Bubbles!</option>`);
        }
      } else {
      }
    });
    $(".chzn-select").trigger("chosen:updated");
  });

  $.ajax({ method: "GET", url: "/api/rating" }).done((result) => {
    $("#rating").append(`<option selected>Select Rating</option>`);
    result.forEach((Rating) => {
      if (Rating !== "" || Rating !== null) {
        if (Rating.rating === true) {
          $("#rating").append(
            `<option value= "${Rating.rating}">Hydrated</option>`
          );
        } else {
          $("#rating").append(
            `<option value= "${Rating.rating}">Dehydrated</option>`
          );
        }
      } else {
      }
    });
    $(".chzn-select").trigger("chosen:updated");
  });
});
