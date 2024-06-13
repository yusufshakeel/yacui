import Window from '../../../../src/components/Window';
import * as util from '../../../../src/util';

describe('Window', () => {
  let windowInstance: Window;

  beforeAll(() => {
    windowInstance = new Window();
    jest.spyOn(util, 'getTerminalWidth').mockReturnValue(10);
  });

  it('should return top border', () => {
    const content = windowInstance.getTopBorder();
    expect(content).toBe('╔════════╗');
    expect(content).toHaveLength(10);
  });

  it('should return bottom border', () => {
    const content = windowInstance.getBottomBorder();
    expect(content).toBe('╚════════╝');
    expect(content).toHaveLength(10);
  });

  it('should return horizontal divider', () => {
    const content = windowInstance.getHorizontalDivider();
    expect(content).toBe('╠════════╣');
    expect(content).toHaveLength(10);
  });
});