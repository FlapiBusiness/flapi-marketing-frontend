describe("Page d'accueil", () => {
  it("Affiche correctement la page d'accueil et le lien de connexion fonctionne", () => {
    // Accéder à la page d'accueil
    cy.visit('/')

    // Vérifier que le titre principal est affiché
    cy.contains("Bienvenue sur l'application Flapi CMS").should('be.visible')

    // Vérifier que le texte secondaire est affiché
    cy.contains("Ceci est la page d'accueil").should('be.visible')

    // Vérifier que le bouton vers /login existe et fonctionne
    cy.get('a').contains('Aller à la page de connexion').should('have.attr', 'href', '/login').click()

    // Vérifier que nous sommes bien redirigés vers /login
    cy.url().should('include', '/login')
  })
})
