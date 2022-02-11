import React from 'react';
import {StyleSheet} from 'react-native';

const DIRECTION: ViewStyle = {
  justifyContent: 'space-around',
  flexDirection: 'row',
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  topView: {
    flex: 1 / 7,
    ...DIRECTION,
    alignItems: 'center',
  },
  centerView: {
    flex: 3 / 7,
  },
  bottomView: {
    flex: 3 / 7,
    alignItems: 'center',
  },
  name: {
    ...DIRECTION,
  },
  viewImage: {
    marginHorizontal: 20,
    ...DIRECTION,
  },
  image: {
    width: 200,
    aspectRatio: 1,
  },
  text: {
    fontSize: 32,
    fontWeight: '300',
  },
  button: {
    backgroundColor: '#1A0DAB',
    marginVertical: 16,
    width: '50%',
    height: 60,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 32,
    color: 'white',
    fontWeight: '500',
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
  },
  nameText: {
    fontSize: 32,
    color: 'brown',
  },
});

export default styles;