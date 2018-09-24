import * as React from 'react';
import { Parallax } from 'react-parallax';
import PerspectiveCard from '../shared/card/PerspectiveCard';

const bgImg =
  'https://user-images.githubusercontent.com/5803001/45917824-f2641680-beaf-11e8-8076-b0f139d88270.png';

export default class SoftwareEngineering extends React.PureComponent {
  render() {
    return (
      <Parallax bgImage={bgImg} strength={500}>
        <div style={{ height: 500 }}>
          <PerspectiveCard
            title="软件工程"
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
