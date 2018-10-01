import * as React from 'react';
import Particles from 'react-particles-js';

import './Lab.scss';

const prefix = 'lab';

export default class Lab extends React.Component {
  render() {
    return (
      <section className={prefix}>
        <Particles />
      </section>
    );
  }
}
