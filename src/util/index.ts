export const terminal = process.stdout;

export function getTerminalWidth() {
  return terminal.columns;
}

export function getTerminalHeight() {
  return terminal.rows;
}