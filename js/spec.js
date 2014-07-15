describe ("contactBook", function() {
  it("takes a first and last name from an input box and displays it", function() {
    contactBook("John", "Jones").should.equal("John Jones");
  });
});
