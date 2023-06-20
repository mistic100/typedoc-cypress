import { JQE } from "../utils";

declare global {
    namespace Sglk {
        interface Disablable {
            isDisabled();
        }
    }

    namespace Cypress {
        interface Chainable {
            /**
             * Get one or more DOM elements by [data-test] attribute.
             */
            byTest(id: string): Chainable<JQE> & Sglk.Disablable;
        }
    }
}

Cypress.Commands.addQuery('byTest', function (id: string) {
    return cy.now('get', `[data-test="${id}"]`) as any;
});
