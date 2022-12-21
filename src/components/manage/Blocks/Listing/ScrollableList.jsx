import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import './scrollableList.less';

const CardsDisplay = ({ items }) => {
  return (
    <>
      <List divided verticalAlign="middle" className="scrollable-list">
        {items.map((item) => (
          <List.Item className="listing-item" key={item['@id']}>
            {item.title}
          </List.Item>
        ))}
      </List>
    </>
  );
};

CardsDisplay.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default CardsDisplay;
