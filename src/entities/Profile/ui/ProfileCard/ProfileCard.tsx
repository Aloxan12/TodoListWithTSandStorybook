import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import cls from 'entities/Profile/ui/ProfileCard/ProfileCard.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader/Loader';

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

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div>
                {data?.avatar && <img src={data?.avatar} alt="" />}
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastName}
                    placeholder={t('Ваша фамилия')}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />

                <Input
                    value={`${data?.age}`}
                    placeholder={t('Ваш возраст')}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={`${data?.username}`}
                    placeholder={t('Введите имя пользователя')}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={`${data?.avatar}`}
                    placeholder={t('Введите ссылку на аватар')}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
