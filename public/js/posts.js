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
