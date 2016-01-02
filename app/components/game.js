import React, {
  ActivityIndicatorIOS ,
  Component,
  View
} from 'react-native';

import GuessForm from './guess-form';
import styles from '../styles/game';

export default class Game extends Component {
  render() {
    const {
      dispatch,
      isLoading,
      listing,
      setLoaded,
      onGuess,
      onTypeGuess
    } = this.props;

    const content = isLoading
                  ? this.renderLoadingSpinner()
                  : this.renderGuessForm(listing, onGuess, onTypeGuess);

    return (
      <View style={styles.container}>
        {content}
      </View>
    );
  }

  renderGuessForm(listing, onGuess, onTypeGuess) {
    return (
      <GuessForm listing={listing} onGuess={onGuess} onTypeGuess={onTypeGuess} />
    );
  }

  renderLoadingSpinner() {
    return (
      <ActivityIndicatorIOS
        animating={true}
        style={styles.loadingSpinner}
        size="large"
      />
    );
  }
}
