function sendWelcomeMessage(mailer, name) {
  mailer.send(`Hello ${name}`);
}

test("send a welcome message with a given name", () => {
  // arrange
  const name = "Jerome";
  const mockMailer = {
    send: jest.fn(),
  };

  // act
  sendWelcomeMessage(mockMailer, name);

  // assert
  expect(mockMailer.send).toHaveBeenCalledWith(`Hello ${name}`);
});
