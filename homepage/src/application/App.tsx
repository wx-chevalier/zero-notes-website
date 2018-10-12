import { Layout, BackTop, Anchor } from 'antd';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import 'ant-design-pro/dist/ant-design-pro.css'; // 统一引入样式

import IFooter from '../components/footer/IFooter';
import Nav from '../components/nav/Nav';
import Home from '../components/home/Home';

import './App.scss';

const { Header, Content, Footer } = Layout;

const prefix = 'app';

export default class App extends React.Component {
  render() {
    return (
      <div className={prefix}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>某熊的主页</title>
        </Helmet>
        <Layout className={`${prefix}-layout`}>
          <Anchor affix={false}>
            <Header>
              <Nav />
            </Header>
          </Anchor>
          <Content className={`${prefix}-content`}>
            <Home />
          </Content>
          <Footer id="links" style={{ textAlign: 'center' }} className={`${prefix}-footer`}>
            <IFooter />
          </Footer>
        </Layout>
        <BackTop />
      </div>
    );
  }
}
