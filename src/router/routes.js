import NewOrderPage from '../pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../pages/OrderHistoryPage/OrderHistoryPage';
import AuthPage from '../pages/AuthPage/AuthPage';

const routes = [
	{
		Component: AuthPage,
		key: 'AuthPage',
		path: '/'
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
