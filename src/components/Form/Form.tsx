import { FC, useEffect, useRef } from 'react';
import cls from './Form.module.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../Input/Input.tsx';
import { SubmitButton } from '../SubmitButton/SubmitButton.tsx';
import Documents from '../Documents/Documents.tsx';
import emailjs from '@emailjs/browser';

interface FormProps {
    className?: string;
    isFormSubmitted?: boolean;
    setIsFormSubmitted: (boolean) => void
}

interface IForm {
    name: string;
    job: string;
    weekend: string;
    reference: string;
    current: string;
    preferences: string;
    celebrities: string;
    documents: [];
    brands: string
}

export const Form: FC<FormProps> = ({ className, isFormSubmitted, setIsFormSubmitted }) => {
    const { control, register, handleSubmit, reset, formState: { isSubmitSuccessful, errors, isValid, } } = useForm<IForm>({})

    const form = useRef();

    const sendEmail = (data) => {
        emailjs
            //@ts-ignore
            .sendForm('service_kh529js', 'template_3j14s29', form.current, {
                publicKey: 'Lyezhavzlxy7Sw0hG',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    useEffect(() => {
        reset()
    }, [isFormSubmitted])


    return (
        <form ref={form} onSubmit={handleSubmit(sendEmail)} className={cls.form} >
            <Input id="name" label="1) Имя" register={register} required errors={errors} />
            <Input id="job" label="2) Как много времени в день у Вас занимает работа? Требует ли Ваша работа определенного внешнего вида?" register={register} required errors={errors} />
            <Input id="weekend" label="3) Опишите свои выходные: ходите ли Вы в заведения, посещаете ли мероприятия с дресс-кодом?" register={register} required errors={errors} />
            <Input id="reference" label="4) Какими словами Вы можете описать тот стиль, который хотели бы получить?" register={register} required errors={errors} />
            <Input id="current" label="5) Что в нынешнем стиле Вам не нравится?" register={register} required errors={errors} />
            <Input id="preferences" label="6) Есть ли какие-то предпочтения по цветам, фасонам, силуэтам?" register={register} required errors={errors} />
            <Input id="celebrities" label="7) Стиль каких известных людей Вас вдохновляет? Если таких нет, можно прислать фото образов, которые нравятся." register={register} required errors={errors} />
            <Documents control={control} />
            <Input id="brands" label="8) Какие бренды предпочитаете/носите?" register={register} required errors={errors} />
            <Input id="contacts" label="9) Ваш адрес электронной почты или номер телефона для обратной связи:" register={register} required errors={errors} />
            <SubmitButton isSubmitSuccessful={isSubmitSuccessful} isValid={isValid} setIsFormSubmitted={setIsFormSubmitted} />
        </form>
    );
};