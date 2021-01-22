$(document).ready(function () {
  //***clear local storage on logout==========================================
  $("#logOutBTN").on("click", function () {
    return localStorage.clear();
  });

  //***save dropdown values on apply filter btn click=====================
  $("#filtersBTN").on("click", function () {
    let brandVal = $("#dropDownBrand option:selected").val();
    let bubblesVal = $("#dropDownBubbles option:selected").val();
    let ratingVal = $("#dropDownRating option:selected").val();
    localStorage.setItem("brandVal", brandVal);
    localStorage.setItem("bubblesVal", bubblesVal);
    localStorage.setItem("ratingVal", ratingVal);

    filterOptions = {
      brandVal,
      bubblesVal,
      ratingVal,
    };
    $.ajax({
      method: "POST",
      url: "/api/filtered",
      data: filterOptions,
    }).done(function (response) {
      createCards(response);
    });
  });

  //*** creates unlimited cards==================
  function createCards(response) {
    $("#cardInfo").empty();
    for (let i = 0; i < response.length; i++) {
      const reviewCard = response[i];
      let title = reviewCard.title;
      let body = reviewCard.body;
      let rating = reviewCard.rating;
      let brand = reviewCard.brand;
      let bubbles = reviewCard.bubbles;
      let flavor = reviewCard.flavor;
      let user_name = reviewCard.user_name;

      $("#card").textContent = title;
      //*** buy from amazon button==================
      const amazon =
        "https://www.amazon.com/s?k=" +
        brand +
        "+water+" +
        flavor +
        "&ref=nb_sb_noss_2";

      //*** card template==================
      const template = `
    <div class="card container" style="padding: 0px">
    <div class="card text-white bg-secondary mb-3 card-header text-uppercase"><h2>
    <span class="float-left"  >${title} <span class="text-lowercase font-italic">by</span> ${user_name}</span>
    <span class="float-right">${flavor} ${brand}</span></h2>
    </div>
    
    <div class="card-body">
      <h5 class="card-title text-center">"${body}" </h5>
      <p class="card-text">Hey, <span class= "text-uppercase"> ${user_name}</span>, did this have bubbles? <span class="font-weight-bold" id= "bubbles"></span></p>
      <p>I rate this <span class="font-weight-bold" id= "rating"></span></p>
      <a type="button" class="btn btn-secondary amazonBTN" target="_blank" href="${amazon}">Buy from Amazon</a>
      <span>
          ${(() => {
            if (
              user_name.toLowerCase() !==
              localStorage.getItem("userName").toLowerCase()
            ) {
              return "";
            } else {
              return `<button value ="${user_name}" type="button" data-review-id= "${reviewCard.id}" class=" deleteBTN btn btn-secondary float-right">Delete Post</button>`;
            }
          })()}
      </span>
      </div>
</div>
<br>`;

      $("#cardInfo").prepend(template);

      //*** uncomment this code if you would like only 10 cards==================
      // if (i === 9) {
      //   return;
      // }
      //*** convert database boolean value into string for Bubbles==================
      if (bubbles === true) {
        $("#bubbles").append(`<span>Yes Bubbles!</span>`);
      } else {
        $("#bubbles").append(`<span>No Bubbles!</span>`);
      }
      //*** convert database boolean value into string for Rating==================
      if (rating === true) {
        $("#rating").append(`<span>Hydrated!</span>`);
      } else {
        $("#rating").append(`<span>Dehydrated!</span>`);
      }
    }
  }

  //***AJAX request for cards==========================================
  callReviews();
  function callReviews() {
    $.ajax({ method: "GET", url: "/api/allReviews" }).done(function (response) {
      createCards(response);
    });
  }
  //*** delete buttons===================================
  $(document).on("click", ".deleteBTN", function () {
    const id = $(this).attr("data-review-id");
    console.log(this);
    if (localStorage.getItem("userName").toLowerCase() === $(this).val()) {
      $.ajax({
        method: "DELETE",
        url: "/api/delete_review/" + id,
      }).then(callReviews);
    } else {
      console.log($(this).val());
    }
  });
  //***AJAX requests for dropdown menus==========================================
  $.ajax({ method: "GET", url: "/api/brands" }).done((result) => {
    $("#dropDownBrand").append(`<option selected></option>`);
    result.forEach((brand) => {
      if (brand !== "" || brand !== null) {
        $("#dropDownBrand").append(
          `<option value= "${brand.brand_name}">${brand.brand_name}</option>`
        );
      } else {
      }
    });
    $(".chzn-select").trigger("chosen:updated");
  });

  $.ajax({ method: "GET", url: "/api/bubbles" }).done((result) => {
    $("#dropDownBubbles").append(`<option selected></option>`);
    console.log(result);
    result.forEach((bubbles) => {
      if (bubbles !== "" || bubbles !== null) {
        if (bubbles.bubbles === true) {
          $("#dropDownBubbles").append(
            `<option value= "true">Yes Bubbles!</option>`
          );
        } else {
          $("#dropDownBubbles").append(
            `<option value= "false">No Bubbles!</option>`
          );
        }
      } else {
      }
    });
    $(".chzn-select").trigger("chosen:updated");
  });

  $.ajax({ method: "GET", url: "/api/rating" }).done((result) => {
    $("#dropDownRating").append(`<option selected></option>`);
    result.forEach((Rating) => {
      if (Rating !== "" || Rating !== null) {
        if (Rating.rating === true) {
          $("#dropDownRating").append(
            `<option value= "${Rating.rating}">Hydrated</option>`
          );
        } else {
          $("#dropDownRating").append(
            `<option value= "${Rating.rating}">Dehydrated</option>`
          );
        }
      } else {
      }
    });
    $(".chzn-select").trigger("chosen:updated");
  });
});
