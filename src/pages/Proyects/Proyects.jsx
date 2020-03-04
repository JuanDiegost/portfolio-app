import React from 'react';
import { Row } from 'antd';
import {
  FaJava, FaAngular, FaDatabase, FaYoutube, FaGithub, FaAws,
} from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import { IoIosDocument } from 'react-icons/io';
import Proyect from '../../components/Proyect';

export default function Proyects() {
  // eslint-disable-next-line import/prefer-default-export
  const PROYECTS_INFO = [{
    name: 'BodyFitness Gym',
    tecnologies: [{
      name: 'java Spring Boot',
      icon: <FaJava />,
    }, {
      name: 'Angular',
      icon: <FaAngular />,
    }, {
      name: 'Mysql',
      icon: <FaDatabase />,
    }],
    linkVideo: 'ht',
    description: 'Herramienta para la gestión de usuarios y contabilidad del Gimnasio Body Fitness Gym.',
    moduls: [{
      name: 'Módulos alumno',
      items: ['Sesión de usuario', 'Horario general del gimnasio', 'Progresos', 'Historial médico', 'Perfil'],
    }, {
      name: 'Módulos entrenador',
      items: ['Sesión de usuario',
        'Horario general del gimnasio',
        'Horarios del entrenador en específico',
        'Información de alumnos',
        'Perfil',
      ],
    }],
    links: [{
      name: 'Documentación',
      icon: <IoIosDocument />,
      url: 'https://docs.google.com/document/d/10K2pxpH9AbbNFyqyC5IuwPDNTmN8q4uKiQV1pw1XaRk/edit?usp=sharing',
    }, {
      name: 'Video Demo',
      icon: <FaYoutube />,
      url: 'https://youtu.be/az3Ps30yTKA',
    }, {
      name: 'Codigo Backend',
      icon: <FaGithub />,
      url: 'https://github.com/JuanDiegost/Spring-Body-Fitnes-Gym',
    }, {
      name: 'Codigo Frontend',
      icon: <FaGithub />,
      url: 'https://github.com/JuanDiegost/Alumno-Body-Fitness-Gym',
    }],
  }, {
    name: 'Matematicas Profe ALex',
    tecnologies: [{
      name: 'java Spring Boot',
      icon: <FaJava />,
    }, {
      name: 'Angular',
      icon: <FaAngular />,
    }, {
      name: 'Mysql',
      icon: <FaDatabase />,
    },
    {
      name: 'AWS',
      icon: <FaAws />,
    }],
    linkVideo: 'ht',
    description: 'Plataforma web para el Youtuber Matemáticas profe Alex, en donde los estudiantes se pueden registrar, realizar preguntas y aprender matemáticas con los cursos de este docente.',
    moduls: [{
      name: 'Módulos alumno',
      items: ['Sesión de usuario', 'Realizar preguntas, responderlas y reportarlas', 'Buscar cursos'],
    }, {
      name: 'Módulo Administrador',
      items: ['Responder las preguntas',
        'Importar los video del canal',
        'Gestionar preguntas',
      ],
    }],
    links: [{
      name: 'Pagina Online',
      icon: <MdWeb />,
      url: 'https://matematicasprofealex.com/',
    }],
  }];

  return (
    <div>
      <h2>Proyetos grandes</h2>
      <Row type="flex" justify="space-between" style={{ textAlign: 'left' }}>
        {PROYECTS_INFO.map((proyect) => (<Proyect key={proyect.name} proyect={proyect} />))}
      </Row>
    </div>
  );
}
