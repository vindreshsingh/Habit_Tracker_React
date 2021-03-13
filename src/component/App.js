import { Layout, Carousel } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Tracker from './Tracker';
import Navbar from './Navbar';
import Main from './Main';


function App(props) {
  const {Content } = Layout;

  //render layout- header-navbar content-main and tracker and footer
  return (
    <Router>
      <div className='App'>
        <Layout className='layout'>
          <Navbar />
          <Switch>
            <Content>
              {/* <Carousel autoplay>
                <div>
                  <h3 style={contentStyle}>Vindresh</h3>
                </div>
                <div>
                  <h3 style={contentStyle2}>Vindresh</h3>
                </div>
              </Carousel> */}
              <Route exact path='/' component={Main} />
              <Route path='/progress' component={Tracker} />
            </Content>
          </Switch>
         
        </Layout>
      </div>
    </Router>
  );
}

export default App;
