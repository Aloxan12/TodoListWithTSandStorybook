import { classNames } from 'shared/lib/classNames/classNames';
import React, { ReactNode } from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

export const Modal = ({
    className, children, isOpen, onClose,
}: ModalProps) => {
    const onCloseHandler = () => {
        if (onClose) onClose();
    };
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };
    return (
        <div className={classNames(cls.modal, mods, [className])}>
            <div className={cls.overlay} onClick={onCloseHandler}>
                <div className={cls.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </div>
    );
};
