$(document).ready(function () {
  $(".contactSubmitBtn").click(function () {
    $(".contactForm").html("");
    $(".contactForm").append(`
    <h1> Thank you for your submission! </h1>
    <h3> We really value your feedback. If you submitted a question, a team member will contact you at your provided email
    address within 1-2 business days. </h3>
    `);
  });
});
