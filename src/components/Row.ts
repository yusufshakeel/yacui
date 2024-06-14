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
    const { content } = props;
    const rowContent = content.padEnd(terminalWidth - 4, sp);
    return `${dv}${sp}${rowContent}${sp}${dv}`;
  }

  public static getEmptyRow(): string {
    const terminalWidth = getTerminalWidth();
    const spacePadding = sp.repeat(terminalWidth - 4);
    return `${dv}${sp}${spacePadding}${sp}${dv}`;
  }
}