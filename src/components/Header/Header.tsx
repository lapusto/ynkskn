import { FC } from 'react';
import cls from './Header.module.css';
import React from 'react';
import mainImg from "./s.jpg"
interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
    return (
        <div className={cls.header}>
            <div className={cls.headerText}>
                <h1>Анкета</h1>
                <h3>Карта стиля</h3>
            </div>
            <div className={cls.mainImg}>
                <img className={cls.img} src={mainImg} alt="" />
            </div>
        </div>
    );
};