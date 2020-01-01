import React from 'react';
import programmer from './../../assets/programmer.webp';
import { Row, Col } from 'antd';
import './Home.css';

export default function Home() {
  return (
    <div>
    <Row type="flex" justify="space-around" align="middle">
      <Col span={12}>
        <h1 style={{textAlign:"justify"}}><span className="hello">Hola</span> <br/><span className="name">Soy Juan Diego,</span><br/><span className="title">Fullstack Developer</span></h1>
        <p style={{textAlign:"justify"}}>
          Siempre me ha atraído el desarrollo de nuevas ideas. Mis habilidades son amplias: desde ux, desarrollo front-end y back-end. Disfruto de cada aspecto y me encanta construir sitios y aplicaciones móviles de principio a fin.
        </p>
      </Col>
      <Col span={12}>
        <img src={programmer} className="programmer" alt="Ilustración de programador" />
      </Col>
    </Row>
    </div>
  );
}
