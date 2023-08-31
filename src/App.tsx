import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Person from './component/Person';
import PersonList from './component/PersonList';
import Event from './component/Event';
import Input from './component/Input';
import Container from './component/Container';
import Login from './component/state/Login';
import User from './component/state/User';
import Counter from './component/state/Counter';
import { ThemeProvider } from './component/context/ThemeContext';
import Box from './component/context/Box';
import UserContextProvider from './component/context/UserConetext';
import Users from './component/context/User';
import DomRef from './component/ref/DomRef';
import MutableRef from './component/ref/MutableRef';
import { CounterClass } from './component/class/Counters';
import Private from './component/auth/Private';
import Profile from './component/auth/Profile';
import List from './component/Generic/List';
import RandomNumber from './component/restrictions/RandomNumber';
import Toast from './component/templateLiteral/Toast';
import Button from './component/html/Button';
import Text from './component/Polumorphic/Text';

function App() {
  const PersonName ={
    first:'folly',
    last:"babs"
  }
  const nameList =[
    {
      first:'folly',
      last:'babs'
    },
    {
      first:'ola',
      last:'blizz'
    },
    {
      first:'akin',
      last:'kashy'
    },
  ]
  return (
    <ThemeProvider>
      <UserContextProvider>
        <Toast position='center'/>
        <Text size='lg' as='h1'>heading</Text>
        <Text size='md' as='p'>Paragraph</Text>
        <Text size='lg' as='label' htmlFor='jello' color='secondary'>label</Text>
        <Button variant='primary' onClick={()=>console.log('123')}>hello</Button>
        <RandomNumber
          value={10}
          

        />
      <List<number>
        items={[1, 2, 3, 4]}
        onClick={(item) => console.log(item)}
      />
      <List<string>
        items={['folly', 'babs', 'w=akin', 'kashu']}
        onClick={(item) => console.log(item)}
      />
      <List<{ first: string; last: string }>
        items={[
          {
            first: 'folly',
            last: 'babs',
          },
          {
            first: 'ola',
            last: 'blizz',
          },
          {
            first: 'akin',
            last: 'kashy',
          },
        ]}
        onClick={(item) => console.log(item)}
      />
        <Private isLoggedIn={true} component={Profile}/>
       <Users/>
       <DomRef/>
       <MutableRef/>
       <CounterClass message='folly'/>
      <Container styles={{border:'1px solid red'} }/>
      <Input  value='' handleClick={(e)=>console.log('event')}/>
      <Event handleCick={(e,id)=>console.log('handle click',e,id)}/>
      <PersonList name={nameList}/>
      <Person   name={PersonName}/>
      <Greet names='folly' message={10} isLogged={false}/>
      <Login/>
      <User/>
      <Counter/>
      <Box/> 
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
