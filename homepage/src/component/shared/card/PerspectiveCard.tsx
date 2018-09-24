import * as React from 'react';

import './PerspectiveCard.scss';

interface PerspectiveCardProps {
  title: string;
  style?: object;
}
interface PerspectiveCardState {}

const prefix = 'perspective-card';

export default class PerspectiveCard extends React.PureComponent<
  PerspectiveCardProps,
  PerspectiveCardState
> {
  render() {
    const { title, style } = this.props;

    return (
      <section className={prefix} style={style}>
        <h2>{title}</h2>
      </section>
    );
  }
}
