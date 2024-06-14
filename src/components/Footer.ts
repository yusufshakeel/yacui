import { 
  BOX_DRAWINGS_DOUBLE_VERTICAL as dv, 
  SPACE as sp
} from '../constants/characters';
import { getTerminalWidth } from '../util';

export type footerProps = {
    items: string[]
};

export default class Footer {
  public static getFooter(props: footerProps): string {
    const terminalWidth = getTerminalWidth();
    const footerItems = props.items.join(' ');
    const footer = footerItems.padEnd(terminalWidth - 4, sp);
    return `${dv}${sp}${footer}${sp}${dv}`;
  }
}