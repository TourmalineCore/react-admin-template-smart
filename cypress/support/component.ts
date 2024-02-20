import './commands';

import { mount } from 'cypress/react18';
import '../../src/index.scss';

// @ts-ignore
window.__ENV__ = {
  ENV_KEY: `Cypress`,
  API_ROOT: `http://test.com/toDos-api`,
};

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add(`mount`, mount);
