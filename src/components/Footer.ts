import { 
  BOX_DRAWINGS_DOUBLE_VERTICAL as dv, 
  SPACE as sp
} from '../constants/characters';
import { getTerminalWidth } from '../util';

type footerParamsType = {
    items: string[]
};

export default class Footer {
  public static getFooter(params: footerParamsType): string {
    const terminalWidth = getTerminalWidth();
    const footerItems = params.items.join(' ');
    const footer = footerItems.padEnd(terminalWidth - 4, sp);
    return `${dv}${sp}${footer}${sp}${dv}`;
  }
}