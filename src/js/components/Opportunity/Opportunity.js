import React, { Component, PropTypes } from 'react';
import Title from '../Title/Title';
import Button from '../Button/Button';

class Opportunity extends Component {
  renderImage() {
    return null;
  }

  renderTitle({title}) {
    return <Title content={title} />;
  }

  renderDescription({description}) {
    return <span>{description}</span>;
  }

  renderLogo({logo}) {
    return <img src={logo} />;
  }

  renderButton({button, buttonAction}) {
    return <Button content={button} action={buttonAction} />;
  }

  render() {
    return (
      <div>
        {this.renderImage({...this.props})}
        {this.renderTitle({...this.props})}
        {this.renderButton({...this.props})}
        {this.renderDescription({...this.props})}
        {this.renderLogo({...this.props})}
      </div>
    );
  };
}

Opportunity.defaultProps = {
  title: 'Heading',
  image: 'https://bucharest-marathon.com/wp-content/uploads/2016/09/Echipa-Salvati-Copiii-la-maraton-9-octombrie.jpg',
  button: 'Ajuta',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  logo: 'http://www.protectiacopilului6.ro/thumb_500x500_1838-salvatii-copii.jpg'
};

Opportunity.PropTypes = {
  title: '',
  image: '',
  button: '',
  description: '',
  logo: ''
};

export default Opportunity;