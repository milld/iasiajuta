import React, {Component} from 'react';
import './Center.css';

class Center extends Component {
  render() {
    return (
      <div className='Center'>
        {this.props.children}
      </div>
    );
  }
}

Center.defaultProps = {

};

Center.PropTypes = {

};

export default Center;