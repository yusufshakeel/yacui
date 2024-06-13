import TitleBar from '../../../../src/components/TitleBar';
import * as util from '../../../../src/util';

describe('TitleBar', () => {
  let titleBar: TitleBar;

  beforeAll(() => {
    titleBar = new TitleBar();
    jest.spyOn(util, 'getTerminalWidth').mockReturnValue(30);
  });

  it('should return title bar', () => {
    const content = titleBar.getTitleBar({ title: 'My Title' });
    expect(content).toBe('║ My Title                   ║');
    expect(content).toHaveLength(30);
  });
});