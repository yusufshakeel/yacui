import { 
  BOX_DRAWINGS_DOUBLE_VERTICAL as dv, 
  SPACE as sp
} from '../constants/characters';
import { getTerminalWidth } from '../util';

export type rowProps = {
  content: string
};

export default class Row {
  public static getRow(props: rowProps): string {
    const terminalWidth = getTerminalWidth();
    const leftBorder = `${dv}${sp}`;
    const rightBorder = `${sp}${dv}`;
    const { content } = props;
    const contentLength = content.length;
    const leftBorderLength = leftBorder.length;
    const rightBorderLength = rightBorder.length;
    const rightSpacePadding = 
      sp.repeat(terminalWidth - contentLength - leftBorderLength - rightBorderLength);
    const rowContent = `${content}${rightSpacePadding}`;
    return `${leftBorder}${rowContent}${rightBorder}`;
  }

  public static getEmptyRow(): string {
    const terminalWidth = getTerminalWidth();
    const leftBorder = `${dv}${sp}`;
    const rightBorder = `${sp}${dv}`;
    const leftBorderLength = leftBorder.length;
    const rightBorderLength = rightBorder.length;
    const spacePadding = sp.repeat(terminalWidth - leftBorderLength - rightBorderLength);
    return `${leftBorder}${spacePadding}${rightBorder}`;
  }
}