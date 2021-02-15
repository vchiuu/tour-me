// https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url

export const regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

const isUrl = str => {
  if (!str) {
    return false;
  }
  return regex.test(str);
};

export default isUrl;
