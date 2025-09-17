const longest = (string) => {
  console.log(string.split(" ").reduce((longest, current=>longest.length>current.length?longest:current)));
};
longest("there is no tomorrow");
