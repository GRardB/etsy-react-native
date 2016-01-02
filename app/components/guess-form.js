import React, {
  Component,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import Listing from './listing';
import styles from '../styles/game';

export default class GuessForm extends Component {
  render() {
    const { listing, onGuess, onTypeGuess } = this.props;

    return (
      <View style={styles.guessForm}>
        <Listing listing={listing} />
        <View style={styles.guessFormControls}>
          <View>
            <TextInput
              style={styles.guessFormInput}
              onChangeText={onTypeGuess}
              keyboardType={'decimal-pad'}
            />
          </View>

          <TouchableOpacity onPress={onGuess}>
            <Text style={styles.guessFormButton}>
              Guess
            </Text>
          </TouchableOpacity>
          <KeyboardSpacer />
        </View>

      </View>
    );
  }
}
