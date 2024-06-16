import { ScreenBuffer } from '../../../../src/util/ScreenBuffer';

describe('ScreenBuffer', () => {
  let screenBuffer: ScreenBuffer;

  beforeEach(() => {
    screenBuffer = new ScreenBuffer(5, 4);
  });

  it('should return clean buffer', () => {
    screenBuffer.clearBuffer();
    expect(screenBuffer.getBuffer()).toStrictEqual([
      '     ',
      '     ',
      '     ',
      '     '
    ]);
  });

  it('should be able to set buffer', () => {
    const lines = [
      'aa',
      'bbb'
    ];
    screenBuffer.setBuffer(1, 1, lines);
    expect(screenBuffer.getBuffer()).toStrictEqual([
      '     ',
      ' aa  ',
      ' bbb ',
      '     '
    ]);
  });

  it('should truncate overflowing line', () => {
    const lines = [
      'aa',
      'bbb',
      'ccccccccc'
    ];
    screenBuffer.setBuffer(1, 1, lines);
    expect(screenBuffer.getBuffer()).toStrictEqual([
      '     ',
      ' aa  ',
      ' bbb ',
      ' cccc'
    ]);
  });
});