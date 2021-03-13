import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

//display navbar
function Navbar() {
  const { Header } = Layout;
  return (
    <Header>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
        <Menu.Item key='1'>
          <Link to='/'>Habit Tracker </Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link to='/'>DashBoard </Link>
        </Menu.Item>
        <Menu.Item key='3'>
          <Link to='/progress'>Habit Progress </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default Navbar;
