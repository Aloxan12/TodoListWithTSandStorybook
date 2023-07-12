import { render, screen } from '@testing-library/react';
import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';

describe('AppButton', () => {
  test('Test render', () => {
    render(<AppButton>Test</AppButton>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
  test('Test clear theme', () => {
    render(<AppButton theme={ThemeButton.clear}>Test</AppButton>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
