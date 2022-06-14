import React, { useState, useEffect } from 'react';
import { Container, BackButton, BackIcon, Content, TitleInput, BodyInput, DeleteButton, HeaderArea, DeleteIcon } from './styles';
import Arrow from '../../assets/arrow-left.png';
import Trash from '../../assets/trash.png';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import * as Location from 'expo-location'
import { Alert } from 'react-native';
import {GOOGLE_API_KEY} from '@env';

const EditScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes.list);

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [status, setStatus] = useState<string>('new');
  const [address, setAddress] = useState<any>();

  const getAddress = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada!')
    }
    
    Location.setGoogleApiKey(GOOGLE_API_KEY);
    let { coords } = await Location.getCurrentPositionAsync();
    if (coords) {
      let { longitude, latitude } = coords;
      let regionName = await Location.reverseGeocodeAsync({
        longitude,
        latitude,
      });
      const city = `${regionName[0].city}/${regionName[0].region}`
      setAddress(city);
    }
  }

  const handleBackButton = () => {
    if(title !== '' && description !== '') {
      if(status === 'edit') {
        dispatch({
          type: 'EDIT_NOTE',
          payload: {
            key: route.params?.key,
            title: title,
            content: description,
            location: address
          }
        })
      } else {
        dispatch({
          type: 'ADD_NOTE',
          payload: {
            title: title,
            content: description,
            location: address
          }
        })
      }
      navigation.goBack()
    } else if(title === '' && description === '') {
      navigation.goBack()
    }
  }

  const handleDelete = () => {
    dispatch({
      type: 'DEL_NOTE',
      payload: {
        key: route.params?.key
      }
    })
    navigation.goBack()
  }

  useEffect(() => {
    getAddress()
    if(route.params?.key !== undefined && notes[route.params?.key]){
      setStatus('edit')
      setTitle(notes[route.params?.key].title)
      setDescription(notes[route.params?.key].content)
    }
  }, [])

  return(
    <Container>
      <HeaderArea>
        <BackButton onPress={handleBackButton}>
          <BackIcon source={Arrow} />
        </BackButton>
        {status === 'edit' && 
          <DeleteButton onPress={handleDelete}>
            <DeleteIcon source={Trash} />
          </DeleteButton>
        }
      </HeaderArea>
      <Content>
        <TitleInput 
          value={title}
          onChangeText={(text) => setTitle(text)}
          placeholder='Digite o título da anotação'
          placeholderTextColor='#0A1747'
          autoFocus
        />
        <BodyInput 
          value={description}
          onChangeText={(text) => setDescription(text)}
          placeholder='Escreva aqui a sua anotação'
          placeholderTextColor='#333'
          multiline={true}
          textAlignVertical='top'
        />
      </Content>
    </Container>
  )
}

export default EditScreen;