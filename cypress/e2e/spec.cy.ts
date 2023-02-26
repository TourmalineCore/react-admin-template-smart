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
    cy.visit(`http://127.0.0.1:5173/?id=${id}`)
    cy.wait('@request')
    cy.wait(5000)
    cy.get('.table .table-row:first-child .column2').should('have.text', 'Leanne Graham')
  })

  it.skip('get error', () => {
    cy.visit(`http://127.0.0.1:5173/?id=${id}`)
  })
})

// describe('Test error boundary is shown when request for name fails', () => {
//   let id = 2000000; 
//   let incorrectURL = 'https://jsonplaceholder.typicode.com/users';

//   it('shows error boundary for name section', () => {
//     cy.visit(`http://127.0.0.1:5173/?id=${id}`)

//     cy.request({
//       url: `${incorrectURL}/${id}`,
//     }).then((resp) => {
//       expect(resp.status).to.eq(404)
//     })

//     cy.get('.error-component')
//   })
// })
