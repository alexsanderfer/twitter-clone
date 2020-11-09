import React from "react";
import Feed from '../Feed';
import {
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  LocationIcon, 
  CakeIcon, 
  Followage,
  EditButton
} from './style';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar/>
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Alexsander F.</h1>
        <h2>@_alexsanderfer</h2>
        <p>
          Developer at <a href="https://github.com/alexsanderfer">@Alexsander</a>
        </p>
        <ul>
          <li>
            <LocationIcon />
            Lisbon, Portugal
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 16 de Agosto de 1990
          </li>
        </ul>
        
        <Followage>
          <span>seguindo <strong>90 </strong></span>
          <span><strong>190 </strong> seguidores</span>
        </Followage>
      </ProfileData>
      <Feed/>
    </Container>
  );
}

export default ProfilePage;
