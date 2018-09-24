import * as React from 'react';

import './Banner.scss';

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
            <h2>Just Coder, Travel in Galaxy</h2>
          </div>
          <div>
            <div
              className="github-card"
              data-github="wxyyxc1992"
              data-width="350"
              data-theme="medium"
            />
          </div>
        </div>
      </section>
    );
  }
}
