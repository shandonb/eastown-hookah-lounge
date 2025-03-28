import { Theme } from '@chakra-ui/react';
import { Provider } from '../src/components/ui/provider.tsx';
import React from 'react';

import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'dark';
      return (
        <Provider>
          <Theme appearance={theme}>
            <Story />
          </Theme>
        </Provider>
      )
    }
  ],
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global Chakra UI theme appearance",
      defaultValue: "dark",
      toolbar: {
        icon: "circlehollow",
        items: ['light', 'dark']
      }
    }
  }
};

export default preview;