import * as React from 'react';

import './Banner.scss';
import GHCard from '../../../libs/react-gh-card/GHCard';

const prefix = 'banner';

export default class Banner extends React.Component {
  componentDidMount() {
    const addScript = document.createElement('script');
    addScript.setAttribute('src', 'https://cdn.jsdelivr.net/github-cards/latest/widget.js');
    document.body.appendChild(addScript);
  }

  render() {
    return (
      <section className={prefix}>
        <div className={`${prefix}-stars`}>
          <ul className="wrapper">
            <div className="sun">
              <div className="star" />
            </div>
            <div className="mercury">
              <div className="planet">
                <div className="shadow" />
              </div>
            </div>
            <div className="venus">
              <div className="planet">
                <div className="shadow" />
              </div>
            </div>
            <div className="earth">
              <div className="planet">
                <div className="shadow" />
              </div>
            </div>
            <div className="mars">
              <div className="planet">
                <div className="shadow" />
              </div>
            </div>
            <div className="jupiter">
              <div className="planet">
                <div className="shadow" />
              </div>
            </div>
          </ul>
        </div>
        <div className={`${prefix}-info`}>
          <div className="slogan">
            <img
              src="https://user-images.githubusercontent.com/5803001/46023444-3b69d400-c117-11e8-98d7-d18c44b6dc25.png"
              alt="Just Coder, Travel in Galaxy"
            />
          </div>
          <GHCard />
        </div>
      </section>
    );
  }
}
