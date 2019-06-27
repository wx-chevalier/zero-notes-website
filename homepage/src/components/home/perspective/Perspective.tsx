import * as React from 'react';

import './Perspective.scss';
import { Divider } from 'antd';

const prefix = 'perspective';

export default class Perspective extends React.PureComponent {
  render() {
    return (
      <section className={prefix}>
        <div className={`${prefix}-toolbar`}>
          <span>
            <a
              href="https://github.com/wxyyxc1992/Coder-Roadmap/tree/master/TechRoad/MindMap"
              target="__blank"
            >
              源文件
            </a>
          </span>
          <Divider type="vertical" />
          <span>
            <a
              href="https://github.com/wxyyxc1992/Coder-Roadmap/tree/master/TechRoad/MindMap/MindMap.png"
              target="__blank"
            >
              完整脑图
            </a>
          </span>
          <Divider type="vertical" />
          <span>交互模式</span>
        </div>
        <div className={`${prefix}-mindmap`}>
          <img
            src="https://github.com/wx-chevalier/Developer-Zero-To-Mastery/blob/master/MindMap/MindMap.summary.white.png?raw=true"
            alt=""
          />
        </div>
      </section>
    );
  }
}
