import { Avatar, Tag } from 'antd';
import Ellipsis from 'ant-design-pro/lib/Ellipsis';
import React from 'react';
import { Highlight } from 'react-instantsearch-dom';
import IndexItem from 'src/models/IndexItem';

const prefix = 'retrieval';

export function LinkHit({ hit }: { hit: IndexItem }) {
  return (
    <div className={`${prefix}-hit`}>
      <div className="left">
        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>X</Avatar>
        <div className="repo">
          <Tag>
            <Ellipsis length={10} tooltip={true}>
              {hit.year}
            </Ellipsis>
          </Tag>
          <Tag>
            <Ellipsis length={10} tooltip={true}>
              {hit.type}
            </Ellipsis>
          </Tag>
        </div>
        <div className="categories">
          {hit.categories.map(category => (
            <Tag color="cyan" key={category}>
              <Ellipsis length={10} tooltip={true}>
                {category}
              </Ellipsis>
            </Tag>
          ))}
        </div>
      </div>
      <div className="right">
        <div className="title">
          <a className="fileName" href={hit.href} target="__blank" style={{ flex: '150px 1 1' }}>
            <Ellipsis length={50} tooltip={true}>
              {hit.title}
            </Ellipsis>
          </a>
        </div>
        <div className="content">
          <Highlight hit={hit} attribute="desc" />
        </div>
      </div>
    </div>
  );
}
