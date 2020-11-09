import React from "react";
import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from "./style";

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon/>
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar/>
        <Content>
          <Header>
            <strong>Alexsander</strong>
            <span>@_alexsanderfer</span>
            <Dot/>
            <time>9 de nov</time>
          </Header>
          <Description>Foguete não tem ré 🚀</Description>
          <ImageContent/>
          <Icons>
            <Status>
              <CommentIcon/>
              12
            </Status>
            <Status>
              <RetweetIcon/>
              13
            </Status>
            <Status>
              <LikeIcon/>
              99
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;