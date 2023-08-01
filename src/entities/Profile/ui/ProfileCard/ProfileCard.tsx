import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import cls from 'entities/Profile/ui/ProfileCard/ProfileCard.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country/ui/CountrySelect/CountrySelect';

interface ProfileCardProps {
    className?: string
    data?: Profile
    error?: string
    isLoading?: boolean
    readonly?: boolean
    onChangeFirstName: (value?: string) => void
    onChangeLastName: (value?: string) => void
    onChangeAge: (value?: string) => void
    onChangeCity: (value?: string) => void
    onChangeAvatar: (value?: string) => void
    onChangeUsername: (value?: string) => void
    onChangeCurrency: (currency: Currency) => void
    onChangeCountry: (country: Country) => void
}

export const ProfileCard = ({
    className,
    data,
    error,
    isLoading,
    onChangeFirstName,
    onChangeLastName,
    readonly,
    onChangeAge,
    onChangeCity,
    onChangeUsername, onChangeAvatar,
    onChangeCurrency, onChangeCountry,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} alt={t('аватар')} />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                    className={cls.input}
                />
                <Input
                    value={data?.lastName}
                    placeholder={t('Ваша фамилия')}
                    onChange={onChangeLastName}
                    readonly={readonly}
                    className={cls.input}
                />

                <Input
                    value={`${data?.age}`}
                    placeholder={t('Ваш возраст')}
                    onChange={onChangeAge}
                    readonly={readonly}
                    className={cls.input}
                />
                <Input
                    value={`${data?.username}`}
                    placeholder={t('Введите имя пользователя')}
                    onChange={onChangeUsername}
                    readonly={readonly}
                    className={cls.input}
                />
                <Input
                    value={`${data?.avatar}`}
                    placeholder={t('Введите ссылку на аватар')}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                    className={cls.input}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    onChange={onChangeCity}
                    readonly={readonly}
                    className={cls.input}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                />
            </div>
        </div>
    );
};
