import { Row, Col, Divider } from 'antd';
import cn from 'classnames';
import * as React from 'react';

import './IFooter.scss';

const prefix = 'footer';

const Item = ({ imgSrc, href, label }: { imgSrc?: string; href: string; label: string }) => (
  <div
    className={cn({
      [`${prefix}-item`]: true,
      [`${prefix}-item--noimg`]: !imgSrc
    })}
  >
    {imgSrc && <img src={imgSrc} alt="alt" />}
    <a href={href} target="__blank">
      {label}
    </a>
  </div>
);

export default class IFooter extends React.Component {
  render() {
    return (
      <section>
        <Row>
          <Col span={4}>
            <h2>博客</h2>
            <Item
              imgSrc="https://user-images.githubusercontent.com/5803001/46025742-352a2680-c11c-11e8-8707-5e55a4e19039.png"
              href="https://zhuanlan.zhihu.com/wxyyxc1992"
              label="知乎专栏"
            />
            <Item
              imgSrc="https://user-images.githubusercontent.com/5803001/46254577-04ebda80-c4c4-11e8-86e4-ab4f71bbf2b0.png"
              href="https://segmentfault.com/blog/wxyyxc1992"
              label="SegmentFault"
            />
            <Item
              imgSrc="https://b-gold-cdn.xitu.io/favicons/v2/favicon-32x32.png"
              href="https://juejin.im/user/57600ea72e958a0058f6ac24"
              label="掘金"
            />
            <Item
              imgSrc="https://user-images.githubusercontent.com/5803001/46025891-8afece80-c11c-11e8-90c6-44f8401374df.png"
              href="https://medium.com/@384924552"
              label="Medium"
            />
          </Col>
          <Col span={4}>
            <h2>代码</h2>
            <Item
              imgSrc="https://assets-cdn.github.com/favicon.ico"
              href="https://github.com/wxyyxc1992"
              label="Github"
            />
            <Item
              imgSrc="https://codepen.io/favicons/favicon-192x192.png"
              href="https://codepen.io/wxyyxc1992"
              label="Code Pen"
            />
            <Item
              imgSrc="https://user-images.githubusercontent.com/5803001/46023859-25104800-c118-11e8-9547-7b87f0eea636.png"
              href="https://codesandbox.io/u/wxyyxc1992"
              label="Code Sandbox"
            />
          </Col>
          <Col span={8}>
            <h2>技术之路</h2>
            <Item
              href="https://github.com/wxyyxc1992/Awesome-Coder/tree/master/TechRoad/2015"
              label="2015-数据流驱动的前端，知识体系初探"
            />
            <Item
              href="https://github.com/wxyyxc1992/Awesome-Coder/tree/master/TechRoad/2016"
              label="2016-工具化与工程化，知识图谱"
            />
            <Item
              href="https://github.com/wxyyxc1992/Awesome-Coder/tree/master/TechRoad/2017"
              label="2017-不忘初心，夯实基础，程序员的自我修养"
            />
          </Col>
          <Col span={4}>
            <h2>工具</h2>
          </Col>
          <Col span={4}>
            <h2>其他</h2>
          </Col>
        </Row>
        <Divider />
        <Row>某熊的技术视野 ©2018 王下邀月熊</Row>
      </section>
    );
  }
}
