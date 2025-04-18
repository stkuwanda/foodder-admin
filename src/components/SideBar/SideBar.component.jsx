import { assets } from '../../assets/assets';
import './SideBar.component.css';

function SideBar() {
	return (
		<aside className='sidebar'>
			<div className='sidebar-options'>
				<div className='sidebar-option'>
          <img src={assets.add_icon} alt="Add icon image" />
          <p>Add items</p>
        </div>
        <div className='sidebar-option'>
          <img src={assets.order_icon} alt="Add icon image" />
          <p>List items</p>
        </div>
        <div className='sidebar-option'>
          <img src={assets.order_icon} alt="Add icon image" />
          <p>Orders</p>
        </div>
			</div>
		</aside>
	);
}

export default SideBar;
