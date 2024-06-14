import { 
  BOX_DRAWINGS_DOUBLE_DOWN_AND_LEFT as dl,
  BOX_DRAWINGS_DOUBLE_DOWN_AND_RIGHT as dr,
  BOX_DRAWINGS_DOUBLE_UP_AND_LEFT as ul,
  BOX_DRAWINGS_DOUBLE_UP_AND_RIGHT as ur,
  BOX_DRAWINGS_DOUBLE_HORIZONTAL as dh,
  BOX_DRAWINGS_DOUBLE_VERTICAL as dv,
  BOX_DRAWINGS_DOUBLE_VERTICAL_AND_LEFT as vl,
  BOX_DRAWINGS_DOUBLE_VERTICAL_AND_RIGHT as vr,
  SPACE as sp
} from '../constants/characters';
import { getTerminalHeight, getTerminalWidth } from '../util';

type footerParamsType = {
  items: string[]
};

/**
 * @class Window
 * @description This class is used to create different elements of the window.
 */
export class Window {
  private windowWidth = getTerminalWidth();
  private windowHeight = getTerminalHeight();
  private title = '';
  private footer = '';

  /**
   * @description Set the width of the window.
   * @default number - Terminal width
   * @param {number} width
   * @memberof Window
   * @returns {Window}
   */
  public withWidth(width: number): Window {
    this.windowWidth = width;
    return this;
  }

  /**
   * @description Set the height of the window.
   * @default number - Terminal height
   * @param {number} height
   * @memberof Window
   * @returns {Window}
   */
  public withHeight(height: number): Window {
    this.windowHeight = height;
    return this;
  }

  /**
   * @description Set the title of the window.
   * @param {string} title
   * @memberof Window
   * @returns {Window}
   */
  public withTitle(title: string): Window {
    this.title = title;
    return this;
  }

  /**
   * @description Set the footer of the window.
   * @param {footerParamsType} params
   * @memberof Window
   * @returns {Window}
   */
  public withFooter(params: footerParamsType): Window {
    this.footer = params.items.join(' ');
    return this;
  }

  /**
   * @description Builds the window and returns the string representation.
   * @memberof Window
   * @returns {string}
   */
  public build(): string {
    const horizontalBorder = dh.repeat(this.windowWidth - 2);
    const horizontalDivider = `${vr}${horizontalBorder}${vl}\n`;

    const topBorder = `${dr}${horizontalBorder}${dl}\n`;
    const title = `${dv}${sp}${this.title.padEnd(this.windowWidth - 4, sp)}${sp}${dv}\n`;
    const rows = new Array(this.windowHeight - 6).fill(`${dv}${sp.padEnd(this.windowWidth - 2, sp)}${dv}\n`).join('');
    const footer = `${dv}${sp}${this.footer.padEnd(this.windowWidth - 4, sp)}${sp}${dv}\n`;
    const bottomBorder = `${ur}${horizontalBorder}${ul}`;

    return `${topBorder}${title}${horizontalDivider}${rows}${horizontalDivider}${footer}${bottomBorder}`;
  }
}