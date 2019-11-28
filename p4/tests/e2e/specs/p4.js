// https://docs.cypress.io/api/introduction/api.html

describe('Dogs test', () => {
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
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h2', 'Featured Dog of the Week')
    // does it find the dog name
    cy.contains('[data-test="dog-name2"]', dogs.name)
    // there should only be one dog
    cy.get('[data-test="dog-name2"]').should('have.length', 1)

  }),
    it('Visits the dog page', () => {
      cy.visit('/dogs')
      cy.contains('h2', 'Available Dogs')
      //are the number of dogs correct
      cy.get('[data-test="dog-name"]').should('have.length', 25)
      // click on the dog 
      cy.get('[data-test="dog-name"]').first().next().next().click()
      cy.contains('[data-test="dog-name3"]', dogs.name)
    }),

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

})
