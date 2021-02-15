// https://stackoverflow.com/questions/9682709/regexp-matching-hex-color-syntax-and-shorten-form

export const regex = /^#[0-9a-f]{3,6}$/i;

const isHexColor = str => {
  if (!str) {
    return false;
  }
  return regex.test(str);
};

export default isHexColor;
