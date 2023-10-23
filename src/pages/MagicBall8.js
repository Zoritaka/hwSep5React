import React, { useState, useEffect } from 'react';
import './style/magic.css';
const MagicBall8 = () => {
    const [answer, setAnswer] = useState('');// итоговый ответ
    //список ответов, всего их 20!
    const lstAnswers = ['Бесспорно', 'Предрешено', 'Никаких сомнений', 'Определённо да', 'Можешь быть уверен в этом', 'Мне кажется — «да»', 'Вероятнее всего', 'Хорошие перспективы', 'Знаки говорят — «да»', 'Да', 'Пока не ясно, попробуй снова', 'Спроси позже', 'Лучше не рассказывать', 'Сейчас нельзя предсказать', 'Сконцентрируйся и спроси опять', 'Даже не думай', 'Мой ответ — «нет»', 'По моим данным — «нет»', 'Перспективы не очень хорошие', 'Весьма сомнительно']
    function randAnswer() {// рандомайзер ответов
        const min = 0;
        const max = 19;
        var rand = Math.round(min + Math.random() * (max - min));
        setAnswer(lstAnswers[rand]);
    }
    function Player({title}){
        return (
            <div className='containerM'>
                <div className="blockM">
                    <h1>{title}</h1>
                    <p>Напиши свой вопрос: </p>
                    <input type='text'></input>
                    <button onClick={()=>randAnswer()}>Спросить</button>
                    <p>{answer}</p>
                </div>
            </div>
        );
    }//Player()

    return (
        <Player
            title={'MagicBall8'}
        />
    );
};

export default MagicBall8;