import * as React from 'react';

import { HDivider } from '../../common/decorator/HDivider';

import KnowledgeManagement from './KnowledgeManagement';
import SoftwareEngineering from './SoftwareEngineering';
import Web from './Web';
import SSA from './SSA';
import Infrastructure from './Infrastructure';
import AI from './AI';

export default class Showcase extends React.PureComponent {
  render() {
    return (
      <section>
        <KnowledgeManagement />
        <HDivider />
        <SoftwareEngineering />
        <HDivider />
        <Web />
        <HDivider />
        <SSA />
        <HDivider />
        <Infrastructure />
        <HDivider />
        <AI />
      </section>
    );
  }
}
