import * as React from 'react';
import { Parallax } from 'react-parallax';
import PerspectiveCard from '../../shared/card/PerspectiveCard';

const bgImg =
  'https://user-images.githubusercontent.com/5803001/44629093-c753d900-a97c-11e8-8c16-9d0e96b149aa.png';

export default class AI extends React.PureComponent {
  render() {
    return (
      <Parallax bgImage={bgImg} strength={500}>
        <div style={{ height: 500 }}>
          <PerspectiveCard
            title="人工智能与机器学习"
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
