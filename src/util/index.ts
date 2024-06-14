export const terminal = process.stdout;

export function getTerminalWidth() {
  return terminal.columns;
}

export function getTerminalHeight() {
  return terminal.rows;
}

export function getTextInMultipleLines(text: string, maxWidth: number) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    if ((currentLine + word).length < maxWidth) {
      currentLine += (currentLine ? ' ' : '') + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}