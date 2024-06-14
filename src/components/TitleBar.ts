import { 
  BOX_DRAWINGS_DOUBLE_VERTICAL as dv, 
  SPACE as sp
} from '../constants/characters';
import { getTerminalWidth } from '../util';

export type titleBarProps = {
    title: string
};

export default class TitleBar {
  public static getTitleBar(props: titleBarProps): string {
    const terminalWidth = getTerminalWidth();
    const title = props.title.substring(0, 30).padEnd(terminalWidth - 4, sp);
    return `${dv}${sp}${title}${sp}${dv}`;
  }
}