import {
  BOX_DRAWINGS_LIGHT_DOWN_AND_LEFT as dl,
  BOX_DRAWINGS_LIGHT_DOWN_AND_RIGHT as dr,
  BOX_DRAWINGS_LIGHT_UP_AND_LEFT as ul,
  BOX_DRAWINGS_LIGHT_UP_AND_RIGHT as ur,
  BOX_DRAWINGS_LIGHT_HORIZONTAL as lh,
  BOX_DRAWINGS_LIGHT_VERTICAL as lv,
  BOX_DRAWINGS_LIGHT_VERTICAL_AND_LEFT as lvl,
  BOX_DRAWINGS_LIGHT_VERTICAL_AND_RIGHT as lvr,
  SHADOW as sh,
  SPACE as sp
} from '../constants/characters';
import { getTextInMultipleLines } from '../util';

/**
 * @class Modal
 * @description This class is used to create Modal.
 */
export class Modal {
  private title = '';
  private bodyLines: string[] = [];
  private yesButton = '';
  private okayButton = '';
  private noButton = '';
  private closeButton = '';
  private leftBorder = `${lv}${sp}`;
  private rightBorder = `${sp}${lv}`;
  private shadowLength = sh.length;
  private leftBorderLength = this.leftBorder.length;
  private rightBorderLength = this.rightBorder.length;
  private modalInnerWidth = 30;
  private modalWidth = 
    this.leftBorderLength + this.modalInnerWidth + this.rightBorderLength + this.shadowLength;

  /**
   * @description Set the title of the modal.
   * @param {string} title
   * @memberof Modal
   * @returns {Modal}
   */
  public withTitle(title: string): Modal {
    this.title = title.substring(0, this.modalInnerWidth - 1).padEnd(this.modalInnerWidth + 1, sp);
    return this;
  }

  /**
   * @description Set the body text of the modal.
   * @param {string} body
   * @memberof Modal
   * @returns {Modal}
   */
  public withBody(body: string): Modal {
    this.bodyLines = getTextInMultipleLines(body, this.modalInnerWidth)
      .map(line => line.padEnd(this.modalInnerWidth + 1, sp));
    return this;
  }

  /**
   * @description Add the [Y]es button to the footer section of the modal.
   * @memberof Modal
   * @returns {Modal}
   */
  public withYesButton(): Modal {
    this.yesButton = '[Y]es ';
    return this;
  }

  /**
   * @description Add the [O]kay button to the footer section of the modal.
   * @memberof Modal
   * @returns {Modal}
   */
  public withOkayButton(): Modal {
    this.okayButton = '[O]kay ';
    return this;
  }

  /**
   * @description Add the [C]lose button to the footer section of the modal.
   * @memberof Modal
   * @returns {Modal}
   */
  public withCloseButton(): Modal {
    this.closeButton = '[C]lose ';
    return this;
  }

  /**
   * @description Add the [N]o button to the footer section of the modal.
   * @memberof Modal
   * @returns {Modal}
   */
  public withNoButton(): Modal {
    this.noButton = '[N]o ';
    return this;
  }

  /**
   * @description Builds the modal and returns the lines.
   * @memberof Modal
   * @returns {string[]}
   */
  public build(): string[] {
    const horizontalDivider = lh.repeat(this.modalWidth - 2);
    const horizontalShadow = `${sp}${sh.repeat(this.modalWidth)}`;
    const bodyDivider = `${lvr}${horizontalDivider}${lvl}${sh}`;
    const emptyRow = lv + sp.repeat(this.modalWidth - 2) + lv + sh;

    const topBorder = `${dr}${horizontalDivider}${dl}`;

    const titleRow = `${this.leftBorder}${this.title}${this.rightBorder}${sh}`;
    
    const body = this.bodyLines.map(line => {
      return `${this.leftBorder}${line}${this.rightBorder}${sh}`;
    });

    let footerItems = this.yesButton;
    footerItems += this.noButton;
    footerItems += this.okayButton;
    footerItems += this.closeButton;
    footerItems = footerItems.padEnd(this.modalInnerWidth + 1, sp);

    const footer = `${lv}${sp}${footerItems}${sp}${lv}${sh}`;
    
    const bottomBorder = `${ur}${horizontalDivider}${ul}${sh}`;

    return [
      topBorder,
      titleRow,
      bodyDivider,
      ...body,
      emptyRow,
      bodyDivider,
      footer,
      bottomBorder,
      horizontalShadow
    ];
  }
}