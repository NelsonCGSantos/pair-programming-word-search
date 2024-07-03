const transpose = (word) => {
  let result = [];

  for (let i = 0; i < word.length; i++) {
    let rows = [];

    for (let j = 0; j < word.length; j++) {
      rows.push(word[j][i]);
    }
    result.push(rows);
  }
  return result;
};


const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const verticalLetters = transpose(letters);
  const verticalJoin = verticalLetters.map((ls) => ls.join(""));

  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;

};


module.exports = wordSearch;
