import Footer from '../../../../src/components/Footer';
import * as util from '../../../../src/util';

describe('Footer', () => {
  beforeAll(() => {
    jest.spyOn(util, 'getTerminalWidth').mockReturnValue(30);
  });

  it('should return footer', () => {
    const content = Footer.getFooter({ items: ['[Q]uit', '[M]enu'] });
    expect(content).toBe('║ [Q]uit [M]enu              ║');
    expect(content).toHaveLength(30);
  });
});