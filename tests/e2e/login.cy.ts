describe('Page de connexion', () => {
  beforeEach(() => {
    // Accéder à la page de connexion
    cy.visit('/login')
  })

  it('affiche le titre correctement', () => {
    // Vérifie que le titre est bien présent
    cy.contains('Se connecter').should('be.visible')
  })

  it('affiche les champs email et mot de passe', () => {
    // Vérifie que le champ email est présent
    cy.get('input[type="email"]').should('exist')

    // Vérifie que le champ mot de passe est présent
    cy.get('input[type="password"]').should('exist')
  })

  it('affiche le bouton de connexion', () => {
    // Vérifie que le bouton de soumission est présent
    cy.get('button[type="submit"]').should('exist')
  })

  it("contient un lien vers la page d'inscription", () => {
    // Vérifie que le lien vers la page d'inscription est présent et correct
    cy.get('a').should('have.attr', 'href', '/register')
  })
})
