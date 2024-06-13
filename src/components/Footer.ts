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
    const leftBorder = `${dv}${sp}`;
    const rightBorder = `${sp}${dv}`;
    const footerItems = props.items.join(' ');
    const footerLength = footerItems.length;
    const leftBorderLength = leftBorder.length;
    const rightBorderLength = rightBorder.length;
    const rightSpacePadding = 
      sp.repeat(terminalWidth - footerLength - leftBorderLength - rightBorderLength);
    const content = `${footerItems}${rightSpacePadding}`;
    return `${leftBorder}${content}${rightBorder}`;
  }
}