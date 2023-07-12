import { render, screen } from '@testing-library/react';
import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';

describe('AppButton', () => {
  test('Test render', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<AppButton>TEST</AppButton>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('Test clear theme', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<AppButton theme={ThemeButton.clear}>Test</AppButton>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
