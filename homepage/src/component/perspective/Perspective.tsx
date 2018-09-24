import { Divider } from 'antd';
import * as React from 'react';

import KnowledgeManagement from './KnowledgeManagement';
import SoftwareEngineering from './SoftwareEngineering';
import Web from './Web';
import SSA from './SSA';
import Infrastructure from './Infrastructure';
import AI from './AI';

export default class Perspective extends React.PureComponent {
  render() {
    return (
      <section>
        <KnowledgeManagement />
        <Divider />
        <SoftwareEngineering />
        <Divider />
        <Web />
        <Divider />
        <SSA />
        <Divider />
        <Infrastructure />
        <Divider />
        <AI />
      </section>
    );
  }
}
