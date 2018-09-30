import * as React from 'react';
import { Parallax } from 'react-parallax';
import PerspectiveCard from '../../shared/card/PerspectiveCard';

const bgImg =
  'https://user-images.githubusercontent.com/5803001/45939297-0b7ddc00-c004-11e8-8b97-2312c6895b78.jpg';

export default class SSA extends React.PureComponent {
  render() {
    return (
      <Parallax bgImage={bgImg} strength={500}>
        <div style={{ height: 500 }}>
          <PerspectiveCard
            title="服务端应用与微服务架构"
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
