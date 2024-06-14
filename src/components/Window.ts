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

export class Window {
  public static getTopBorder(): string {
    const horizontalBorder = getHorizontalBorder();
    return `${dr}${horizontalBorder}${dl}`;
  }

  public static getHorizontalDivider(): string {
    const horizontalBorder = getHorizontalBorder();
    return `${vr}${horizontalBorder}${vl}`;
  }

  public static getBottomBorder(): string {
    const horizontalBorder = getHorizontalBorder();
    return `${ur}${horizontalBorder}${ul}`;  
  }
}