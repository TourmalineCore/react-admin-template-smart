describe('Test name is loaded correctly', () => {
  let id = 5;
  let correctURL = 'https://jsonplaceholder.typicode.com/users';

  it('receives correct response status', () => {
    cy.request({
      url: `${correctURL}/${id}`,
    }).then((resp) => {
      expect(resp.status).to.eq(200)
    })
  })

  it('loads name', () => {
    cy.intercept('GET', `${correctURL}/${id}`, {
      fixture: 'example.json'
      
    }).as('request')
    cy.visit(`http://localhost:5173/?id=${id}`)
    cy.wait('@request')
    cy.wait(5000)
    cy.get('.table .table-row:first-child .column2').should('have.text', 'Leanne Graham')
  })
})

describe('Test error boundary is shown when request for name fails', () => {
  let id = 2; 
  let incorrectURL = `https://jsonplaceholder.typicode.com/users`;

  it('shows error boundary for name section', () => {
    cy.visit(`http://localhost:5173/?id=${id}`)

    cy.intercept('GET',`${incorrectURL}/${id}`, {
      statusCode: 404,
      body: '404 Not Found!',
    }).as('request')

    cy.wait('@request')
    cy.wait(10000)
    cy.get('.error-component')
  })
})
