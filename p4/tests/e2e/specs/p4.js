// https://docs.cypress.io/api/introduction/api.html

describe('Dogs test', () => {
  // some data
  let dogs =
  {
    "id": 1,
    "name": "American Foxhound",
  }
  let dogs2 =
  {
    "id": 1,
    "name": "African Hunting Dog"
  }

  //Check the home page. Should contain some text and 1 dog
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h2', 'Featured Dog of the Week')
    // does it find the dog name
    cy.contains('[data-test="dog-name2"]', dogs.name)
    // there should only be one dog
    cy.get('[data-test="dog-name2"]').should('have.length', 1)

  }),

    //Check the page thqt has all the dogs pict. Clicking on a pict/link should bring up details of that dog
    it('Visits the dog page', () => {
      cy.visit('/dogs')
      cy.contains('h2', 'Available Dogs')
      //are the number of dogs correct
      cy.get('[data-test="dog-name"]').should('have.length', 25)
      // click on the dog 
      cy.get('[data-test="dog-name"]').first().next().next().click()
      cy.contains('[data-test="dog-name3"]', dogs.name)
    }),

    //Check the page that lets you vote for yourfavorite dog.Store the resultw
    it('Visit the vote page', () => {
      cy.visit('/dogsvote')
      //are the number of dogs correct
      cy.get('[data-test="dog-vote-test"]').should('have.length', 25)
      // text clicking on the first button button
      cy.get('[data-test="dog-vote-test2"]').get('[data-test="dog-vote-button"]').first().click()
      cy.contains('[data-test="show-vote"]', dogs2.name)
      // test that the vote went to local storage
      cy.visit('/dogsvote')
      cy.contains('[data-test="current-vote-test"]', dogs2.name)
    })

  // Check the form to volunteer
  it('Visit the volunteer page', () => {
    // fill in eachl member of the form 
    cy.visit('/volunteer')
    cy.get('[data-test=vol-name-input]').type("Pat Ausman");
    cy.get('[data-test=vol-email-input]').type("abc@gmail.com");
    cy.get('[data-test=vol-phone-input]').type("987-876-7654");
    cy.get('[data-test=vol-day-checkbox1]').check();
    cy.get('[data-test=vol-day-checkbox2]').check();
    cy.get('[data-test=vol-day-checkbox3]').check();
    cy.get('[data-test=vol-day-checkbox4]').check();
    cy.get('[data-test=vol-day-checkbox5]').check();
    // submit the form
    cy.get('[data-test=add-vol-button]').click();
    // the showvolunteer pages shows with the info entered.
    cy.contains('[data-test="vol-name"]', "Pat Ausman");
    cy.contains('[data-test="vol-email"]', "abc@gmail.com");
    cy.contains('[data-test="vol-phone"]', "987-876-7654");
    cy.contains('[data-test="vol-days"]', "Friday");
    cy.contains('[data-test="vol-days"]', "Thursday");
    cy.contains('[data-test="vol-days"]', "Wednesday");
    cy.contains('[data-test="vol-days"]', "Tuesday");
    cy.contains('[data-test="vol-days"]', "Monday");

    //validation texts
    cy.visit('/volunteer');
    cy.get('[data-test=vol-name-input]').type("Pa");
    cy.contains('[data-test="vol-name-err"]', "Your name must be at least 5 characters long");
    cy.get('[data-test=vol-name-input]').type("{backspace}{backspace}");
    cy.contains('[data-test="vol-name-err2"]', "Your name is required please.");
    cy.get('[data-test=vol-email-input]').type("Pa");
    cy.contains('[data-test="vol-email-err2"]', "Please enter a valid email address.");
    cy.get('[data-test=vol-email-input]').type("{backspace}{backspace}");
    cy.contains('[data-test="vol-email-err"]', "Email address is required please.");
    cy.get('[data-test=vol-phone-input]').type("Pa");
    cy.contains('[data-test="vol-phone-err2"]', "Please enter a valid phone number");
    cy.get('[data-test=vol-phone-input]').type("{backspace}{backspace}");
    cy.contains('[data-test="vol-phone-err"]', "A phone number is required please.");
    cy.get('[data-test=vol-day-checkbox1]').check();
    cy.get('[data-test=vol-day-checkbox1]').uncheck();
    cy.contains('[data-test="vol-monam-err"]', "Please select at least one day to volunteer.");
    cy.contains('[data-test="vol-form-err"]', "Please correct the above errors");










  })

})
