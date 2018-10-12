import * as React from 'react';
import { Parallax } from 'react-parallax';
import PerspectiveCard from 'x-components/common/card/PerspectiveCard';

const bgImg =
  'https://user-images.githubusercontent.com/5803001/45228847-daf52d00-b2f6-11e8-9367-a48c196da018.png';

export default class Infrastructure extends React.PureComponent {
  render() {
    return (
      <Parallax bgImage={bgImg} strength={500}>
        <div style={{ height: 500 }}>
          <PerspectiveCard
            title="基础架构"
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
