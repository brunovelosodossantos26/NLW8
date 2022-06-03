import React from 'react';
import { TouchableOpacity,
TouchableOpacityProps,
Image,
ImageProps } from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps{
    title: string;
    image: ImageProps;
}

export function Option({title, image, ...rest}: Props) {
  return (
    <TouchableOpacity 
    style={styles.container}
    {...rest}
    >
        
    </TouchableOpacity>
  );
}