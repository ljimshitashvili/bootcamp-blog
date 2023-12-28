export const blogValidation = (e) => {
  const scheme = {
    author: {
      length: "",
      twoWords: "",
      geoChar: "",
    },
    title: {
      length: "",
    },
  };

  const georgianCharactersRegex = /^[ა-ჰ\s]+$/;

  const checkWords = (string) => {
    let trimmedString = string.trim();
    let words = trimmedString.split(/\s+/);
    return words.length === 2;
  };

  if (e.target.value.length >= 4) {
    scheme.author.length = "valid";
  } else {
    scheme.author.length = "invalid";
  }

  if (checkWords(e.target.value)) {
    scheme.author.twoWords = "valid";
  } else {
    scheme.author.twoWords = "invalid";
  }

  if (georgianCharactersRegex.test(e.target.value)) {
    scheme.author.geoChar = "valid";
  } else {
    scheme.author.geoChar = "invalid";
  }

  return scheme;
};
