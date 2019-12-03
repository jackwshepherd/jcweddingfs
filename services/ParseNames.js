module.exports = array => {
  return array.map(({ firstname, lastname }, key) => {
    // If the first one, no prefix
    if(key === 0) return `${firstname} ${lastname}`;

    // If the last one, prefix is and
    if(key === (array.length -1)) return ` and ${firstname} ${lastname}`;

    // If any other, do a comma
    return `, ${firstname} ${lastname}`;

  }).join("");
};
