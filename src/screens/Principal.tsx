import React from 'react';
import { Button, Card, Checkbox, Spinner, Stack, Text, Theme } from 'tamagui';
import { Check } from '@tamagui/lucide-icons';
import Cabecera from '../components/Cabecera';
// import CheckboxWithLabel from '../components/CheckboxWithLabel';

const Principal = () => {
  return (
    <Stack margin={10}>
      <Theme name='dark'>
        <Cabecera isHero={false}>Texto Cabecera</Cabecera>
        <Button size={40} fontSize={16}>
          I&apos;m a really dark button
        </Button>
        <Card alignItems='center' padding='$5'>
          <Text fontSize={20} color='white'>
            My Card Content
          </Text>
          <Button size={30} marginTop='$5'>
            My Button
          </Button>
        </Card>
        <Spinner size='large' color='$green10' marginTop='$5' />
        {/*
        <YStack width={300} alignItems='center' space='$2'>
          <CheckboxWithLabel size='$3' />
          <CheckboxWithLabel size='$4' defaultChecked />
          <CheckboxWithLabel size='$5' />
        </YStack>        
        */}
        <Checkbox size='$4'>
          <Checkbox.Indicator>
            <Check />
          </Checkbox.Indicator>
        </Checkbox>
      </Theme>
    </Stack>
  );
};

export default Principal;
