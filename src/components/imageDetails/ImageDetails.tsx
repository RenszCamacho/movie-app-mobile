import React from 'react';
import {View, Image} from 'react-native';

import {styles} from './imageDetailsTheme';

interface Props {
  uriImage: string;
}

export default function ImageDetails({uriImage}: Props) {
  const {container, imageWrapper, image} = styles;

  return (
    <View style={container}>
      <View style={imageWrapper}>
        <Image source={{uri: uriImage}} style={image} />
      </View>
    </View>
  );
}
