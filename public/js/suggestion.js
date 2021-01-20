$(document).ready(function () {
  $(".addNewBrand").on("click", function () {
    var typeNewBrand = $("#typeNewBrand").val();
    console.log("adding brand?");
    if (typeNewBrand === "") {
      $("#typeNewBrand").val("");
      $("#typeNewBrand").text("Please enter a brand");
      $("#typeNewBrand").attr(
        "style",
        "border: 2px solid red; border-radius: 4px"
      );
      $("#typeNewBrand").attr("placeholder", "Please enter a brand");
      $("#add-brand-error").text("Please enter a brand");
    } else {
      $(".addNewBrand").attr("href", "./posts.html");

      const newBrand = {
        brand_name: typeNewBrand,
      };
      $.ajax({
        method: "POST",
        url: "/api/brands",
        data: newBrand,
      }).done(function (response) {
        console.log(response);
      });
    }
  });

  $(".addNewFlavor").on("click", function () {
    var addNewFlavor = $("#typeNewFlavor").val();
    console.log("adding flavor?");
    if (addNewFlavor === "") {
      $("#typeNewFlavor").text("Please enter a flavor");
      $("#typeNewFlavor")
        .attr("style", "border: 2px solid red; border-radius: 4px")
        .attr("placeholder", "Please enter a flavor");
      $("#add-flavor-error").text("Please enter a flavor");
    } else {
      $(".addNewFlavor").attr("href", "./posts.html");
      const newFlavor = {
        flavor: addNewFlavor,
      };
      $.ajax({
        method: "POST",
        url: "/api/flavors",
        data: newFlavor,
      }).done(function (response) {
        console.log(response);
      });
    }
  });
});
