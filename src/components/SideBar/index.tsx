import React from 'react';
import StickyBox from 'react-sticky-box';
import List from '../List';
import News from '../News';
import FollowSuggestion from "../FollowSuggestion";
import {
  Container, 
  SearchWrapper, 
  SearchInput, 
  SearchIcon, 
  Body
} from "./style";

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder={"Buscar no Twitter"}/>
        <SearchIcon/>
      </SearchWrapper>
      <StickyBox>
      <Body>
        <List 
          title={'Talvez você curta'}
          elements={[
            <FollowSuggestion name={'Elon Musk'} nickname={'@elonmusk'}/>,
            <FollowSuggestion name={'Bill Gates'} nickname={'@gatesBill'}/>,
            <FollowSuggestion name={'Barack Obama'} nickname={'@obama'}/>,
          ]}
        />
        
        <List
          title={'O que está acontecendo?'}
          elements={[
            <News/>,
            <News/>,
            <News/>,
          ]}
        />

      </Body>
        </StickyBox>
    </Container>
  );
} 

export default SideBar;