import { 
  BOX_DRAWINGS_DOUBLE_VERTICAL as dv, 
  SPACE as sp
} from '../constants/characters';
import { getTerminalWidth } from '../util';

type footerParamsType = {
    items: string[]
};

/**
 * @class Footer
 * @description This class is used to create the footer.
 */
export class Footer {
  /**
   * @description This will return the footer.
   * @param {footerParamsType} params
   * @memberof Footer
   * @returns {string}
   */
  public static getFooter(params: footerParamsType): string {
    const terminalWidth = getTerminalWidth();
    const footerItems = params.items.join(' ');
    const footer = footerItems.padEnd(terminalWidth - 4, sp);
    return `${dv}${sp}${footer}${sp}${dv}`;
  }
}