import React from 'react';
import CardNote from '../../components/CardNote';
import { Container, Title, AddButton, AddIcon, NotesList, NotesArea, NotesIcon, NotesText } from './styles';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Plus from '../../assets/plus.png';
import Notes from '../../assets/notes.png';

const EditScreen = () => {
  const navigation = useNavigation();
  const notes = useSelector(state => state.notes.list);

  const handleNotePress = (index) => {
    navigation.navigate('EditNote', {
      key: index
    })
  }

  return(
    <Container>
      <AddButton onPress={() => navigation.navigate('EditNote')}>
        <AddIcon source={Plus} />
      </AddButton>
      <Title>NotePad</Title>
      {notes.length > 0 ?
        <NotesList 
          data={notes}
          renderItem={({item, index}) => (
            <CardNote title={item.title} subtitle={item.content} location={item.location} onPress={() => handleNotePress(index)} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      :
        <NotesArea>
          <NotesIcon source={Notes} />
          <NotesText>Não existe nenhuma anotação</NotesText>
        </NotesArea>
      }
    </Container>
  )
}

export default EditScreen;