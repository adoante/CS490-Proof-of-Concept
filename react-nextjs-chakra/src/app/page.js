import { AbsoluteCenter, VStack } from '@chakra-ui/react';
import ButtonAPI from '../components/ButtonAPI'

export default function Home() {
  return (
    <AbsoluteCenter>
      <VStack>
        <ButtonAPI></ButtonAPI>
      </VStack>
    </AbsoluteCenter>
  );
}
