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
      .toStrictEqual(
        '╔════════════════════════════════════════════════╗\n'+
        '║ My title                                       ║\n'+
        '╠════════════════════════════════════════════════╣\n'+
        '║                                                ║\n'+
        '║                                                ║\n'+
        '║                                                ║\n'+
        '║                                                ║\n'+
        '╠════════════════════════════════════════════════╣\n'+
        '║ [F10] Quit                                     ║\n'+
        '╚════════════════════════════════════════════════╝'
      );
  });
});