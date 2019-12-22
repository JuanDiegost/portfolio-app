import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';

import Home from './pages/Home/Home';
import Header from './components/Header';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Proyects from './pages/Proyects/Proyects';
import Contact from './pages/Contact/Contact';
import Sider from 'antd/lib/layout/Sider';


function App() {
  return (
    <div className="App">
      <Router>
      <Layout>
        <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
        >
        <Header />
        </Sider>
        <Switch>
      <Layout style={{ marginLeft: 200 }}>
      <Layout.Content style={{ margin: '24px 16px 0', height: '80vh'}}>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center'}}>          
        <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/sobre-mi">
              <About />
            </Route>
            <Route exact path="/skills">
              <Skills />
            </Route>
            <Route exact path="/proyectos">
              <Proyects />
            </Route>
            <Route exact path="/contacto">
              <Contact />
            </Route>
            </div>
            </Layout.Content>
            </Layout>
        </Switch>
        <Layout.Footer style={{ margin: '0 16px 0 16px',height:'15vh',textAlign: 'center' }}>Portafolio ©2019 Created by JuanDiegost with ☕ and ❤️</Layout.Footer>
      </Layout>
      </Router>
    </div>
  );
}

export default App;
