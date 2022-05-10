import { ReactElement } from 'react';
import { Container, Description, Title } from './styles';


export function Home(): ReactElement {
  return <Container>
    <Title>
      RSVP
      <small>.now</small>
    </Title>
    <Description>soon</Description>
  </Container>;
}