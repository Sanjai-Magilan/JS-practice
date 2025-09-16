const countVowels = str => [...str].filter(c => "aeiouAEIOU".includes(c)).length;
console.log(countVowels("sdfghjkl"))