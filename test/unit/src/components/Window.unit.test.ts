import Window from '../../../../src/components/Window';
import * as util from '../../../../src/util';

describe('Window', () => {
  let windowInstance: Window;

  beforeAll(() => {
    windowInstance = new Window();
    jest.spyOn(util, 'getTerminalWidth').mockReturnValue(10);
  });

  it('should return top border', () => {
    expect(windowInstance.getTopBorder()).toBe('╔════════╗');
  });

  it('should return bottom border', () => {
    expect(windowInstance.getBottomBorder()).toBe('╚════════╝');
  });

  it('should return horizontal divider', () => {
    expect(windowInstance.getHorizontalDivider()).toBe('╠════════╣');
  });
});