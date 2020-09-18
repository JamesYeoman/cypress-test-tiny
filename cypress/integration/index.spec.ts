const url = 'https://google.com';
const iType = '[type="text"]';
const iTitle = '[title="Search"]';
const iName = '[name="q"]';

describe('Google', () => {
  it('has a search box', () => {
    cy.visit(url);
    cy.get(`input${iType}${iTitle}${iName}`).should('be.visible');
  });
});