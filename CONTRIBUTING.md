# Contributing to Retro UI

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## We Develop with Github

We use github to host code, to track issues and feature requests, as well as accept pull requests.

## We Use [Github Flow](https://guides.github.com/introduction/flow/index.html), So All Code Changes Happen Through Pull Requests

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Any contributions you make will be under the BSD 3-Clause License

In short, when you submit code changes, your submissions are understood to be under the same [BSD 3-Clause License](LICENSE) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using Github's [issues](https://github.com/Dksie09/RetroUI/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/Dksie09/RetroUI/issues/new); it's that easy!

## Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## Local Development

To set up for local development:

1. Fork the repository and clone your fork:

   ```bash
   git clone https://github.com/your-username/RetroUI.git
   cd RetroUI
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Storybook development environment:

   ```bash
   npm run dev
   ```

   This will launch Storybook at http://localhost:6006, where you can preview and interact with all components.

4. Make your changes to components in the `/src/components` directory.

   - Components will automatically update in Storybook as you save changes
   - Use the watch mode for continuous builds during development: `npm run watch`

5. Test your changes:

   ```bash
   npm test
   ```

6. Build the library to verify your changes work in the final bundle:

   ```bash
   npm run build
   ```

7. To test your changes in another project:

   ```bash
   # In your RetroUI directory
   npm link

   # In your test project directory
   npm link pixel-retroui
   ```

## Project Structure

- `/src/components/` - All UI components with their styles, tests and stories
- `/src/styles/` - Global styles and theme variables
- `/.storybook/` - Storybook configuration files
- `/dist/` - Built package (generated when you run `npm run build`)
- `/fonts/` - Font files used by the library
- `/bin/` - Installation scripts

## Use a Consistent Coding Style

- 2 spaces for indentation rather than tabs
- Follow the project's TypeScript coding conventions

## Scripts

The project includes several useful npm scripts:

- `npm run dev` - Start Storybook development environment
- `npm run build` - Build the library for production
- `npm test` - Run the test suite
- `npm run watch` - Watch mode for development (continuously rebuilds on changes)

## Running Tests

Before submitting a pull request, make sure to run the test suite:

```bash
npm test
```

This will run all the tests and ensure that your changes haven't introduced any regressions.

## License

By contributing, you agree that your contributions will be licensed under its BSD 3-Clause License.
