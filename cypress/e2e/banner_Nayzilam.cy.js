import 'cypress-image-snapshot/command';

describe('Validação visual do banner Nayzilam', () => {
  const url = 'https://www.google.com/doubleclick/studio/externalpreview/#/a7BqYkkCT4aDJYOcu8jkQg';

  beforeEach(() => {
    cy.visit(url);
    cy.viewport(2560, 1508);
  });

  // Função para capturar screenshot do iframe inteiro e comparar
function compareIframe(name) {
  cy.get('iframe', { timeout: 20000 })
    .first() // garante que pega apenas o primeiro iframe encontrado
    .should('be.visible')
    .then($iframe => {
      const iframeRect = $iframe[0].getBoundingClientRect();

      cy.screenshot(name, {
        clip: {
          x: iframeRect.x,
          y: iframeRect.y,
          width: iframeRect.width,
          height: iframeRect.height,
        },
      });

      cy.wrap($iframe).matchImageSnapshot(name, {
        failureThreshold: 0.01,
        failureThresholdType: 'percent',
      });
    });
}

  it('Valida frame 1', () => {
    cy.wait(12000); // espera o frame 1 aparecer
    compareIframe('frame-1');
  });

  it('Valida frame 2', () => {
    cy.wait(12500);
    compareIframe('frame-2');
  });

  it('Valida frame 3', () => {
    cy.wait(13000);
    compareIframe('frame-3');
  });

  it('Valida frame 4', () => {
    cy.wait(13500);
    compareIframe('frame-4');
  });
});