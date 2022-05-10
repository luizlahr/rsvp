import { styled } from 'styles/stitches.config';

export const Container = styled('main', {
  position: 'relative',
  display: 'flex',

  w: '100vw',
  h: '100vh',

  justify: 'center',
  align: 'center',

  direction: 'column',
});

export const Title = styled('h1', {
  position: 'relative',
  display: 'flex',

  fontSize: '$10',
  color: '$gray500',

  align: 'baseline',

  small: {
    fontSize: '$6',
    color: '$blue600',
    ml: '-$4'
  }
});

export const Description = styled('p', {
  position: 'relative',
  display: 'flex',

  fontSize: '$4',
  color: '$gray600',
  fontWeight: '500',
  fontStyle: 'italic',

  mt: '$5'
});