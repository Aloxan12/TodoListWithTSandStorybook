import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    return (
        <div>
            {t('Profile page')}
        </div>
    );
};

export default ProfilePage;
