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
import { Tabs } from 'antd';
import 'instantsearch.css/themes/reset.css';
import 'instantsearch.css/themes/algolia.css';

import { DocHit } from './DocHit';
import './Retrieval.scss';
import { LinkHit } from './LinkHit';

const { TabPane } = Tabs;
const prefix = 'retrieval';

interface Props {}

interface States {
  searchState: object;
}

export default class Retrieval extends React.PureComponent<Props, States> {
  constructor(props: Props) {
    super(props);

    // 解析路径参数
    const hash = location.hash;

    let query: string = '';

    if (hash.indexOf('/search?') > -1) {
      const search = new URLSearchParams(hash.split('?')[1]);

      query = search.get('query') || '';
    }

    this.state = { searchState: { query } };
  }

  renderSearch(index: string, hitComponent: any) {
    return (
      <InstantSearch
        appId="35UOMI84K6"
        apiKey="632bd8009b7260d30a352e9d9b14d552"
        indexName={index}
        searchState={this.state.searchState}
        onSearchStateChange={(searchState: object) => {
          this.setState({
            searchState
          });
        }}
      >
        <Configure
          hitsPerPage={10}
          attributesToSnippet={['content:100']}
          snippetEllipsisText="[...]"
        />
        <div className={`${prefix}-search`}>
          <div className="left">
            <div className={`${prefix}-refinements`}>
              {index === 'link' && (
                <div className="refinement">
                  <h4>类型</h4>
                  <Divider style={{ margin: '8px 0 4px 0' }} />
                  <RefinementList searchable={true} showMore={true} attribute="type" />
                </div>
              )}
              <div className="refinement">
                <h4>技术点</h4>
                <Divider style={{ margin: '8px 0 4px 0' }} />
                <RefinementList searchable={true} showMore={true} attribute="categories" />
              </div>
              <div className="refinement">
                <h4>仓库</h4>
                <Divider style={{ margin: '8px 0 4px 0' }} />
                <RefinementList searchable={true} showMore={true} attribute="repo" />
              </div>
            </div>
          </div>
          <div className="right">
            <div className={`${prefix}-search-box`}>
              <SearchBox searchAsYouType={false} />
              <div className="stats">
                <Stats />
                <CurrentRefinements />
                <ClearRefinements />
              </div>
            </div>
            <div className="hits">
              <Hits hitComponent={hitComponent} />
              <Pagination />
            </div>
          </div>
        </div>
      </InstantSearch>
    );
  }

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
        <Tabs tabPosition="left">
          <TabPane tab="链接/书籍" key="link">
            {this.renderSearch('link', LinkHit)}
          </TabPane>
          <TabPane tab="文章" key="doc">
            {this.renderSearch('doc', DocHit)}
          </TabPane>
          <TabPane tab="代码" key="code" disabled={true}>
            Content of Tab 3
          </TabPane>
          <TabPane tab="图片" key="image" disabled={true}>
            Content of Tab 4
          </TabPane>
        </Tabs>
      </section>
    );
  }
}
