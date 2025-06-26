let petData = {}
let createdPetId = null

Given('I have a valid pet data', () => {
  petData = {
    id: Math.floor(Math.random() * 1000000),
    category: {
      id: 1,
      name: "Dogs"
    },
    name: "Buddy",
    photoUrls: [
      "https://example.com/buddy.jpg"
    ],
    tags: [
      {
        id: 1,
        name: "friendly"
      }
    ],
    status: "available"
  }
})

Given('I have created a pet', () => {
  // Create a pet and store its ID
  cy.request({
    method: 'POST',
    url: `${Cypress.env('apiBaseUrl')}/pet`,
    body: petData,
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    expect(response.status).to.eq(200)
    createdPetId = response.body.id
  })
})

// When steps
When('I create a new pet with the provided data', () => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('apiBaseUrl')}/pet`,
    body: petData,
    headers: {
      'Content-Type': 'application/json'
    }
  }).as('createPet')
})

When('I retrieve the pet by its ID', () => {
  cy.request({
    method: 'GET',
    url: `${Cypress.env('apiBaseUrl')}/pet/${createdPetId}`,
    failOnStatusCode: false
  }).as('getPet')
})

When('I update the pet with new information', () => {
  const updatedPetData = {
    ...petData,
    name: "Buddy Updated",
    status: "sold"
  }
  
  cy.request({
    method: 'PUT',
    url: `${Cypress.env('apiBaseUrl')}/pet`,
    body: updatedPetData,
    headers: {
      'Content-Type': 'application/json'
    }
  }).as('updatePet')
})

When('I delete the pet by its ID', () => {
  cy.request({
    method: 'DELETE',
    url: `${Cypress.env('apiBaseUrl')}/pet/${createdPetId}`,
    failOnStatusCode: false
  }).as('deletePet')
})

When('I try to retrieve a pet with invalid ID {string}', (invalidId) => {
  cy.request({
    method: 'GET',
    url: `${Cypress.env('apiBaseUrl')}/pet/${invalidId}`,
    failOnStatusCode: false
  }).as('getInvalidPet')
})

When('I try to delete a pet with invalid ID {string}', (invalidId) => {
  cy.request({
    method: 'DELETE',
    url: `${Cypress.env('apiBaseUrl')}/pet/${invalidId}`,
    failOnStatusCode: false
  }).as('deleteInvalidPet')
})

// Then steps
Then('the pet should be created successfully', () => {
  cy.get('@createPet').then((response) => {
    expect(response.status).to.eq(200)
    createdPetId = response.body.id
  })
})

Then('the response should contain the pet details', () => {
  cy.get('@createPet').then((response) => {
    expect(response.body).to.have.property('id')
    expect(response.body).to.have.property('name', petData.name)
    expect(response.body).to.have.property('status', petData.status)
    expect(response.body).to.have.property('category')
    expect(response.body).to.have.property('photoUrls')
    expect(response.body).to.have.property('tags')
  })
})

Then('the pet should have a valid ID', () => {
  cy.get('@createPet').then((response) => {
    expect(response.body.id).to.be.a('number')
    expect(response.body.id).to.be.greaterThan(0)
  })
})

Then('the pet should be retrieved successfully', () => {
  cy.get('@getPet').then((response) => {
    expect(response.status).to.eq(200)
  })
})

Then('the response should match the created pet data', () => {
  cy.get('@getPet').then((response) => {
    expect(response.body.id).to.eq(createdPetId)
    expect(response.body.name).to.eq(petData.name)
    expect(response.body.status).to.eq(petData.status)
  })
})

Then('the pet should be updated successfully', () => {
  cy.get('@updatePet').then((response) => {
    expect(response.status).to.eq(200)
  })
})

Then('the response should contain the updated pet details', () => {
  cy.get('@updatePet').then((response) => {
    expect(response.body.name).to.eq("Buddy Updated")
    expect(response.body.status).to.eq("sold")
  })
})

Then('the pet should be deleted successfully', () => {
  cy.get('@deletePet').then((response) => {
    expect(response.status).to.eq(200)
  })
})

Then('the pet should no longer exist when retrieved', () => {
  cy.request({
    method: 'GET',
    url: `${Cypress.env('apiBaseUrl')}/pet/${createdPetId}`,
    failOnStatusCode: false
  }).then((response) => {
    expect(response.status).to.eq(404)
  })
})

Then('I should receive a 404 error', () => {
  cy.get('@getInvalidPet').then((response) => {
    expect(response.status).to.eq(404)
  })
})

Then('the error message should indicate pet not found', () => {
  cy.get('@getInvalidPet').then((response) => {
    expect(response.body.message).to.include('Pet not found')
  })
}) 