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

export interface WindowFooter {
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
   * @param {WindowFooter} options
   * @memberof Window
   * @returns {Window}
   */
  public withFooter(options: WindowFooter): Window {
    this.footer = options.items.join(' ');
    return this;
  }

  /**
   * @description Builds the window and returns the lines.
   * @memberof Window
   * @returns {string[]}
   */
  public build(): string[] {
    const horizontalBorder = dh.repeat(this.windowWidth - 2);
    const horizontalDivider = `${vr}${horizontalBorder}${vl}`;

    const topBorder = `${dr}${horizontalBorder}${dl}`;
    const title = `${dv}${sp}${this.title.padEnd(this.windowWidth - 4, sp)}${sp}${dv}`;
    const rows = new Array(this.windowHeight - 6).fill(`${dv}${sp.padEnd(this.windowWidth - 2, sp)}${dv}`);
    const footer = `${dv}${sp}${this.footer.padEnd(this.windowWidth - 4, sp)}${sp}${dv}`;
    const bottomBorder = `${ur}${horizontalBorder}${ul}`;

    return [
      topBorder,
      title,
      horizontalDivider,
      ...rows,
      horizontalDivider,
      footer,
      bottomBorder
    ];
  }
}