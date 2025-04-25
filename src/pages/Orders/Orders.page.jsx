import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { serverUrl } from '../../utils';
import { assets } from '../../assets/assets';
import './Orders.page.css';

function Orders() {
	const [orders, setOrders] = useState([]);
	console.log(orders);

	async function fetchAllOrders() {
		try {
			const response = await axios.get(`${serverUrl}/api/order/list`);
			if (response.data.success) {
				setOrders(structuredClone(response.data.data));
			} else {
				toast.error('Failed to fetch orders list.');
			}
		} catch {
			toast.error('Failed to fetch orders list.');
		}
	}

	useEffect(() => {
		fetchAllOrders();
	}, []);

	return (
		<section className='order add'>
			<h2>Order Page</h2>
			<div className='orders-list'>
				{orders.map((order) => (
					<div className='order-item'>
						<img src={assets.parcel_icon} alt='Parcel icon image' />
						<div>
							<p className='order-item-food'>
                {order.items.map((item, i) => {
                  if(i === (order.items.length - 1)) {
                    return `${item.name} x ${item.quantity}`;
                  } else {
                    return `${item.name} x ${item.quantity},`;
                  }
                })}
              </p>
              <p className='order-item-name'>
                {`${order.address.firstName} ${order.address.lastName}`}
              </p>
              <div className="order-item-address">
                <p>{`${order.address.street},`}</p>
                <p>{`${order.address.city}, ${order.address.province}, ${order.address.country}`}</p>
              </div>
              <p className="order-item-phone">{order.address.phone}</p>
						</div>
            <p>Items : {order.items.length}</p>
            <p>${order.amount}</p>
            <select>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Deliverd">Delivered</option>
            </select>
					</div>
				))}
			</div>
		</section>
	);
}

export default Orders;
