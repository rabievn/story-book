import React from "react";
import {Preview} from '@storybook/react';
import Center from "../src/components/Center/Center";
import {ChakraProvider, CSSReset, theme} from "@chakra-ui/react";
import {withConsole} from '@storybook/addon-console';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
            options: {
                storySort: (a: any, b: any) =>
                    a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, {numeric: true}),
            },
        },
    },
    tags: ['autodocs'],
    decorators: [
        (storyFn, context) => withConsole()(storyFn)(context),
        (Story: any) => (
            <Center>
                <ChakraProvider theme={theme}>
                    <CSSReset/>
                    <Story/>
                </ChakraProvider>
            </Center>
        ),
    ]
};

export default preview;
