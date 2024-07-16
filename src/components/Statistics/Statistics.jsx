import { groupNumber } from '../../data/data';
import StatisticsChart from '../StatisticsChart/StatisticsChart';
import css from './Statistics.module.css';
import {BsArrowUpShort} from 'react-icons/bs'


const Statistics = () => {
  return (
    <div className={`${css.container} theme-container`}>
       <span className={css.title}>
        Обзорная статистика
       </span>

       <div className={`${css.cards} grey-container`}>
        <div>
            <div className={css.arrowIcon}>
                <BsArrowUpShort/>   
            </div>

            <div className={css.card}>
                <span>Лучший товар на этой неделе</span><span>Курсы по бегу</span>
            </div>
        </div>

        <div className={css.card}>
            <span>Количество продаж</span><span>{groupNumber(455)}</span>
        </div>

        <div className={css.card}>
            <span>Выручка</span><span>{groupNumber(370000)}</span>
        </div>

        <div className={css.card}>
            <span>Среднее значение/день</span><span>{groupNumber(24000)}</span>
        </div>

       </div>

       <StatisticsChart/>
    </div>
  )
}

export default Statistics
