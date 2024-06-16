import { SPACE as sp } from '../constants/characters';

/**
 * @class ScreenBuffer
 * @description This class holds the content of the screen.
 */
export class ScreenBuffer {
  private buffer: string[] = [];
  private screenWidth: number;
  private screenHeight: number;

  constructor(screenWidth: number, screenHeight: number) {
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.clearBuffer();
  }

  /**
   * @description This will set the screen buffer.
   * @memberof ScreenBuffer
   * @param {number} startX - The starting x co-ordinate of the screen.
   * @param {number} startY - The starting y co-ordinate of the screen.
   * @param {string[]} lines - The lines to set in the screen buffer.
   */
  public setBuffer(startX: number, startY: number, lines: string[]): void {
    lines.forEach((line, index) => {
      const prefix = this.buffer[startY + index].substring(0, startX);
      const content = line.substring(0, this.screenWidth - prefix.length);
      const suffix = 
        this.buffer[startY + index].substring(startX + content.length, this.screenWidth);
      this.buffer[startY + index] = `${prefix}${content}${suffix}`;
    });
  }

  /**
   * @description This will fetch the screen buffer.
   * @memberof ScreenBuffer
   * @returns {string[]}
   */
  public getBuffer(): string[] {
    return this.buffer;
  }

  /**
   * @description This will clear the screen buffer.
   * @memberof ScreenBuffer
   */
  public clearBuffer(): void {
    this.buffer = new Array(this.screenHeight)
      .fill(sp)
      .map(() => new Array(this.screenWidth).fill(sp).join(''));
  }
}