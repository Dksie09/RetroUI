import type { Preview } from "@storybook/react";
// Import Tailwind CSS from globals
import "../src/styles/globals.css";
// Import a custom CSS file for Storybook that will handle fonts properly
import "./storybook.css";
// Import the component styles but not the fonts from the main app
import "../src/retroui.css";
// Import custom accordion styles for Storybook
import "./accordion.css";
// Import button styles for Storybook
import "./button.css";
// Import card styles for Storybook
import "./card.css";
// Import input styles for Storybook
import "./input.css";
// Import textarea styles for Storybook
import "./textarea.css";
// Import progressbar styles for Storybook
import "./progressbar.css";
// Import bubble styles for Storybook
import "./bubble.css";
// Import dropdown styles for Storybook
import "./dropdown.css";
// Import popup styles for Storybook
import "./popup.css";
// Import other CSS files as needed

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
