$(document).ready(function () {
  //***AJAX request for cards==========================================
  $.ajax({ method: "GET", url: "/api/allReviews" }).done(function (response) {
    //*** fill 10 cards
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
      const amazon =
        "https://www.amazon.com/s?k=" +
        brand +
        "+" +
        flavor +
        "&ref=nb_sb_noss_2";

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
        <a type="button" class="btn btn-secondary" target="_blank" href=${amazon}>Buy from Amazon</a>
        <div type="button" class="btn btn-secondary float-right">Delete Post</div>
      </div>
  </div>
  <br>`;

      $("#cardInfo").prepend(template);

      if (i === 9) {
        return;
      }

      //Object.entries(reviewCard).forEach((entry) => {
      //const [key, value] = entry;
      //console.log(key, value);
      if (reviewCard.carbonation === true) {
        $("#bubbles").append(`<span>Yes Bubbles!</span>`);
      } else {
        $("#bubbles").append(`<span>No Bubbles!</span>`);
      }
      //}
      //);

      //Object.entries(reviewCard).forEach((entry) => {
      //const [key, value] = entry;
      //console.log(key, value);
      if (reviewCard.rating === true) {
        $("#rating").append(`<span>Dehydrated!</span>`);
      } else {
        $("#rating").append(`<span>Hydrated!</span>`);
      }
      //});
    }
  });
});
