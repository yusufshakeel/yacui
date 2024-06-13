import { 
  BOX_DRAWINGS_DOUBLE_VERTICAL as dv, 
  SPACE as sp
} from '../constants/characters';
import { getTerminalWidth } from '../util';

export type titleBarProps = {
    title: string
};

export default class TitleBar {
  public getTitleBar(props: titleBarProps) {
    const terminalWidth = getTerminalWidth();
    const leftBorder = `${dv}${sp}`;
    const rightBorder = `${sp}${dv}`;
    const titleLength = props.title.length;
    const leftBorderLength = leftBorder.length;
    const rightBorderLength = rightBorder.length;
    const rightSpacePadding = 
      sp.repeat(terminalWidth - titleLength - leftBorderLength - rightBorderLength);
    const content = `${props.title}${rightSpacePadding}`;
    return `${leftBorder}${content}${rightBorder}`;
  }
}