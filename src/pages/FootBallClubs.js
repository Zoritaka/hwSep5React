import React, { useState, useEffect } from 'react';
import './style/FootBall.css' ;
const FootBallClubs = () => {
    const [tema, setTema] = useState(Math.round(Math.random(0, 1))) // not work
    function Club({info, achievements, team}){ // Создание клуба из классовых компонентов
        return (
            <div className='containerF'>
                <div className="blockF">
                    <div className='MainF'>
                        <h1>{info.name}</h1>
                        <img src={info.img}></img>
                    </div>
                    <p>Страна: {info.Country}</p>
                    <p>Город: {info.city}</p>
                    <p>Дата основания: {info.date}</p>
                    <p>Рейтинг: {info.rate}</p>
                </div>
                <div className='blockF'>
                    <h3>Список побед</h3>
                    <ol>
                        {achievements.victories}
                    </ol>
                    <p><b>Особые заслуги:</b> {achievements.goals}</p>
                    <p><b>Благотварительность:</b> {achievements.charity}</p>
                </div>
                <div className='blockF'>
                    <h3>Команда</h3>
                    <p><b>Президент: </b>{team.president}</p>
                    <p><b>Лидер: </b>{team.coach}</p>
                    <p><b>Капитан: </b>{team.capitan}</p>
                    <ol>
                        {team.lstCharacters}
                    </ol>
                </div>
            </div>
        );
    }//Player()
    // Список классов клубов
    const lstClubs = [
        <Club
            info={{ 
                name: 'Барселона', 
                Country: 'Испания',
                city: 'Барселона',
                date: ' 29.11.1899 году',
                rate: '116764',
                img: require('./img/barselona.png')
            }}
            achievements={{ 
                victories: ['6 Кубков Каталонии', '5 побед в Лиге чемпионов УЕФА', 'Множество побед в Кубке Испании', 'Исторические победы над "Реалом" Мадрид в Эль-Класико', 'Множество чемпионств в Ла Лига', 'Победы в Клубном чемпионате мира ФИФА'].map((e)=> <li>{e}</li>),
                goals: 'Лионель Месси забил за карьеру 670 голов для "Барселоны"',
                charity: 'Строительство стадиона "Камп Ноу"'
            }}
            team={{
                president: 'Жоан Лапорта',
                coach: 'Хави',
                capitan: 'Сержи Роберто',
                lstCharacters: ['Лионель Месси', 'Герард Пике', 'Серхио Бускетс','Антуан Гризманн','Хорди Альба','Френки де Йонг','Миралем Пьянич','Марк-Андре тер Штеген (вратарь)','Самуэль Умтити','Ансу Фати','Оскар Мингуэса','Серхи Роберто','Рональд Араухо','Педри'].map((e)=> <li>{e}</li>)
            }}
        />,
        <Club
            info={{ 
                name: 'Манчестер Юнайтед', 
                Country: 'Англия',
                city: 'Манчестер',
                date: '1878 году',
                rate: '104010',
                img: require('./img/manchester.png')
            }}
            achievements={{ 
                victories: ['20 чемпионств в Английской Премьер-лиге', '12 побед в Кубке Англии (FA Cup)', '5 побед в Лиге чемпионов УЕФА', '4 победы в Кубке английской лиги (EFL Cup)', '3 победы в Кубке Кубков', '21 победа в Community Shield', ].map((e)=> <li>{e}</li>),
                goals: 'Вайн Руни забил за карьеру более 250 голов для "Манчестер Юнайтед"',
                charity: 'программа "Фонд Манчестер Юнайтед" помогает людям по всему миру'
            }}
            team={{
                president: 'Ричард Арнолд',
                coach: 'Эрик тен Хаг',
                capitan: 'Бруну Фернандеш',
                lstCharacters: ['Бруну Фернандеш', 'Гарри Магуайр', 'Маркус Рэшфорд', 'Пол Погба', 'Мейсон Гринвуд', 'Давид Де Хеа (вратарь)', 'Эдисон Кавани', 'Скотт МакТоминей', 'Виктор Линделёф', 'Люк Шоу'].map((e)=> <li>{e}</li>)
            }}
        />
        ].map((e)=> <div>{e}</div>)

    return (
        <div>
            {lstClubs}
        </div>
    );
};

export default FootBallClubs;