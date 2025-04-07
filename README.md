# Pixel RetroUI

[RetroUI](https://www.retroui.io/) is a pixelated UI component library for React and Next.js applications with a retro gaming aesthetic.

<img width="1512" alt="Pixel RetroUI Screenshot" src="https://github.com/user-attachments/assets/f54081b1-a913-4574-aac1-b5b043b566a4" />

## Features

- Pixelated, retro gaming-inspired components
- Seamless integration with React and Next.js
- TypeScript support
- Tailwind CSS compatible

## Quick Start

### Setup

#### CLI Setup (Recommended)
1. In your terminal:
   ```bash
   npx pixel-retroui
   ```
   Follow the instructions in the CLI. It will automatically install dependencies, configure your project, and create necessary setup files.

2. For Next.js, in your layout.tsx file add: `import '@/lib/pixel-retroui-setup.js';`

#### Manual Setup

1. Install the package:
    ```bash
   npm i pixel-retroui@latest
   ```

3. Add to your CSS file:
   ```css
   @import 'pixel-retroui/dist/index.css';
   /* For Minecraft font */
   @import 'pixel-retroui/dist/fonts.css';
   ```

### Basic Usage
Simply import and use:
```jsx
import { Button, Card } from 'pixel-retroui';

function App() {
  return (
    <div>
      <h1 className="font-minecraft">Retro App</h1>
      <Card className="p-4 mb-4">
        <p>This is a pixel-styled card</p>
      </Card>
      <Button>Click me!</Button>
    </div>
  );
}
```

## Components

Pixel RetroUI includes the following components:

| Component | Description |
|-----------|-------------|
| [Accordion](https://retroui.io/accordion) | Collapsible content sections |
| [Bubble](https://retroui.io/bubble) | Speech/thought bubble elements |
| [Button](https://retroui.io/button) | Customizable buttons with pixel styling |
| [Card](https://retroui.io/card) | Container for content with pixel borders |
| [Dropdown](https://retroui.io/dropdown) | Selectable dropdown menus |
| [Input](https://retroui.io/input) | Text input fields |
| [Popup](https://retroui.io/popup) | Modal dialogs and notifications |
| [ProgressBar](https://retroui.io/progressbar) | Visual progress indicators |
| [TextArea](https://retroui.io/textarea) | Multi-line text input fields |

Visit our [components page](https://retroui.io/components) for detailed documentation and examples.

## Customization

Components can be customized using props and Tailwind CSS classes:

```jsx
<Button 
  bg="#c381b5" 
  textColor="#fefcd0"
  shadow="#fefcd0"
  className="px-6 py-2"
>
  Custom Button
</Button>
```

## Troubleshooting

Common issues:

- **Fonts not loading**: Ensure you've imported `pixel-retroui/dist/fonts.css`
- **Components not styled**: Check you've imported `pixel-retroui/dist/index.css`
- **Tailwind conflicts**: Add `important: true` in your tailwind.config.js

## Contributing

We welcome contributions! See our [contribution guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request (make it as detailed as possible :))

## Support

- [GitHub Issues](https://github.com/Dksie09/RetroUI/issues)
- [Documentation repo](https://retroui.io/docs)

## License

This project is licensed under the BSD 3-Clause License - see the [LICENSE](LICENSE) file for details.

---

If you find this library useful, consider [buying me a coffee](https://buymeacoffee.com/dakshiegoel) ☕
