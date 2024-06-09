import NewOrderPage from '../pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../pages/OrderHistoryPage/OrderHistoryPage';
import AuthPage from '../pages/AuthPage/AuthPage';
import UserPage from '../pages/UserPage/UserPage';
import TeamPage from '../pages/TeamPage/TeamPage';

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
	},
	{
		Component: UserPage,
		key: 'User',
		path: '/user'
	},
	{
		Component: TeamPage,
		key: 'Team',
		path: '/team'
	}
];

export default routes;
