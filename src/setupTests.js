// @flow
import diff from 'jest-diff';

// Custom Jest Expectations
expect.extend({
  toInclude(received: string, expected: string) {
    const pass = received.includes(expected);

    const message = pass
        ? () =>
            this.utils.matcherHint('.not.toBe') +
            '\n\n' +
            `Expected value to not include (using str.includes):\n` +
            `  ${this.utils.printExpected(expected)}\n` +
            `Received:\n` +
            `  ${this.utils.printReceived(received)}`
        : () => {
          const diffString = diff(expected, received, {
            expand: this.expand,
          });
          return (
              this.utils.matcherHint('.toInclude') +
              '\n\n' +
              `Expected value to include (using str.includes):\n` +
              `  ${this.utils.printExpected(expected)}\n` +
              `Received:\n` +
              `  ${this.utils.printReceived(received)}` +
              (diffString ? `\nDifference:\n${diffString}` : '')
          );
        };
    return {actual: received, message, pass};
  }
});
