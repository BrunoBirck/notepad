import React from 'react';
import { Container, Title, Subtitle, LocationText, Divider } from './styles';

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
      <Subtitle numberOfLines={1} ellipsizeMode="tail">{subtitle}</Subtitle>
      <LocationText>{location}</LocationText>
      <Divider />
    </Container>
  )
}

export default CardNote;