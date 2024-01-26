// -- This is a child command --s
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

import { login } from './commands/login';

// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// -- This is a parent command --

Cypress.Commands.add('login', login);

declare global {
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<void>
    }
  }
}

export {};
