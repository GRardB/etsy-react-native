import React, { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  guessForm: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  guessFormControls: {
    alignItems: 'stretch',
    justifyContent: 'center',
    width: 200,
  },
  guessFormInput: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    marginTop: 10,
    textAlign: 'center',
  },
  guessFormButton: {
    backgroundColor: '#2a9fd6',
    borderRadius: 2,
    color: '#ffffff',
    marginTop: 10,
    paddingVertical: 10,
    textAlign: 'center',
  },

  listing: {
    alignItems: 'center',
  },
  listingImage: {
    height: 135,
    width: 175,
  },
  listingTitle: {
    marginHorizontal: 50,
    marginTop: 10,
    textAlign: 'center',
  },

  loadingSpinner: {
    height: 80
  },
});
