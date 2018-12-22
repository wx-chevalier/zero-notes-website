import * as React from 'react';

import './GHUserCard.scss';

export default class GHUserCard extends React.Component {
  render() {
    return (
      <section className="fc-react-gh-card">
        <div className="github-card user-card">
          <div className="header User" />
          <a className="avatar" href="https://github.com/wxyyxc1992" target="_top">
            <img
              src="https://avatars2.githubusercontent.com/u/5803001?v=4&amp;s=80"
              alt="王下邀月熊 - WxChevalier"
            />
          </a>
          <div className="content">
            <h1>王下邀月熊 - WxChevalier</h1>
            <ul className="status">
              <li>
                <a href="https://github.com/wxyyxc1992?tab=repositories" target="_top">
                  <strong>32</strong>
                  Repos
                </a>
              </li>
              <li>
                <a href="https://gist.github.com/wxyyxc1992" target="_top">
                  <strong>2</strong>
                  Gists
                </a>
              </li>
              <li>
                <a href="https://github.com/wxyyxc1992/followers" target="_top">
                  <strong>2.6k</strong>
                  Followers
                </a>
              </li>
              <li>
                <a href="https://github.com/wxyyxc1992" target="_top">
                  <strong>10k</strong>
                  Stargazers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
