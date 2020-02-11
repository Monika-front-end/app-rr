import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const list = [
  { name: 'start', path: '/', exact: true },
  { name: 'produkty', path: '/products' },
  { name: 'kontakt', path: '/contact' },
  { name: 'panel admin', path: '/admin' }
];

const Navigation = () => {
  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className='main'>
      <ul>
        {/* <li>
          <NavLink to='/' exact>
            Start
          </NavLink>
        </li>
        <li>
          <NavLink to='/products'>Products</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Kontakt</NavLink>
        </li>
        <li>
          <NavLink to='/admin'>Panel admin</NavLink>
        </li> */}
        {menu}
      </ul>
    </nav>
  );
};

export default Navigation;
