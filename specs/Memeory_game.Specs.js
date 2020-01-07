let memory_game = require('../script');

describe("function must check if cards flip", function () {
    it("check if cards flip", function () {
        expect(script.flipCard()).tobeTrue();
    });
});

describe("function must check if cards match", function () {
  it("check if cards match", function () {
      expect(script.Match()).tobeTrue();
  });
});

describe("function must check if cards shuffle after everygame", function () {
  it("check if cards shuffle", function () {
      expect(script.shuffle()).tobeTrue();
  });
});