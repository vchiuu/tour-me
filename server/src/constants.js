// https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
export const urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
// https://stackoverflow.com/questions/9682709/regexp-matching-hex-color-syntax-and-shorten-form
export const hexColorRegex = /^#[0-9a-f]{3,6}$/i;