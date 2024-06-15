import { Window } from '../../../../src/components/Window';

describe('Window', () => {
  it('should return window', () => {
    const content = new Window()
      .withTitle('My title')
      .withFooter({ items: ['[F10] Quit'] })
      .withWidth(50)
      .withHeight(10)
      .build();
    expect(content)
      .toStrictEqual([
        '╔════════════════════════════════════════════════╗',
        '║ My title                                       ║',
        '╠════════════════════════════════════════════════╣',
        '║                                                ║',
        '║                                                ║',
        '║                                                ║',
        '║                                                ║',
        '╠════════════════════════════════════════════════╣',
        '║ [F10] Quit                                     ║',
        '╚════════════════════════════════════════════════╝'
      ]);
  });
});