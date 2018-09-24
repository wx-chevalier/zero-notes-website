import { Layout, Menu, Row, Col, Divider, BackTop, Anchor } from 'antd';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import Banner from '../component/banner/Banner';
import OrgMindMap from '../component/mindmap/OrgMindMap';
import Perspective from '../component/perspective/Perspective';

import './App.scss';

const { Header, Content, Footer } = Layout;
const { Link } = Anchor;

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
              <div className="left">
                <div className="logo" />
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['1']}
                  style={{ lineHeight: '64px' }}
                >
                  <Menu.Item key="1">
                    <div className="menu-item">
                      <span>xCompass</span>
                      <span>个人主页</span>
                    </div>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <a href="/gh-craft" target="__blank">
                      <div className="menu-item">
                        <span>Github Craft</span>
                        <span>方块的世界</span>
                      </div>
                    </a>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <a href="/arcane-cards" target="__blank">
                      <div className="menu-item">
                        <span>Knowledge Arcane Cards</span>
                        <span>知识卡牌</span>
                      </div>
                    </a>
                  </Menu.Item>
                </Menu>
              </div>
              <div className="right">
                <Menu
                  theme="dark"
                  mode="horizontal"
                  selectable={false}
                  style={{ lineHeight: '64px' }}
                >
                  <Menu.Item key="1">
                    <div className="menu-item">
                      <Link
                        title={
                          <React.Fragment>
                            <span>Perspective</span>
                            <span>视野</span>
                          </React.Fragment>
                        }
                        href="#perspective"
                      />
                    </div>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <div className="menu-item">
                      <Link
                        title={
                          <React.Fragment>
                            <span>Knowledge Graph</span>
                            <span>知识图谱</span>
                          </React.Fragment>
                        }
                        href="#org"
                      />
                    </div>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <div className="menu-item">
                      <Link
                        title={
                          <React.Fragment>
                            <span>Lab</span>
                            <span>实验室</span>
                          </React.Fragment>
                        }
                        href="#lab"
                      />
                    </div>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <div className="menu-item">
                      <Link
                        title={
                          <React.Fragment>
                            <span>Links</span>
                            <span>链接</span>
                          </React.Fragment>
                        }
                        href="#links"
                      />
                    </div>
                  </Menu.Item>
                </Menu>
              </div>
            </Header>
          </Anchor>
          <Content className={`${prefix}-content`}>
            <Banner />
            <h1>| | |</h1>
            <div id="perspective">
              <Perspective />
            </div>
            <h1>| | |</h1>
            <div id="lab" />
            <div id="org">
              <OrgMindMap />
            </div>
            <h1>| | |</h1>
          </Content>
          <Footer id="links" style={{ textAlign: 'center' }} className={`${prefix}-footer`}>
            <Row>
              <Col span={6}>
                <h2>博客</h2>
              </Col>
              <Col span={6}>
                <h2>代码</h2>
              </Col>
              <Col span={6}>
                <h2>工具</h2>
              </Col>
              <Col span={6}>
                <h2>关于</h2>
              </Col>
            </Row>
            <Divider />
            <Row>某熊的技术视野 ©2018 王下邀月熊</Row>
          </Footer>
        </Layout>
        <BackTop />
      </div>
    );
  }
}
