function trekPxToRem(options = defaults) {
  return {
    postcssPlugin: 'postcss-trek-px-to-rem',
    Declaration(decl) {
      const regex = /(\d?\.?\d?px)/g;
      if (regex.test(decl.value)) {
        decl.value = decl.value.replace(regex, ($match1, $match2) => {
          return ($match2.replace('px', '') / 16) + 'rem';
        });
      }
    }
  }
}

trekPxToRem.postcss = true;

module.exports = trekPxToRem;