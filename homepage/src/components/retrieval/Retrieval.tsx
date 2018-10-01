import { Divider } from 'antd';
import * as React from 'react';
import {
  InstantSearch,
  Hits,
  SearchBox,
  RefinementList,
  CurrentRefinements,
  ClearRefinements,
  Pagination,
  Configure,
  Stats
} from 'react-instantsearch-dom';

import 'instantsearch.css/themes/reset.css';
import 'instantsearch.css/themes/algolia.css';

import './Retrieval.scss';

const prefix = 'retrieval';

export default class Retrieval extends React.PureComponent {
  render() {
    return (
      <section className={prefix}>
        <div className={`${prefix}-header`}>
          <h2>Knowledge Retrieval | 知识检索</h2>
          <img
            src="https://www.algolia.com/assets/pricing_new/algolia-powered-by-2ab4dcc4def7b9fe7dfc1fd8eef1da99.svg"
            alt=""
          />
        </div>
        <Divider style={{ margin: '8px 0 16px 0' }} />
        <InstantSearch appId="35UOMI84K6" apiKey="632bd8009b7260d30a352e9d9b14d552" indexName="doc">
          <Configure
            hitsPerPage={10}
            attributesToSnippet={['content:100']}
            snippetEllipsisText=" [...]"
          />
          <div className={`${prefix}-search-box`}>
            <SearchBox />
            <div className="stats">
              <Stats />
              <CurrentRefinements />
              <ClearRefinements />
            </div>
          </div>
          <div>
            <div className="refinements">
              <RefinementList searchable={true} showMore={true} attribute="categories" />
              <RefinementList searchable={true} showMore={true} attribute="repo" />
            </div>
            <div className="hits">
              <Hits />
              <Pagination />
            </div>
          </div>
        </InstantSearch>
      </section>
    );
  }
}
