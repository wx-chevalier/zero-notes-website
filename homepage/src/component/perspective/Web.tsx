import * as React from 'react';
import { Parallax } from 'react-parallax';
import PerspectiveCard from '../shared/card/PerspectiveCard';

const bgImg =
  'https://user-images.githubusercontent.com/5803001/44896692-a51adc00-ad2b-11e8-9be9-ac495c77932e.png';

export default class Web extends React.PureComponent {
  render() {
    return (
      <Parallax bgImage={bgImg} strength={500}>
        <div style={{ height: 500 }}>
          <PerspectiveCard
            title="Web 与大前端"
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
