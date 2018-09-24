import * as React from 'react';
import Particles from 'react-particles-js';

import './OrgMindMap.scss';

const prefix = 'org-mind-map';

export default class OrgMindMap extends React.Component {
  render() {
    return (
      <section className={prefix}>
        <Particles />
      </section>
    );
  }
}
