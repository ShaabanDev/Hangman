// getting a puzzle with specific word count 
const getPuzzle = (wordCount,callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", (e) => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data.puzzle);
    } else if (request.readyState === 4) {
      callback("there is an error", undefined);
    }
  });
  request.open("GET", `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
  request.send();
};
// getting a country information with it's code from the REST countries API 
const getCountryInfo = (countryCode, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", (e) => {
    if (request.readyState === 4 && request.status === 200) {
      const allCountries = JSON.parse(e.target.responseText);
      const countryInfo = allCountries.find((country) => {
        return country.alpha2Code === countryCode;
      });
      callback(undefined, countryInfo);
    } else if (request.readyState === 4) {
      callback("there is an error", undefined);
    }
  });
  request.open("GET", "https://restcountries.com/v2/all");
  request.send();
};
