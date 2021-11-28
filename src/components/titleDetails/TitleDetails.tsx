import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './titleDetailsTheme';
import {globalTheme} from '../../../globalThemes';

interface Props {
  originalTitle: string;
  title: string;
}

export default function TitleDetails({title, originalTitle}: Props) {
  const {originalTitleStyle, detailsWrapper, detailsTitle} = styles;
  const {text} = globalTheme;

  return (
    <View style={detailsWrapper}>
      <Text style={[text, originalTitleStyle]}>{originalTitle}</Text>
      <Text style={[text, detailsTitle]}>{title}</Text>
    </View>
  );
}
