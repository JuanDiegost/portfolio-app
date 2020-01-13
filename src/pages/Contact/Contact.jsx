import React from 'react';
import { Row, Icon } from 'antd';
import './Contact.css';

export default function Contact() {
  const socialMedia = [{ type: 'linkedin', color: '#0077b5', url: 'https://www.linkedin.com/in/juandiegost/' }, { type: 'github', color: '#333', url: 'https://github.com/JuanDiegost' }, { type: 'mail', color: '#168de2', url: 'mailto:molinajuan149@gmail.com' }, { type: 'twitter', color: '#1da1f2', url: 'https://twitter.com/juanDiegostCo' }];

  return (
    <div>
      <h2>Contacto</h2>
      <Row type="flex" justify="center">
        {socialMedia.map((social) => (
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <a className="social-link" href={social.url} key={social.type} style={{ backgroundColor: social.color }} target="_blank" rel="noopener noreferrer"><Icon type={social.type} /></a>
        ))}
      </Row>
    </div>
  );
}
