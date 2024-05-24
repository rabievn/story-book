import React from "react";
import {Button, ChakraProvider} from "@chakra-ui/react";

export default {
    title: 'Chakra/Button',
    component: Button
}

export const Success = () => <Button colorScheme="teal" bg="teal.500">Success</Button>;
export const Danger = () =>  <Button colorScheme='blue'>Button</Button>


