import React from 'react';
import { Row, Col, Card } from 'antd';
import {
  FaReact, FaAngular, FaHtml5, FaCss3, FaJava, FaNodeJs, FaDatabase,
  FaGithub, FaLinux, FaTerminal,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import {
  DiMysql, DiDatabase, DiMongodb, DiIonic, DiReact, DiAndroid,
  DiAws, DiDigitalOcean, DiFirebase, DiGit, DiVisualstudio, DiEclipse,
} from 'react-icons/di';
import { AiFillApi } from 'react-icons/ai';
import { FiHexagon } from 'react-icons/fi';
import './Skills.css';

export default function Skills() {
  return (
    <div>
      <h2>¿Qué puedo hacer?</h2>
      <Row type="flex" justify="space-around" style={{ textAlign: 'left' }}>
        <Col span={24} md={{ span: 10 }}>

          <Card className="card frontend">
            <h3>Frontend</h3>
            <p>
Desarrollo interfaces de usuario altamente interactivas
              para aplicaciones web y móviles.

            </p>
            <ul>
              <Row type="flex">
                <Col className="tech" span={12}>
                  <FaHtml5 />
Html5
                </Col>
                <Col className="tech" span={12}>
                  <FaCss3 />
Css3
                </Col>
                <Col className="tech" span={12}>
                  <IoLogoJavascript />
Javascript
                </Col>
                <Col className="tech" span={12}>
                  <FaReact />
React
                </Col>
                <Col className="tech" span={12}>
                  <FaAngular />
Angular
                </Col>
              </Row>
            </ul>
          </Card>
        </Col>
        <Col span={24} md={{ span: 10 }}>
          <Card className="card backend">
            <h3>Backend</h3>
            <p>
Diseño y construcción de soluciones en arquitecturas:
              Cliente-Servidor, Capas y microservicios con diferentes estándares de
              comunicación y almacenamiento de datos.
              {' '}

            </p>
            <ul>
              <Row type="flex">
                <Col className="tech" span={12}>
                  <FaJava />
Java, JEE, JPA, Spring Boot,Hibernate
                  {' '}
                </Col>
                <Col className="tech" span={12}>
                  <FaNodeJs />
Node JS, Express, Apollo, JWT
                </Col>
                <Col className="tech" span={12}>
                  <DiMysql />
MySql
                </Col>
                <Col className="tech" span={12}>
                  <FaDatabase />
Oracle
                </Col>
                <Col className="tech" span={12}>
                  <DiDatabase />
MariaDB
                </Col>
                <Col className="tech" span={12}>
                  <DiMongodb />
MongoDB
                </Col>
                <Col className="tech" span={12}>
                  <AiFillApi />
Api Rest
                </Col>
                <Col className="tech" span={12}>
                  <FiHexagon />
GraphQL
                </Col>
              </Row>
            </ul>
          </Card>
        </Col>

        <Col span={24} md={{ span: 10 }}>
          <Card className="card movil">
            <h3>Desarrollo Movil</h3>
            <p>
Diseño y construcción de soluciones moviles enfocado a tecnologias
              hibridas y cross platform.

            </p>
            <ul>
              <Row type="flex">
                <Col className="tech" span={12}>
                  <DiIonic />
Ionic
                  {' '}
                </Col>
                <Col className="tech" span={12}>
                  <DiReact />
React Native
                </Col>
                <Col className="tech" span={12}>
                  <DiAndroid />
Flutter
                </Col>
              </Row>
            </ul>
          </Card>
        </Col>
        <Col span={24} md={{ span: 10 }}>
          <Card className="card devOps">
            <h3>DevOps</h3>
            <p>Integración de servicios de terceros.</p>
            <ul>
              <Row type="flex">
                <Col className="tech" span={12}>
                  <DiAws />
AWS
                  {' '}
                </Col>
                <Col className="tech" span={12}>
                  <DiDigitalOcean />
Digital Ocean
                </Col>
                <Col className="tech" span={12}>
                  <DiFirebase />
Firebase
                </Col>
                <Col className="tech" span={12}>
                  <FaTerminal />
SSH
                </Col>
              </Row>
            </ul>
          </Card>
        </Col>

        <Col span={24} md={{ span: 10 }}>
          <Card className="card other">
            <h3>Otros</h3>
            <p>Herramientas y plataformas que uso regularmente.</p>
            <ul>
              <Row type="flex">
                <Col className="tech" span={12}>
                  <FaGithub />
GitHub
                  {' '}
                </Col>
                <Col className="tech" span={12}>
                  <DiGit />
Git
                </Col>
                <Col className="tech" span={12}>
                  <DiVisualstudio />
Visual Studio Code
                </Col>
                <Col className="tech" span={12}>
                  <FaLinux />
Linux
                </Col>
                <Col className="tech" span={12}>
                  <DiEclipse />
Eclipse
                </Col>
              </Row>
            </ul>
          </Card>
        </Col>
        <Col span={24} md={{ span: 10 }} />
      </Row>
    </div>
  );
}
