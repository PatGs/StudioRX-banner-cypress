describe('Validação visual do banner Nayzilam', () => {
  const url = 'https://www.google.com/doubleclick/studio/externalpreview/#/a7BqYkkCT4aDJYOcu8jkQg';

  beforeEach(() => {
    cy.visit(url);
    cy.viewport(2560, 1508);
    
  });

  it('Valida frame 1', () => {
    cy.wait(11000); // esperar o frame aparecer
    cy.compareSnapshot('frame-1');
  });

  it('Valida frame 2', () => {
    cy.wait(13000); // tempo até o frame 2
    cy.compareSnapshot('frame-2');
  });

  it('Valida frame 3', () => {
    cy.wait(13000);
    cy.compareSnapshot('frame-3');
  });

  it('Valida frame 4', () => {
    cy.wait(14000);
    cy.compareSnapshot('frame-4');
  });
});