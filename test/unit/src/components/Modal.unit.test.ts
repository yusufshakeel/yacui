import { Modal } from '../../../../src/components/Modal';

describe('Modal', () => {
  it('should be able to render modal', () => {
    const modal = new Modal()
      .withTitle('My title')
      .withBody('This is a sample body for testing and it is occupying multiple lines.')
      .withYesButton()
      .withNoButton()
      .withOkayButton()
      .withCloseButton()
      .build();
    expect(modal)
      .toStrictEqual([
        '┌─────────────────────────────────┐',
        '│ My title                        │░',
        '├─────────────────────────────────┤░',
        '│ This is a sample body for       │░',
        '│ testing and it is occupying     │░',
        '│ multiple lines.                 │░',
        '│                                 │░',
        '├─────────────────────────────────┤░',
        '│ [Y]es [N]o [O]kay [C]lose       │░',
        '└─────────────────────────────────┘░',
        ' ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░'
      ]);
  });
});