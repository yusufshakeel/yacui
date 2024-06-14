import { Row } from '../../../../src/components/Row';
import * as util from '../../../../src/util';

describe('Row', () => {
  beforeAll(() => {
    jest.spyOn(util, 'getTerminalWidth').mockReturnValue(30);
  });

  it('should return row', () => {
    const content = Row.getRow({ content: 'Row 1' });
    expect(content).toBe('║ Row 1                      ║');
    expect(content).toHaveLength(30);
  });

  it('should return empty row', () => {
    const content = Row.getEmptyRow();
    expect(content).toBe('║                            ║');
    expect(content).toHaveLength(30);
  });
});