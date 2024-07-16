import css from './Orders.module.css';
import { groupNumber, ordersData } from '../../data/data';
import OrdersPieChart from '../OrdersPieChart/OrdersPieChart';

const Orders = () => {
  return (
    <div className={`${css.container} theme-container`}>
        <div className={css.head}>
            <img src="./logo.png" alt="logo" />
            <span>Заказы сегодня</span>
        </div>

        <div className={`grey-container ${css.stat}`}>
            <span>Валовая выручка</span>
            <span>₽ {groupNumber(12560)}</span>
        </div>

        <div className={css.orders}>
            {
                ordersData.map((order, index)=> (
                    <div key={index} className={css.order}>
                        <div>
                            <span>{order.name}</span>
                            <span>{order.change}</span>
                        </div>
                        <div>
                            <span>{order.type}</span><span>Осталось: {order.items}</span>
                        </div>
                    </div>
                ))
            }
        </div>

        <div className={css.orderChart}>
            <span>Заказы</span>
            <OrdersPieChart/>
        </div>
    </div>
  )
}

export default Orders
