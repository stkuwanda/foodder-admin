import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { serverUrl } from '../../utils';
import './List.page.css';

function List() {
	const [list, setList] = useState([]);

	async function fetchList() {
		const response = await axios.get(`${serverUrl}/api/food/list`);

		if (response.data.success) {
			setList(response.data.data);
		} else {
			toast.error(response.data.message);
		}
	}

	async function removeFoodItem(id) {
		const response = await axios.delete(`${serverUrl}/api/food/remove`, {
			data: { id },
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.data.success) {
			toast.success(response.data.message);
			await fetchList();
		} else {
			toast.error(response.data.message);
		}
	}

	useEffect(() => {
		fetchList();
	}, []);

	return (
		<section className='list add flex-col'>
			<h2>All Foods</h2>
			<div className='list-table'>
				<div className='list-table-format title'>
					<b>Image</b>
					<b>Name</b>
					<b>Category</b>
					<b>Price</b>
					<b>Action</b>
				</div>
				{list.map((item) => {
					return (
						<div key={item._id} className='list-table-format'>
							<img
								src={`${serverUrl}/images/${item.image}`}
								alt='Image of a food item'
							/>
							<p>{item.name}</p>
							<p>{item.category}</p>
							<p>${item.price}</p>
							<p onClick={() => removeFoodItem(item._id)} className='cursor'>
								X
							</p>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default List;
