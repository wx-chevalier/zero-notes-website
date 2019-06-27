import * as React from 'react';

import { HDivider } from '../common/decorator/HDivider';
import Lab from './lab/Lab';
import Banner from './banner/Banner';
import Perspective from './perspective/Perspective';

import './Home.scss';

export default class Home extends React.PureComponent {
  render() {
    return (
      <section>
        <Banner />
        <HDivider />
        <div id="perspective">
          <Perspective />
        </div>
        <HDivider />
        <div id="lab">
          <Lab />
        </div>
        <HDivider />
        <div id="knowledge-management">
          <iframe src="https://wx-chevalier.github.io/home/km.html" />
        </div>
        <HDivider />
      </section>
    );
  }
}
