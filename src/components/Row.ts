import { 
  BOX_DRAWINGS_DOUBLE_VERTICAL as dv, 
  SPACE as sp
} from '../constants/characters';
import { getTerminalWidth } from '../util';

type rowParamsType = {
  content: string
};

/**
 * @class Row
 * @description This class is used to create rows.
 */
export class Row {
  /**
   * @description This will return a row with the passed content.
   * @param {rowParamsType} params
   * @memberof Row
   * @returns {string}
   */
  public static getRow(params: rowParamsType): string {
    const terminalWidth = getTerminalWidth();
    const { content } = params;
    const rowContent = content.padEnd(terminalWidth - 4, sp);
    return `${dv}${sp}${rowContent}${sp}${dv}`;
  }

  /**
   * @description This will return an empty row.
   * @memberof Row
   * @returns {string}
   */
  public static getEmptyRow(): string {
    const terminalWidth = getTerminalWidth();
    const spacePadding = sp.repeat(terminalWidth - 4);
    return `${dv}${sp}${spacePadding}${sp}${dv}`;
  }
}