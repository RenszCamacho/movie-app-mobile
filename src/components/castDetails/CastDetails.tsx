import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {URL_BASE_IMAGE} from '@env';

import {Cast} from '../../types/creditDetails.interface';
import {globalTheme} from '../../../globalThemes';

interface Props {
  actors: Cast;
}

export default function CastDetails({actors}: Props) {
  const {text} = globalTheme;
  const {container, textWrapper, textName, textCharacter, actorImage} = styles;
  const uri = `${URL_BASE_IMAGE}${actors.profile_path}`;

  return (
    <View style={container}>
      {actors.profile_path && <Image style={actorImage} source={{uri}} />}
      <View style={textWrapper}>
        <Text style={[text, textName]}>{actors.name}</Text>
        <Text style={[text, textCharacter]}>{actors.character}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.09,
    shadowRadius: 1.5,

    elevation: 2,
  },
  textWrapper: {
    paddingRight: 15,
    marginLeft: 10,
  },
  textName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textCharacter: {
    fontSize: 16,
    opacity: 0.7,
  },
  actorImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
