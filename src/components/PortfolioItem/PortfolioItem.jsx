import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const PortfolioItem = (props, context) => {
  const { theme: { colorPrimary, textAlternate } } = context;

  if (props.render) return props.render;
  else
    return (
      <div
        className="portfolio-item"
        style={{ backgroundColor: colorPrimary, color: textAlternate }}
      >
        <div className="portfolio-item__title">Item Title</div>

        <div className="portfolio-item__desc">
          Item Description!
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-js" />
          <i className="fab fa-react" />
          <i className="fab fa-html5" />
        </div>
        <div className="portfolio-item__links">
          <button>Code</button>
          <button>Blog</button>
        </div>
      </div>
    );
};

PortfolioItem.contextTypes = {
  theme: PropTypes.any
};

export default PortfolioItem;