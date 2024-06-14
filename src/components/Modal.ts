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

  public withTitle(title: string): Modal {
    this.title = title.substring(0, this.modalInnerWidth - 1).padEnd(this.modalInnerWidth + 1, sp);
    return this;
  }

  public withBody(body: string): Modal {
    this.bodyLines = getTextInMultipleLines(body, this.modalInnerWidth)
      .map(line => line.padEnd(this.modalInnerWidth + 1, sp));
    return this;
  }

  public withYesButton(): Modal {
    this.yesButton = '[Y]es ';
    return this;
  }

  public withOkayButton(): Modal {
    this.okayButton = '[O]kay ';
    return this;
  }

  public withCloseButton(): Modal {
    this.closeButton = '[C]lose ';
    return this;
  }

  public withNoButton(): Modal {
    this.noButton = '[N]o ';
    return this;
  }

  public build(): string {
    const horizontalDivider = lh.repeat(this.modalWidth - 2);
    const horizontalShadow = `${sp}${sh.repeat(this.modalWidth)}`;

    const topBorder = `${dr}${horizontalDivider}${dl}\n`;

    const titleRow = `${this.leftBorder}${this.title}${this.rightBorder}${sh}\n` +
      `${lvr}${horizontalDivider}${lvl}${sh}\n`;
    
    const body = this.bodyLines.map(line => {
      return `${this.leftBorder}${line}${this.rightBorder}${sh}`;
    }).join('\n');

    const emptyRow = '\n' + lv + sp.repeat(this.modalWidth - 2) + lv + sh + '\n';

    let footerItems = this.yesButton;
    footerItems += this.noButton;
    footerItems += this.okayButton;
    footerItems += this.closeButton;
    footerItems = footerItems.padEnd(this.modalInnerWidth + 1, sp);

    let footer = `${lvr}${horizontalDivider}${lvl}${sh}\n`;
    footer += `${lv}${sp}${footerItems}${sp}${lv}${sh}\n`;
    
    const bottomBorder = `${ur}${horizontalDivider}${ul}${sh}\n`;

    return `${topBorder}${titleRow}${body}${emptyRow}${footer}${bottomBorder}${horizontalShadow}`;
  }
}

export default Modal;