import Orders from '../../components/Orders/Orders';
import Statistics from '../../components/Statistics/Statistics';
import { cardsData, groupNumber } from '../../data/data';
import css from './Dashboard.module.css';

const Dashboard = () => {
  return (
  <div className={css.container}>

    {/* left side */}
    <div className={css.dashboard}>

        <div className={`${css.dashboardHead} theme-container`}>
            <div className={css.head}>
                <span>Приборная панель</span>

                <div className={css.durationButton}>
                    <select>
                        <option value="">1 неделя</option>
                        <option value="">1 месяц(Без данных)</option>
                        <option value="">1 год(Без данных)</option>
                    </select>
                </div>

            </div>

            <div className={css.cards}>
                {
                    cardsData.map((card) => (
                    <>
                         <div className={css.card}>
                            <div className={css.cardHead}>
                                <span>{card.title}</span>
                                <span className={card.grade === 'plus' ? 'textGreen' : 'textRed'}>
                                    {card.grade === 'plus' ? '+' : '-'}{card.change}%
                                </span>
                            </div>
                            
                            <div className={css.cardAmount}>
                                <span>₽</span>
                                <span>{groupNumber(card.amount)}</span>
                            </div>
                        </div>
                    </>
                    ))

                }   
            </div>
        </div>

        <Statistics/>

    </div>

    <Orders/>

  </div>
  )
}

export default Dashboard
