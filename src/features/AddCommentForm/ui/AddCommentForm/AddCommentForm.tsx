import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { sendComment } from 'features/AddCommentForm/modal/services/sendComment/sendComment';
import { addCommentFormActions, addCommentFormReducer } from '../../modal/slices/addCommentFormSlice';
import { getAddCommentFormError, getAddCommentFormText } from '../../modal/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    className?: string
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(({ className }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendComment = useCallback(() => {
        dispatch(sendComment());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    value={text}
                    placeholder={t('Введите текст комментария')}
                    onChange={onCommentTextChange}
                    className={cls.input}
                />
                <Button onClick={onSendComment}>
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
