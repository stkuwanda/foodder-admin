import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './SideBar.component.css';

function SideBar() {
	return (
		<aside className='sidebar'>
			<div className='sidebar-options'>
				<NavLink to='/add' className='sidebar-option'>
          <img src={assets.add_icon} alt="Add icon image" />
          <p>Add items</p>
        </NavLink>
        <NavLink to='/list' className='sidebar-option'>
          <img src={assets.order_icon} alt="Add icon image" />
          <p>List items</p>
        </NavLink>
        <NavLink to='/orders' className='sidebar-option'>
          <img src={assets.order_icon} alt="Add icon image" />
          <p>Orders</p>
        </NavLink>
			</div>
		</aside>
	);
}

export default SideBar;
