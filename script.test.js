const translate = require("./script");

describe("translate function", () => {
  test("words that start with vowels", () => {
    const actualResult = translate("apple");
    expect(actualResult).toBe("appleway");
  });
  test("words that start with vowels", () => {
    const actualResult = translate("elephant");
    expect(actualResult).toBe("elephantway");
  });
  test("words that start with a capital vowel", () => {
    const actualResult = translate("Open");
    expect(actualResult).toBe("openway");
  });
  test("words that start with vowels and are in all caps", () => {
    const actualResult = translate("ASK");
    expect(actualResult).toBe("askway");
  });
  test("words that start with vowels", () => {
    const actualResult = translate("igloo");
    expect(actualResult).toBe("iglooway");
  });
  test("words that start with one consonant", () => {
    const actualResult = translate("people");
    expect(actualResult).toBe("eoplepay");
  });
  test("words that start with one consonant", () => {
    const actualResult = translate("leaf");
    expect(actualResult).toBe("eaflay");
  });
  test("words that start with two consonants", () => {
    const actualResult = translate("program");
    expect(actualResult).toBe("ogrampray");
  });
  test("words that start with three consonants", () => {
    const actualResult = translate("three");
    expect(actualResult).toBe("eethray");
  });
  test("words that start with three consonants", () => {
    const actualResult = translate("Stretch");
    expect(actualResult).toBe("etchstray");
  });
});
