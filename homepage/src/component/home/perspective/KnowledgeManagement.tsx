import * as React from 'react';
import { Parallax } from 'react-parallax';
import PerspectiveCard from '../../shared/card/PerspectiveCard';

const bgImg =
  'https://user-images.githubusercontent.com/5803001/43364904-59f5bda6-9356-11e8-9ab3-ae073d08bb9e.png';

export default class KnowledgeManagement extends React.PureComponent {
  render() {
    return (
      <Parallax bgImage={bgImg} strength={500}>
        <div style={{ height: 500 }}>
          <PerspectiveCard
            title="知识管理"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translateX(-50%) translateY(-50%)'
            }}
          />
        </div>
      </Parallax>
    );
  }
}
