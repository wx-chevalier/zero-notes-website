import * as React from 'react';

import Banner from './banner/Banner';
import Perspective from './perspective/Perspective';
import OrgMindMap from '../mindmap/OrgMindMap';

export default class Home extends React.PureComponent {
  render() {
    return (
      <section>
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
      </section>
    );
  }
}
