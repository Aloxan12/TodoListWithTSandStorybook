import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const onToggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
      .catch(() => {
      });
  };

  return (
    <AppButton
      className={classNames('', {}, [className])}
      onClick={onToggle}
      theme={ThemeButton.clear}
    >
      {t('Язык')}
    </AppButton>
  );
};
