import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Menu, Icon } from 'antd';

export default function Header() {
  const menu = [
    {
      title: 'Inicio', url: '/', icon: 'home', key: 'home',
    },
    {
      title: 'Sobre Mí', url: '/sobre-mi', icon: 'user', key: 'about',
    },
    {
      title: 'Skills', url: '/skills', icon: 'bar-chart', key: 'skills',
    },
    {
      title: 'Proyectos', url: '/proyectos', icon: 'code', key: 'proyects',
    },
    {
      title: 'Contacto', url: '/contacto', icon: 'mail', key: 'contact',
    },
  ];

  const [collapsed] = useState(false);

  return (
    <Menu
      defaultSelectedKeys={['home']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
      inlineCollapsed={collapsed}
      >
        {menu.map((item) => (
          <Menu.Item key={item.key}>
            <Icon type={item.icon} />
            <span>{item.title}</span>
            <Link to={item.url}>.</Link>
          </Menu.Item>
        ))}
    </Menu>

  );
}
