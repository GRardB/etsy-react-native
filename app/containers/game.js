import React, { Component, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';

import Game from '../components/game';
import * as actions from '../actions/game/actions';
import { getRandomListing } from '../etsy/api';

class GameContainer extends Component {
  componentDidMount() {
    this.fetchListing();
  }

  fetchListing() {
    const { state, dispatch } = this.props;
    const { listingOffset } = state;

    dispatch(actions.setLoading());

    getRandomListing(listingOffset).then((response) => {
      dispatch(actions.setLoaded(response.listing));
    });
  }

  makeGuess() {
    const { state, dispatch } = this.props;

    const price = state.listing.price;
    const { guess } = state;

    const bigger = Math.abs(Math.max(price, guess));
    const smaller = Math.abs(Math.min(price, guess));
    const difference = bigger - smaller;
    const correctness = 100 - Math.round((difference/bigger)*100*2)/2;

    alert('Actual price: $' + price.toFixed(2) + '\n' + 'Your correctness: ' + correctness + '%');

    this.fetchListing();
  }

  getTextInput(text) {
    const { dispatch } = this.props;
    dispatch(actions.setGuess(parseFloat(text)));
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <Game
        {...state}
        onGuess={this.makeGuess.bind(this)}
        onTypeGuess={this.getTextInput.bind(this)}
        {...bindActionCreators(actions, dispatch)}
      />
    );
  }
}

export default connect((state) => ({
  state: state.game
}))(GameContainer);
