/* eslint-disable react/prop-types */
import React from 'react';
import { Col, Card, Row } from 'antd';

export default function Proyect(props) {
  const { proyect } = props;
  return (
    <Col
      span={24}
      md={{ span: 10 }}
    >
      <Card className="card backend">
        <h3>{proyect.name}</h3>
        <p>{proyect.description}</p>
        <Row>
          {proyect.tecnologies.map((tech) => (
            <React.Fragment key={tech.name}>
              <Col span={12}>
                {tech.icon}
                {' '}
                {tech.name}
              </Col>
            </React.Fragment>
          ))}
        </Row>
        <Row>
          {proyect.moduls.map((module) => (
            <Col key={module.name}>
              <p key={module.name}>{module.name}</p>
              <ul>
                {module.items.map((item) => (<li key={item}>{item}</li>))}
              </ul>
            </Col>
          ))}
        </Row>
        <p>Links de soporte</p>
        <Row>
          {proyect.links.map((link, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Col span={24} md={{ span: 10 }} key={index} style={{ marginBottom: '5px' }}>
              <a
                href={link.url}
                key={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
                {' '}
                {' '}
                {link.name}
              </a>
            </Col>
          ))}
        </Row>
      </Card>
    </Col>
  );
}
