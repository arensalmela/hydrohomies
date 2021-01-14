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

  //*** Call API to fill review cards==========================================
  function getCardInfo(title) {
    const settings = {
      async: true,
      crossDomain: true,
      url: "????????" + title,
      method: "GET",
      headers: {
        "??????": "?????",
        "????": "????",
      },
    };

    //***AJAX request for dropdown menus==========================================
    $.ajax({ method: "GET", url: "/api/brands" }).done((result) => {
      console.log(result);
      result.forEach((brand) => {
        $("//append A tags");
      });
    });

    //***AJAX request for cards==========================================
    $.ajax(settings).done(function (response) {
      //*** fill 10 cards
      for (i = 0; i <= 10; i++) {
        const reviewCard = response.result.data[i];
        let title = reviewCard?.title;
        let body = reviewCard?.body;
        let rating = reviewCard?.rating;
        let brand = reviewCard?.brand;
        let carbonation = reviewCard?.carbonation;
        let flavor = reviewCard?.flavor;
        let user_name = reviewCard?.user_name;

        $(".card").textContent = title;

        const template = `
            <ul>
                <ul>What ${user_name} thought about ${flavor} ${brand}</ul>
                <ul>Review -
                    ${body}</ul>
                <ul>Rating - ${rating}    Bubblies? - ${carbonation}</ul>
                </ul>`;

        const amazon =
          "https://www.amazon.com/s?k=" +
          brand +
          "+" +
          flavor +
          "&ref=nb_sb_noss_2";

        $("#cardInfo").prepend(template);
        //*need to create cardInfo id's in HTML

        $("#amazonBTN").attr("href", amazon);
        //*need to create buttons to link to amazon site at bottom of each card - id should be amazonBTN- and some number
      }
    });
  }
});
