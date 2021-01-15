console.log("Do a thing");

$(document).ready(function () {
  //***user entry error checks==========================================
  $("#submitBTN").on("click", function () {
    $("#newReviewTitleErrMsg").html("");
    $("#newReviewBodyErrMsg").html("");
    $("#dropdownErrMsg").html("");

    const enteredTitleText = $("#newReviewTitle").val();
    const enteredBodyText = $("#newReviewBody").val();
    const dropdownText = $("#dropdownMenuButton").val();

    //*title errors==========================================
    if (isValid(enteredTitleText)) {
    } else {
      $("#newReviewTitleErrMsg").append(
        $("<p>Do not include special characters</p>")
      );
      return;
    }
    if (hasNumber(enteredTitleText)) {
      $("#newReviewTitleErrMsg").append($("<p>Do not include numbers</p>"));
      return;
    } else {
    }

    //*body errors==========================================
    $("#newReviewBodyErrMsg").html("");
    if (isValid(enteredBodyText)) {
    } else {
      $("#newReviewTitleErrMsg").append($("<p>Please write a review</p>"));
      return;
    }

    //*dropdown menus errors==========================================
    if (
      dropdownText === "Select Brand" ||
      dropdownText === "Select Flavor" ||
      dropdownText === "Bubbles?" ||
      dropdownText === "Star Rating"
    ) {
      $("#dropdownErrMsg").append($("<p>Select an item from the dropdown</p>"));
      return;
    } else {
    }

    //** Set to local storage ============================================
    let title = $("#newReviewTitle").val();
    localStorage.setItem("reviewTitle", title);
    getCardInfo(title);
  });

  function isValid(str) {
    return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
  }

  function hasNumber(myString) {
    return /\d/.test(myString);
  }

  //***AJAX request for dropdown menus==========================================
  $.ajax({ method: "GET", url: "/api/brands" }).done((result) => {
    console.log(result);
    result.forEach((brand) => {
      if (brand !== "" || brand !== null) {
        $("#brand").append(`<option>${brand.brand_name}</option>`);
      } else {
      }
    });
    $(".chzn-select").trigger("chosen:updated");
  });

  $.ajax({ method: "GET", url: "/api/flavors" }).done((result) => {
    console.log(result);
    result.forEach((flavor) => {
      if (flavor !== "" || flavor !== null) {
        $("#flavor").append(`<option>${flavor.flavor}</option>`);
      } else {
      }
    });
    $(".chzn-select").trigger("chosen:updated");
  });

  //***AJAX request for cards==========================================
  $.ajax({ method: "GET", url: "/api/All_Reviews" }).done(function (response) {
    //*** fill 10 cards
    for (let i = 0; i < response.result.data.length; i++) {
      const reviewCard = response.result.data[i];
      let title = reviewCard.title;
      let body = reviewCard.body;
      let rating = reviewCard.rating;
      let brand = reviewCard.brand;
      let carbonation = reviewCard.carbonation;
      let flavor = reviewCard.flavor;
      let user_name = reviewCard.user_name;

      $(".card").textContent = title;
      const amazon =
        "https://www.amazon.com/s?k=" +
        brand +
        "+" +
        flavor +
        "&ref=nb_sb_noss_2";

      const template = `
      <div id="posts" class="card">
      <div class="card-header">
        ${title} by ${user_name}
      </div>
      <div class="card-body">
        <h5 class="card-title">${brand} ${flavor} ${carbonation}</h5>
        <p class="card-text">${body}</p>
        <p class="card-text">${rating}</p>
        <a href=${amazon}>Click here to purchase from Amazon</a>
      </div>
  </div>`;

      $("#cardInfo").prepend(template);
      //*need to create cardInfo id's in HTML

      if (i === 9) {
        return;
      }
    }
  });
});
