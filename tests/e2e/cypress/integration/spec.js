describe('Works properly', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should show the editor', () => {
    cy.get('[data-test=EditorContainer]').should('be.visible');
  });
});
