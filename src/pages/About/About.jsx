import React from 'react';
import './About.css';
import { Row, Col } from 'antd';
import Programmers from '../../assets/developer.webp';

export default function About() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <h2>Sobre Mí</h2>
      <Row type="flex" justify="space-around" align="middle">

        <Col span={24} md={{ span: 12 }}>
          <img src={Programmers} alt="Desarrollo en equipo ilustración" />
        </Col>
        <Col span={24} md={{ span: 12 }}>
          <p>
            Especialmente relacionado con la
            industria del desarrollo web y la tecnología desde hace muchos años.
            <br />
            Persona bien organizada, solucionador de problemas
            con gran atención a los detalles. Fan del baloncesto,
            actividades al aire libre, series de televisión y, recientemente, podcasts.
            <br />
            Interesado en cada día aprender
            cosas nuevas junto a personas asombrosas.
          </p>
        </Col>
      </Row>
    </div>
  );
}
