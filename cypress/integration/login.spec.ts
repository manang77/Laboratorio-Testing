describe('Login specs', () => {

  it('Should display empty and enabled user and passwords inputs when it enter login page', () => {
    //Arrange

    //Act
    cy.visit('/login');
    cy.findByRole('textbox').as("userInput");
    cy.get('input[name="password"]').as("passwordInput");

    //Asert
    cy.get('@userInput').should('be.empty');
    cy.get('@userInput').should('be.enabled');
    cy.get('@passwordInput').should('be.empty');
    cy.get('@passwordInput').should('be.enabled');
  });

  it('Should name input has the focus when it is clicked', () => {
    //Arrange

    //Act
    cy.visit('/login');
    cy.findByRole('textbox').as("userInput");
    cy.get('@userInput').click();

    //Asert
    cy.get('@userInput').should('have.focus');
  });

  it('Should password input has the focus when it is clicked', () => {
    //Arrange

    //Act
    cy.visit('/login');
    cy.get('input[name="password"]').as("passwordInput");
    cy.get('@passwordInput').click();


    //Asert
    cy.get('@passwordInput').should('have.focus');
  });


  it('Should display a warning for user input when it put the focus in the user input and does not enter any value', () => {

    //Arrange

    //Act
    cy.visit('/login');
    cy.findByRole('textbox').as("userInput");
    cy.get('input[name="password"]').as("passwordInput");
    cy.get('@userInput').click();
    cy.get('@passwordInput').click();
    cy.findAllByText('Debe informar el campo').as("warningsInvalidInput");


    //Asert
    cy.get('@warningsInvalidInput').should('have.length', 1)

  });

  it('Should display a warning for password input when it put the focus in the password input and does not enter any value', () => {

    //Arrange

    //Act
    cy.visit('/login');
    cy.findByRole('textbox').as("userInput");
    cy.get('input[name="password"]').as("passwordInput");
    cy.get('@passwordInput').click();
    cy.get('@userInput').click();
    cy.findAllByText('Debe informar el campo').as("warningsInvalidInput");

    //Asert
    cy.get('@warningsInvalidInput').should('have.length', 1);
  });

  it('Should display two warninga for user and password inputs when it put the focus in both inputs and does not enter any value', () => {

    //Arrange

    //Act
    cy.visit('/login');
    cy.findByRole('textbox').as("userInput");
    cy.get('input[name="password"]').as("passwordInput");
    cy.get('@passwordInput').click();
    cy.get('@userInput').click();
    cy.get('@passwordInput').click();
    cy.findAllByText('Debe informar el campo').as("warningsInvalidInput");

    //Asert
    cy.get('@warningsInvalidInput').should('have.length', 2);
  });

  it('Should display only one warning for password input when it put focus in the user input, then put focus in password input and enter a value user input', () => {

    //Arrange
    const user = "admin";

    //Act
    cy.visit('/login');
    cy.findByRole('textbox').as("userInput");
    cy.get('input[name="password"]').as("passwordInput");
    cy.get('@userInput').click();
    cy.get('@passwordInput').click();
    cy.get('@userInput').click();
    cy.findAllByText('Debe informar el campo').as("warningsInvalidInput");

    //Asert
    cy.get('@warningsInvalidInput').should('have.length', 2);
    cy.get('@userInput').type(user);
    cy.get('@warningsInvalidInput').should('have.length', 1);
  });

  it('Should display only one warning for user input when it put focus in the password input, then put focus in user input and enter a value password input', () => {

    //Arrange
    const password = "test";

    //Act
    cy.visit('/login');
    cy.findByRole('textbox').as("userInput");
    cy.get('input[name="password"]').as("passwordInput");
    cy.get('@passwordInput').click();
    cy.get('@userInput').click();
    cy.get('@passwordInput').click();
    cy.findAllByText('Debe informar el campo').as("warningsInvalidInput");

    //Asert
    cy.get('@warningsInvalidInput').should('have.length', 2);
    cy.get('@passwordInput').type(password);
    cy.get('@warningsInvalidInput').should('have.length', 1);
  });

  it('Should not display any warning for user and password inputs when it put focus in the user input, then put focus in pasword input and enter values for both inputs', () => {

    //Arrange
    const user = "admin";
    const password = "test";

    //Act
    cy.visit('/login');
    cy.findByRole('textbox').as("userInput");
    cy.get('input[name="password"]').as("passwordInput");
    cy.get('@userInput').click();
    cy.get('@passwordInput').click();
    cy.get('@userInput').click();
    cy.findAllByText('Debe informar el campo').as("warningsInvalidInput");

    //Asert
    cy.get('@warningsInvalidInput').should('have.length', 2);
    cy.get('@userInput').type(user);
    cy.get('@warningsInvalidInput').should('have.length', 1);
    cy.get('@passwordInput').click();
    cy.get('@passwordInput').type(password);
    cy.findAllByText('Debe informar el campo').should('have.length', 0);
  });

  it('Should display a warning message when it enters invalid credentials', () => {
    //Arrange
    const user = "admin";
    const password = "invalid"

    //Act
    cy.visit('/login');
    cy.findByRole('textbox').as("userInput");
    cy.get('input[name="password"]').as("passwordInput");
    cy.findByRole('button').as("submitButton");

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);

    //Asert
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', password);
    cy.get('@submitButton').click();

    cy.findByRole('alert').as("messageAlert").should('be.visible');
  });

  it('Should navigate to module list page when it enters valid credentials', () => {
    //Arrange
    const user = "admin";
    const password = "test"

    //Act
    cy.visit('/login');
    cy.findByRole('textbox').as("userInput");
    cy.get('input[name="password"]').as("passwordInput");
    cy.findByRole('button').as("submitButton");

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);

    //Asert
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', password);
    cy.get('@submitButton').click();

    cy.url().should('eq', 'http://localhost:8000/#/submodule-list')
  });

});

