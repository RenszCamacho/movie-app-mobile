import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './titleDetailsTheme';

interface Props {
  originalTitle: string;
  title: string;
}

export default function TitleDetails({title, originalTitle}: Props) {
  const {originalTitleStyle, detailsWrapper, detailsTitle} = styles;

  return (
    <View style={detailsWrapper}>
      <Text style={originalTitleStyle}>{originalTitle}</Text>
      <Text style={detailsTitle}>{title}</Text>
    </View>
  );
}
