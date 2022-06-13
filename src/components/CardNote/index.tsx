import React from 'react';
import { Image } from 'react-native';
import { Container, TitleArea, Title, Subtitle, LocationText, Divider, TrashIcon, TrashButton } from './styles';
import Trash from '../../assets/trash.png'

interface CardProps {
  title: string;
  subtitle: string;
  location: string;
  onPress: any;
}

const CardNote = ({title, subtitle, location, onPress}:CardProps) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <LocationText>{location}</LocationText>
      <Divider />
    </Container>
  )
}

export default CardNote;