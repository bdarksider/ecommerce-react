import React, { Component, PropTypes } from 'react';
// import {Link} from 'react-router';
import { browserHistory } from 'react-router';

import './styles.sass';

class Item extends Component {
  render() {
      return(
      <div className="item">
        <div className={`content alpha${this.props.name}`}  onClick={()=>{
          browserHistory.push('/item/123');
        }} />
      </div>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string
};

export default Item;
