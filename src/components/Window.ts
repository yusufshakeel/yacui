import { 
  BOX_DRAWINGS_DOUBLE_DOWN_AND_LEFT as dl,
  BOX_DRAWINGS_DOUBLE_DOWN_AND_RIGHT as dr,
  BOX_DRAWINGS_DOUBLE_UP_AND_LEFT as ul,
  BOX_DRAWINGS_DOUBLE_UP_AND_RIGHT as ur,
  BOX_DRAWINGS_DOUBLE_HORIZONTAL as dh,
  BOX_DRAWINGS_DOUBLE_VERTICAL_AND_LEFT as vl,
  BOX_DRAWINGS_DOUBLE_VERTICAL_AND_RIGHT as vr
} from '../constants/characters';
import { getTerminalWidth } from '../util';

function getHorizontalBorder(): string {
  const terminalWidth = getTerminalWidth();
  return dh.repeat(terminalWidth - 2);
}

/**
 * @class Window
 * @description This class is used to create different elements of the window.
 */
export class Window {
  /**
   * @description This will return the top border.
   * @memberof Window
   * @returns {string}
   */
  public static getTopBorder(): string {
    const horizontalBorder = getHorizontalBorder();
    return `${dr}${horizontalBorder}${dl}`;
  }

  /**
   * @description This will return the horizontal divider.
   * @memberof Window
   * @returns {string}
   */
  public static getHorizontalDivider(): string {
    const horizontalBorder = getHorizontalBorder();
    return `${vr}${horizontalBorder}${vl}`;
  }

  /**
   * @description This will return the bottom border.
   * @memberof Window
   * @returns {string}
   */
  public static getBottomBorder(): string {
    const horizontalBorder = getHorizontalBorder();
    return `${ur}${horizontalBorder}${ul}`;  
  }
}