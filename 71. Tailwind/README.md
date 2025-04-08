# Tailwind CSS

This project demonstrates the use of **Tailwind CSS**, a utility-first CSS framework for rapidly building custom designs.

## Installation

1. Install Tailwind CSS via npm:
    ```bash
    npm install tailwindcss
    ```
2. Initialize the Tailwind configuration file:
    ```bash
    npx tailwindcss init
    ```

## Usage

1. Add the following to your CSS file:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
2. Configure your `tailwind.config.js` file to include your content paths:
    ```javascript
    module.exports = {
      content: ['./src/**/*.{html,js}'],
      theme: {
         extend: {},
      },
      plugins: [],
    };
    ```

3. Build your CSS:
    ```bash
    npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
    ```

## Documentation

For detailed documentation, visit the [Tailwind CSS website](https://tailwindcss.com/).

## License

This project is licensed under the MIT License.