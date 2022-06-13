import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const HeaderArea = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const BackButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-bottom: 20px;
`

export const BackIcon = styled.Image`
  width: 40px;
  height: 40px;
`

export const Content = styled.ScrollView`
  flex: 1;
  width: 100%;
  padding: 15px;
`

export const TitleInput = styled.TextInput`
  font-size: 20px;
  font-weight: bold;
  padding: 15px;
  color: #0A1747;
`

export const BodyInput = styled.TextInput`
  flex: 1;
  font-size: 14px;
  padding: 15px;
  color: #333;
`

export const DeleteButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
`

export const DeleteIcon = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 30px;
`