import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #0A1747;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`

export const AddButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: #0A1747;
  border-radius: 40px;
  position: absolute;
  bottom: 40px;
  right: 30px;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

export const AddIcon = styled.Image`
  width: 30px;
  height: 30px;
`

export const NotesList = styled.FlatList`
  flex: 1;
  width: 90%;
`

export const NotesIcon = styled.Image`
  width: 100px;
  height: 100px;
`

export const NotesArea = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const NotesText = styled.Text`
  font-size: 16px;
  color: #9F9F9F;
  font-weight: 500;
  text-align: center;
  margin-top: 10px;
`