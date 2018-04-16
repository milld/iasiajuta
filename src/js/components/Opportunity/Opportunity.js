import React, { Component, PropTypes } from 'react';
import Button from '../Button/Button';
import './Opportunity.css';

class Opportunity extends Component {
  renderImage({image}) {
    const style = {
      backgroundImage: `url(${image})`
    };

    return <div className='Opportunity-Image' style={style}></div>;
  }

  renderTitle({title}) {
    return <h3>{title}</h3>
  }

  renderDescription({description}) {
    return <span className='Opportunity-Description'>{description}</span>;
  }

  renderLogo({logo, title}) {
    return <img className='Opportunity-Logo' src={logo} alt={title} />;
  }

  renderButton({button}) {
    return <Button content={button.content} link={button.link} />;
  }

  render() {
    return (
      <div className='Opportunity'>
        <div className='Opportunity-ImageContainer'>
          {this.renderImage({...this.props})}
        </div>

        <div className='Opportunity-Details'>
          {this.renderTitle({...this.props})}
          {this.renderDescription({...this.props})}
          {this.renderLogo({...this.props})}
          {this.renderButton({...this.props})}
        </div>
      </div>
    );
  }
};

Opportunity.defaultProps = {
  title: 'Heading',
  image: 'https://bucharest-marathon.com/wp-content/uploads/2016/09/Echipa-Salvati-Copiii-la-maraton-9-octombrie.jpg',
  button: {
    content: 'Ajută',
    link: '/oportunitati/123'
  },
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
  logo: 'http://www.protectiacopilului6.ro/thumb_500x500_1838-salvatii-copii.jpg'
};

Opportunity.PropTypes = {
  title: PropTypes.string
};

export default Opportunity;