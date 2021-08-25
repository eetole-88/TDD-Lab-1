const translate = (word) => {
  let vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(word[0].toLowerCase())) {
    return word.toLowerCase() + "way";
  } else if (vowels.includes(word[1])) {
    let split = word.split("");
    let firstLetter = word[0];
    split.shift();
    split.push(firstLetter, "a", "y");
    return split.join("").toLowerCase();
  } else if (vowels.includes(word[2])) {
    let split = word.split("");
    let firstLetter = word[0];
    let secondLetter = word[1];
    split.splice(0, 2);
    split.push(firstLetter, secondLetter, "a", "y");
    return split.join("").toLowerCase();
  } else if (vowels.includes(word[3])) {
    let split = word.split("");
    let firstLetter = word[0];
    let secondLetter = word[1];
    let thirdLetter = word[2];
    split.splice(0, 3);
    split.push(firstLetter, secondLetter, thirdLetter, "a", "y");
    return split.join("").toLowerCase();
  }
};

module.exports = translate;
