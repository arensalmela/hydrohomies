const entryValidate = (answer) => {
  if (answer === "") {
    return "Cannot be blank.";
  }
  return true;
};
const numberValidate = (answer) => {
  if (isNaN(answer) === false) {
    return true;
  }
  return "Must be a number.";
};

const emailValidate = function (email) {
  valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  if (valid) {
    return true;
  } else {
    return "Please enter a valid email";
  }
};

const addReviewQuestions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your review",
    validate: entryValidate,
  },
  {
    type: "editor",
    name: "body",
    message: "Write your review!",
  },
  {
    type: "input",
    name: "brand",
    message: "What is the brand?",
    validate: entryValidate,
  },
  {
    type: "list",
    name: "carbonation",
    message: "What is the brand?",
    choices: ["true", "false"],
  },
  {
    type: "input",
    name: "flavor",
    message: "What is the flavor?",
    validate: entryValidate,
  },
  {
    type: "input",
    name: "rating",
    message: "Rate 1 thru 5",
    validate: numberValidate,
  },
  {
    type: "input",
    name: "user_name",
    message: "Create a user name.",
    validate: entryValidate,
  },
  {
    type: "input",
    name: "email",
    message: "What is the Manager's email address?",
    validate: emailValidate,
  },
];

module.exports = {
  addReviewQuestions,
};
