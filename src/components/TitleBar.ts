import { 
  BOX_DRAWINGS_DOUBLE_VERTICAL as dv, 
  SPACE as sp
} from '../constants/characters';
import { getTerminalWidth } from '../util';

type titleBarParamsType = {
    title: string
};

/**
 * @class TitleBar
 * @description This class is used to create the title bar.
 */
export class TitleBar {
  /**
   * @description This will return the title bar.
   * @param {titleBarParamsType} params
   * @memberof TitleBar
   * @returns {string}
   */
  public static getTitleBar(params: titleBarParamsType): string {
    const terminalWidth = getTerminalWidth();
    const title = params.title.substring(0, 30).padEnd(terminalWidth - 4, sp);
    return `${dv}${sp}${title}${sp}${dv}`;
  }
}