import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons/faInfoCircle';

class InfoBox extends React.Component {

  render() {
    return (
      <div className='alert alert-info'>
        <FontAwesomeIcon icon={faInfoCircle} style={{'marginRight': '5px'}}/>
        {this.props.schema.info}
      </div>
    );
  }
}

export default InfoBox;
