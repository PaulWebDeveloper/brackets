module.exports = function check(str, bracketsConfig) {
  for (let n = 0, len = bracketsConfig.length; n <= len; n++) {
    bracketsConfig.filter(el => {
      let pattern = el.join('')
      for (let j = 0, lenstr = str.length / 2; j < lenstr; j++)
        str = str.replace(pattern, '');
    });
  }
  return !str;
}
