import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';
import { serverUrl } from '../../utils';
import './Add.page.css';


function Add() {
	const [image, setImage] = useState(false);
	const [data, setData] = useState({
		name: '',
		description: '',
		price: '',
		category: 'Pastries',
	});

	function onChangeHandler(event) {
		const name = event.target.name;
		const value = event.target.value;
		setData((prev) => ({ ...prev, [name]: value }));
	}

	async function onSubmitHandler(event) {
		event.preventDefault();
		const formData = new FormData();
		formData.append('name', data.name);
		formData.append('description', data.description);
		formData.append('price', +data.price); // coerced into a number
		formData.append('category', data.category);
		formData.append('image', image);

		const response = await axios.post(`${serverUrl}/api/food/add`, formData);

		if (response.data.success) {
			toast.success(response.data.message);

			setData({
				name: '',
				description: '',
				price: '',
				category: 'Pastries',
			});

			setImage(false);
		} else {
			toast.error(response.data.message);
		}
	}

	return (
		<section className='add'>
			<form onSubmit={onSubmitHandler} className='flex-col'>
				<div className='add-img-upload flex-col'>
					<p>Upload image</p>
					<label htmlFor='image'>
						<img
							src={image ? URL.createObjectURL(image) : assets.upload_area}
							alt='Upload area image'
						/>
					</label>
					<input
						onChange={(e) => setImage(e.target.files[0])}
						type='file'
						id='image'
						hidden
						required
					/>
				</div>
				<div className='add-product-name flex-col'>
					<p>Product name</p>
					<input
						onChange={onChangeHandler}
						value={data.name}
						type='text'
						name='name'
						placeholder='Enter product name'
						required
					/>
				</div>
				<div className='add-product-description flex-col'>
					<p>Product description</p>
					<textarea
						onChange={onChangeHandler}
						value={data.description}
						name='description'
						rows='6'
						placeholder='Write description here'
						required
					></textarea>
				</div>
				<div className='add-category-and-price'>
					<div className='add-category flex-col'>
						<p>Product category</p>
						<select
							onChange={onChangeHandler}
							value={data.category}
							name='category'
							required
						>
							<option value='Salad'>Salad</option>
							<option value='Rolls'>Rolls</option>
							<option value='Deserts'>Deserts</option>
							<option value='Sandwich'>Sandwich</option>
							<option value='Cake'>Cake</option>
							<option value='Pure Veg'>Pure Veg</option>
							<option value='Pasta'>Pasta</option>
							<option value='Noodles'>Noodles</option>
							<option value='Pastries'>Pastries</option>
							<option value='Dish'>Dish</option>
						</select>
					</div>
					<div className='add-price flex-col'>
						<p>Product price</p>
						<input
							onChange={onChangeHandler}
							value={data.price}
							type='number'
							name='price'
							placeholder='$20'
							required
						/>
					</div>
				</div>
				<button type='submit' className='add-btn'>
					Add
				</button>
			</form>
		</section>
	);
}

export default Add;
