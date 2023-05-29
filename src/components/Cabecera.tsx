import { Text, styled } from 'tamagui';

const Cabecera = styled(Text, {
  variants: {
    isHero: {
      true: {
        fontSize: 36,
        backgroundColor: 'blue',
        color: 'white',
        padding: 10,
      },
      false: {
        fontSize: 16,
        backgroundColor: 'red',
        color: 'white',
      },
    },
  },
});

export default Cabecera;
