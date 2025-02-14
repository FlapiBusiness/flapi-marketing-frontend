describe("Page d'inscription", () => {
  beforeEach(() => {
    // Accéder à la page d'inscription
    cy.visit('/register')
  })

  it('affiche le titre correctement', () => {
    // Vérifie que le titre est bien affiché
    cy.contains('Créer un compte').should('be.visible')
  })

  it('affiche le champ Username', () => {
    // Vérifie que le champ Username (id="name") est bien présent
    cy.get('input#name').should('exist')
  })

  it('affiche le champ Email', () => {
    // Vérifie que le champ Email (id="email") est bien présent
    cy.get('input#email').should('exist')
  })

  it('affiche le champ Mot de passe', () => {
    // Vérifie que le champ Mot de passe (id="password") est bien présent
    cy.get('input#password').should('exist')
  })
})
