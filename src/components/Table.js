import React from 'react';
import Form from './Form';
import Card from './Card';
import img1 from '../media/form1.png'
import img2 from '../media/form2.png'
import img3 from '../media/form3.png'
import img4 from '../media/form4.png'
import img5 from '../media/form5.png'

const allFormImages = [img1, img2, img3, img4, img5]
const getRamdowImage = () => {
  const ramdowNumber = Math.floor(Math.random() * 5);
  return allFormImages[ramdowNumber]
}

const actualCards = [
  {
    cardDescription: 'Bodybuilder de 27 anos, campeão 5 vezes seguidas do Mr.Olympia, Chris atualmente é o melhor do mundo.',
    cardName: 'Chris Bumstead',
    cardImage: 'https://pbs.twimg.com/profile_images/1408265670521917441/12q0mSTo_400x400.jpg',
    backGroundImage: img2,
    cardAttr1: 66,
    cardAttr2: 69,
    cardAttr3: 68,
    cardRare: 'Muito Raro',
    cardTrunfo: false,
  }
]

class Table extends React.Component {
  state = {
    cardDescription: '',
    cardName: '',
    cardImage: '',
    backGroundImage: getRamdowImage(),
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    hasTrunfo: false,
    cards: actualCards,
    nameFilter: '',
    rareFilter: 'todas',
    trunfoFilter: false,
  };

  save = (event) => {
    event.preventDefault();
    const { cardDescription, cardName, cardImage, backGroundImage, cardAttr1,
      cardAttr2, cardAttr3, cardRare,
      cardTrunfo, cards } = this.state;
    if (cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }
    this.setState({ cards: [...cards, { cardDescription,
      cardName,
      cardImage,
      backGroundImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo }],
    cardDescription: '',
    cardName: '',
    cardImage: '',
    backGroundImage: getRamdowImage(),
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true });
  };

  ovo1 = () => {
    const { cardDescription, cardName, cardImage, cardRare } = this.state;
    let trfl = true;
    let trfl2 = true;
    if (cardDescription !== '' && cardName !== '') {
      trfl = false;
    }
    if (cardImage !== '' && cardRare !== '') {
      trfl2 = false;
    }
    if (trfl2 === false && trfl === false) {
      return false;
    }
  };

  ovo2 = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const a1 = parseInt(cardAttr1, 10);
    const a2 = parseInt(cardAttr2, 10);
    const a3 = parseInt(cardAttr3, 10);
    let r1 = true;
    let r2 = true;
    let r3 = true;
    let r = true;
    let o = true;
    const max = 210;
    const N9 = 90;
    if (a1 >= 0 && a1 <= N9) {
      r1 = false;
    }
    if (a2 >= 0 && a2 <= N9) {
      r2 = false;
    }
    if (a3 >= 0 && a3 <= N9) {
      r3 = false;
    }
    if ((a1 + a2 + a3) <= max) {
      r = false;
    }
    if (r1 === false && r2 === false && r3 === false && r === false) {
      o = false;
    }
    return o;
  };

  ovo = () => {
    const r1 = this.ovo1();
    const r2 = this.ovo2();
    if (r1 === false && r2 === false) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  handleChange = async (event) => {
    const { target } = event;
    const { name, value, type } = target;
    this.setState({ [name]: type === 'checkbox' ? target.checked : value }, () => {
      this.ovo();
    });
  };

  handleFilter = (arr) => {
    const { nameFilter, rareFilter, trunfoFilter } = this.state;
    if (trunfoFilter) {
      const onlyTrunfo = arr.filter((card) => card.cardTrunfo === true);
      return onlyTrunfo;
    }
    const filteredName = arr.filter((card) => card.cardName.includes(nameFilter));
    if (rareFilter === 'todas') return filteredName;
    const rare = filteredName.filter((card) => card.cardRare === rareFilter);
    return rare;
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      backGroundImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      cards,
      nameFilter,
      rareFilter,
      trunfoFilter,
    } = this.state;
    const returnHasTrunfo = () => {
      this.setState({ hasTrunfo: false });
    };
    const tru = true;
    const fal = false;
    const cardsFiltered = this.handleFilter(cards);
    return (
      <div>
        <div className='input-card'>
          <div className='form-div'>
            <div className='input-title-div'>
              <h3 className='input-title'>Criar card</h3>
            </div>
            <div className='text-div'>
              <text className='input-text'>Cada atributo não pode ser um número negativo, e nem um número maior do que 90,
                os três atributos somados não podem passar de 210.<br></br>Só é possível possuir uma carta "GIGACHAD".
              </text>
            </div>
          <div className='only-form'> 
          <Form 
            onInputChange={ this.handleChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.save }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            />
          </div>
          </div>
          <div className='preview-card'>
          <h3 className='card-preview-title'>Card Preview</h3>
          <Card
            returnHasTrunfo={ returnHasTrunfo }
            cardPreview={ tru }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            backGroundImage={backGroundImage}
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            />
          </div>
        </div>
        <div className='done-cards'>
          <div className='filter-div'>
          <input
            disabled={ trunfoFilter }
            data-testid="name-filter"
            type="text"
            name="nameFilter"
            value={ nameFilter }
            onChange={ this.handleChange }
          />
          <select
            disabled={ trunfoFilter }
            data-testid="rare-filter"
            name="rareFilter"
            onChange={ this.handleChange }
            value={ rareFilter }
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          <input
            data-testid="trunfo-filter"
            type="checkbox"
            name="trunfoFilter"
            checked={ trunfoFilter }
            onClick={ this.handleChange }
          />
          </div>
          <div className='only-cards-div has-scrollbar'>
          {cardsFiltered.map((ele) => (<Card
            key={ ele.cardName }
            returnHasTrunfo={ returnHasTrunfo }
            cardPreview={ fal }
            cardName={ ele.cardName }
            cardDescription={ ele.cardDescription }
            cardAttr1={ ele.cardAttr1 }
            cardAttr2={ ele.cardAttr2 }
            cardAttr3={ ele.cardAttr3 }
            cardImage={ ele.cardImage }
            backGroundImage={ ele.backGroundImage}
            cardRare={ ele.cardRare }
            cardTrunfo={ ele.cardTrunfo }
            />))}
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
