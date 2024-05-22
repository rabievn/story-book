import type {Preview} from "@storybook/react";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
            options: {
                storySort: (a: any, b: any) =>
                    a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
            },
        },
    },
};

export default preview;
