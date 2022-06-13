import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
`;

export const TitleArea = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text`
  font-size: 18px;
  color: #0A1747;
  font-weight: bold;
  text-align: left;
`

export const Subtitle = styled.Text`
  font-size: 14px;
  color: #9F9F9F;
  font-weight: 500;
  text-align: left;
`

export const LocationText = styled.Text`
  font-size: 10px;
  color: #9F9F9F;
  font-weight: 500;
  text-align: right;
`

export const Divider = styled.View`
  width: 100%;
  height: 2px;
  background-color: #EEE;
`

export const TrashIcon = styled.Image`
  width: 20px;
  height: 20px;
`

export const TrashButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
`