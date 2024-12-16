import React from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import type { Preview } from "@storybook/react"
import { withThemeByClassName } from "@storybook/addon-themes"

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      defaultTheme: "light",
      themes: { light: "", dark: "dark" },
    }),
    (Story) => (
      <ChakraProvider value={defaultSystem}>
        <Story />
      </ChakraProvider>
    ),
  ],
}

export default preview