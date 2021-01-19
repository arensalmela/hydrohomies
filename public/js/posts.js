$(document).ready(function () {
  //***AJAX request for cards==========================================
  $.ajax({ method: "GET", url: "/api/allReviews" }).done(function (response) {
    //*** creates up to 10 cards==================
    console.log(response);
    for (let i = 0; i < response.length; i++) {
      const reviewCard = response[i];
      let title = reviewCard.title;
      let body = reviewCard.body;
      let rating = reviewCard.rating;
      let brand = reviewCard.brand;
      let carbonation = reviewCard.carbonation;
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
      <div id="posts" class="card container">
      <div class="card-header text-uppercase"><h2>
      <span class="float-left">${title} <span class="text-lowercase font-italic">by</span> ${user_name}</span>
      <span class="float-right">${flavor} ${brand}</span></h2>
      </div>
      
      <div class="card-body">
        <h5 class="card-title text-center">${body}</h5>
        <p class="card-text">Hey, <span class= "text-uppercase"> ${user_name}</span>, did this have bubbles? <span class="font-weight-bold" id= "bubbles"></span></p>
        <p>I rate this <span class="font-weight-bold" id= "rating"></span></p>
        <a type="button" class="btn btn-secondary" target="_blank" href="${amazon}">Buy from Amazon</a>
        <button type="button" data-review-id= "${reviewCard.id}" class="deleteBTN btn btn-secondary float-right">Delete Post</button>
      </div>
  </div>
  <br>`;

      $("#cardInfo").prepend(template);

      if (i === 9) {
        return;
      }
      //*** convert database boolean value into string for Bubbles==================
      if (carbonation === true) {
        $("#bubbles").append(`<span>Yes Bubbles!</span>`);
      } else {
        $("#bubbles").append(`<span>No Bubbles!</span>`);
      }
      //*** convert database boolean value into string for Rating==================
      if (rating === true) {
        $("#rating").append(`<span>Dehydrated!</span>`);
      } else {
        $("#rating").append(`<span>Hydrated!</span>`);
      }
      //*** delete buttons==================
    }
  });
  $(document).on("click", ".deleteBTN", function () {
    let id = $(this).attr("data-review-id");
    $.ajax({
      method: "DELETE",
      url: "/api/delete_review/" + id,
    }).done((_) => {
      window.location.reload();
    });
  });
});
