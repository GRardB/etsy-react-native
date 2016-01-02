import React, {
  Component,
  Image,
  Text,
  View
} from 'react-native';

import styles from '../styles/game';

export default class Listing extends Component {
  render() {
    const { listing } = this.props;
    const imageSource = {
      uri: listing.imageUrl
    };

    return (
      <View style={styles.listing}>
        <Image source={imageSource} style={styles.listingImage} />
        <Text style={styles.listingTitle}>{listing.title}</Text>
      </View>
    );
  }
}
