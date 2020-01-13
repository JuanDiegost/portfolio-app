//  Proyects.jsx
// eslint-disable-next-line import/prefer-default-export
export const PROYECTS = [{
  name: 'BodyFitness Gym',
  tecnologies: [{
    name: 'java Spring Boot',
    icon: 'java',
  }, {
    name: 'Angular',
    icon: 'angular',
  }, {
    name: 'Mysql',
    icon: 'database',
  }],
  linkVideo: 'ht',
  linkDocumet: 'https://docs.google.com/document/d/10K2pxpH9AbbNFyqyC5IuwPDNTmN8q4uKiQV1pw1XaRk/edit?usp=sharing',
  description: 'Herramienta para la gestión de usuarios y contabilidad del Gimnasio Body Fitness Gym.',
  modulos: [{
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
}];
