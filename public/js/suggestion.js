$(document).ready(function () {
  //***clear local storage on logout==========================================
  $("#logOutBTN").on("click", function () {
    return localStorage.clear();
  });

  // Add Brand event listener
  $(".addNewBrand").on("click", function () {
    var typeNewBrand = $("#typeNewBrand").val();
    console.log("adding brand?");
    if (typeNewBrand === "") {
      $("#typeNewBrand").val("");
      $("#typeNewBrand").text("Please enter a brand");
      $("#typeNewBrand").attr(
        "style",
        "border: 2px solid red; border-radius: 4px; width:350px;"
      );
      $("#typeNewBrand").attr("placeholder", "Please enter a brand");
      $("#add-brand-error").text("Please enter a brand");
    } else {
      $(".addNewBrand").attr("href", "./newPost.html");

      // Object for adding new brand name to Brand table
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

  // Add Flavor event listener
  $(".addNewFlavor").on("click", function () {
    var addNewFlavor = $("#typeNewFlavor").val();
    console.log("adding flavor?");
    if (addNewFlavor === "") {
      $("#typeNewFlavor").text("Please enter a flavor");
      $("#typeNewFlavor")
        .attr(
          "style",
          "border: 2px solid red; border-radius: 4px; width:350px;"
        )
        .attr("placeholder", "Please enter a flavor");
      $("#add-flavor-error").text("Please enter a flavor");
    } else {
      $(".addNewFlavor").attr("href", "./newPost.html");

      //object for adding new flavor to flavor table
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

  //Delete Brand button event listener
  $(document).on("click", ".deleteNewBrand", function () {
    const id = $("#typeNewBrand").val();

    if (id === "") {
      $("#add-brand-error").text("");
      $("#deleteBrandSuccess").text("Please enter a brand");
    } else {
      $("#typeNewBrand").val("");
      $("#add-brand-error").text("");
      // next line of code for future development
      // $("#deleteBrandSuccess").text(`Success! The brand "${id}" has been deleted`).attr("style", "color:#66FF00;");
      $("#delete-brand-btn").attr("href", "./newPost.html");

      //Deleting brand
      $.ajax({
        method: "DELETE",
        url: "/api/Brands/" + id,
      }).then(callReviews);
    }
  });

  // Delete Flavor button event listener
  $(document).on("click", ".deleteNewFlavor", function () {
    console.log("is this button working?");

    const id = $("#typeNewFlavor").val();
    if (id === "") {
      $("#add-flavor-error").text("");
      $("#deleteFlavorSuccess").text("Please enter a flavor");
    } else {
      $("#typeNewFlavor").val("");
      $("#add-flavor-error").text("");
      // next line of code for future development
      // $("#deleteFlavorSuccess").text(`Success! The flavor "${id}" has been deleted`).attr("style", "color:#66FF00;");
      $("#delete-flavor-btn").attr("href", "./posts.html");

      // Deleting flavor

      $.ajax({
        method: "DELETE",
        url: "/api/flavors/" + id,
      }).then(callReviews);
    }
  });
});
