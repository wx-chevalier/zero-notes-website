import * as React from 'react';

import { HDivider } from '../shared/decorator/HDivider';
import Lab from './lab/Lab';
import Banner from './banner/Banner';
import Showcase from './showcase/Showcase';
import Perspective from './perspective/Perspective';

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
        <div id="showcase">
          <Showcase />
        </div>
        <HDivider />
      </section>
    );
  }
}
