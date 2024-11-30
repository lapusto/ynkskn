import { FC } from 'react';
import cls from './ThankYouPage.module.css';
import React from 'react';
import sentImg from "./sent1.jpg";
import inst from "./inst.svg";
import cn from 'classnames';

interface ThankYouPageProps {
    isFormSubmitted?: boolean;
    isOpen?: boolean;
    onClose?: () => void;
    setActive: (boolean) => void
}


export const ThankYouPage: FC<ThankYouPageProps> = ({ isOpen, setActive }) => {

    return (
        <div className={cn(cls.wrapper, {
            [cls.open]: isOpen,

        })}
            onClick={() => setActive(false)}
        >
            <div id='typ' className={cn(cls.thankYou, {
            })}
                onClick={e => e.stopPropagation()}>
                <div className={cls.text}>
                    <p>Спасибо!<br /> Ваша анкета отправлена, я свяжусь с Вами в ближайшее время.</p>
                    <p>Чтобы оставаться в курсе последних новостей в мире моды и стиля подписывайтесь на мой instagram:
                        <a href='https://www.instagram.com/lera_yankauskene/'>
                            <img src={inst} alt="" className={cls.inst} /> lera_yankauskene
                        </a> </p>
                </div>
                <img src={sentImg} alt="" className={cls.sent} />
            </div>
        </div>

    );
};