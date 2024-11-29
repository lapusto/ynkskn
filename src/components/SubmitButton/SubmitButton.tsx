import { FC, useState } from 'react';
import cls from "./SubmitButton.module.css"
import React from 'react';
import cn from 'classnames';

interface SubmitButtonProps {
    className?: string;
    isSubmitSuccessful: boolean;
    isValid?: boolean;
    setIsFormSubmitted: (boolean) => void;
}

export const SubmitButton: FC<SubmitButtonProps> = ({ className, isValid, setIsFormSubmitted }) => {

    const [isClicked, setIsClicked] = useState(false)
    const [isSent, setIsSent] = useState(false)

    const onBtnClick = () => {
        if (isValid) {
            setIsClicked(true)
            setTimeout(() => {
                setIsSent(true)
            }, 750);
            setTimeout(() => {
                setIsClicked(false)
            }, 750);
                setTimeout(() => {
                setIsFormSubmitted(true)
            }, 1000);

        }
        else return
    }

    return (
        <div className={cls.container}>
            <button
                type='submit'
                disabled={isSent}
                id="button"
                onClick={onBtnClick}
                className={cn(cls.button, className, {
                    [cls.onclick]: isValid && isClicked,
                    [cls.sent]: isValid && isSent
                })} />
        </div>

    );
};