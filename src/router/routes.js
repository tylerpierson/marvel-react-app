import NewOrderPage from '../pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../pages/OrderHistoryPage/OrderHistoryPage';
import AuthPage from '../pages/AuthPage/AuthPage';
import ShowPage from '../pages/ShowPage/ShowPage';

const routes = [
	{
		Component: AuthPage,
		key: 'AuthPage',
		path: '/'
	},
	{
		Component: ShowPage,
		key: 'ShowPage',
		path: '/comic'
	},
	{
		Component: NewOrderPage,
		key: 'NewOrder',
		path: '/orders/new'
	},
	{
		Component: OrderHistoryPage,
		key: 'OrderHistory',
		path: '/orders'
	}
];

export default routes;
