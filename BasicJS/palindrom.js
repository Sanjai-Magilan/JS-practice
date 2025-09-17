const reverse = (string) => {
  console.log(string.split("").reverse().join("") === string ? "palindrom":"Not a palindrom");
};
reverse("appa");
