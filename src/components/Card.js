import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  state = {
    removeButton: false,
  };

  render() {
    const { returnHasTrunfo } = this.props;
    const { cardPreview } = this.props;
    const { cardName } = this.props;
    const { cardDescription } = this.props;
    const { cardAttr1 } = this.props;
    const { cardAttr2 } = this.props;
    const { cardAttr3 } = this.props;
    const { cardImage } = this.props;
    const { backGroundImage } = this.props;
    const { cardRare } = this.props;
    const { cardTrunfo } = this.props;
    const { removeButton } = this.state;
    const handleClickDelete = () => {
      this.setState({ removeButton: true });
      if (cardTrunfo) returnHasTrunfo();
    };
    return (
      <div className='sla-div'>
        {
          !removeButton
      && (
        <div className={cardPreview ? 'card-preview' : 'card'}>
          <div className='card-title-div'>
            <h1 data-testid="name-card">{ cardName }</h1>
          </div>
          <div className={cardPreview ? 'image-div-preview' : 'image-div'}>
            <img className='background-img-blur' src={ backGroundImage } alt='no-img-blur'/>
            <img className={cardPreview ? 'background-img-preview' : 'background-img'} src={ backGroundImage } alt='no-img'/>
            <img className={cardPreview ? 'image-blur-preview' : 'image-blur'} src={ cardImage } alt='img-blur' data-testid="image-card" />
            <img className={cardPreview ? 'image-preview' : 'image'} src={ cardImage } alt={ cardName } data-testid="image-card" />
          </div>
          <p data-testid="description-card">{ cardDescription }</p>
          <p data-testid="attr1-card">{cardAttr1}</p>
          <p data-testid="attr2-card">{cardAttr2}</p>
          <p data-testid="attr3-card">{cardAttr3}</p>
          <p data-testid="rare-card">{ cardRare }</p>
          { cardTrunfo && <h2 data-testid="trunfo-card">Super Trunfo</h2> }
          {
            !cardPreview && (
              <button
                data-testid="delete-button"
                type="button"
                onClick={ handleClickDelete }
              >
                Excluir
              </button>)
          }

        </div>)
        }
      </div>
    );
  }
}

Card.propTypes = {
  returnHasTrunfo: PropTypes.func.isRequired,
  cardPreview: PropTypes.bool.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
