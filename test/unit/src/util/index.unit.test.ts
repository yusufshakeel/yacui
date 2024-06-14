import { getTextInMultipleLines } from '../../../../src/util';

describe('Util', () => {
  describe('getTextInMultipleLines', () => {
    const width = 20;
    it('should return in single line when text is less than width', () => {
      const text = 'hello, world!';
      const lines  = getTextInMultipleLines(text, width);
      expect(lines).toStrictEqual(['hello, world!']);
      lines.forEach(line => {
        expect(line.length).toBeLessThanOrEqual(width);
      });
    });

    it('should return in multi lines when text is more than width', () => {
      const text = 'Good morning, good evening and good night.';
      const lines  = getTextInMultipleLines(text, width);
      expect(lines).toStrictEqual(['Good morning, good', 'evening and good', 'night.']);
      lines.forEach(line => {
        expect(line.length).toBeLessThanOrEqual(width);
      });
    });
  });
});