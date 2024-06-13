import Window from '../../../../src/components/Window';
import * as util from '../../../../src/util';

describe('Window', () => {
  beforeAll(() => {
    jest.spyOn(util, 'getTerminalWidth').mockReturnValue(10);
  });

  it('should return top border', () => {
    const content = Window.getTopBorder();
    expect(content).toBe('╔════════╗');
    expect(content).toHaveLength(10);
  });

  it('should return bottom border', () => {
    const content = Window.getBottomBorder();
    expect(content).toBe('╚════════╝');
    expect(content).toHaveLength(10);
  });

  it('should return horizontal divider', () => {
    const content = Window.getHorizontalDivider();
    expect(content).toBe('╠════════╣');
    expect(content).toHaveLength(10);
  });
});