# ActionButton Component

## Description

`ActionButton` is a customizable React button component that supports various button styles, social platform icons, loading states, and sizes. This button component can be used for both standard buttons and social media buttons (Facebook, Instagram, Google, etc.), with the ability to show loading states and custom icons.

## Installation

To install the `react-action-button` component, you can use either npm or yarn:

```bash
npm install react-action-button
```

or

```bash
pnpm add react-action-button
```

or

```bash
yarn add react-action-button
```

## Dependencies

-   `react`
-   `clsx`
-   `tailwind-merge`
-   `react-icons`
-   `tailwind-css`

## Nextjs Integration for tailwindcss

Open the `tailwind.config.ts` file and add the following line to the `content` array:

```js
content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    +"./node_modules/react-action-button/dist/**/*.{js,ts,jsx,tsx}",
];
```

## Usage Example

```tsx
import React from "react";
import {
    ActionButton,
    ButtonVariants,
    SocialVariants,
    ButtonSizes,
} from "react-action-button";

export default function App() {
    return (
        <div>
            <ActionButton
                type={ButtonTypes.button}
                variant={ButtonVariants.primary}
                size={ButtonSizes.large}
                onClick={() => alert("Clicked!")}
            >
                Primary Button
            </ActionButton>

            <ActionButton
                type={ButtonTypes.button}
                variant={ButtonVariants.primary}
                outline={true}
                size={ButtonSizes.large}
                onClick={() => alert("Clicked!")}
            >
                Outline Button
            </ActionButton>

            <ActionButton
                type={ButtonTypes.button}
                platform={SocialVariants.facebook}
                size={ButtonSizes.medium}
                onClick={() => alert("Facebook Button Clicked!")}
            >
                Facebook Login
            </ActionButton>

            <ActionButton
                type={ButtonTypes.button}
                loading={true}
                loadingText="Please wait..."
                size={ButtonSizes.small}
            >
                Loading Button
            </ActionButton>

            <ActionButton
                type={ButtonTypes.button}
                platform={SocialVariants.twitter}
                variant={ButtonVariants.accent}
                size={ButtonSizes.medium}
            >
                Twitter Button
            </ActionButton>

            <ActionButton
                type={ButtonTypes.button}
                platform={SocialVariants.linkedin}
                variant={ButtonVariants.danger}
                loading={true}
                size={ButtonSizes.large}
            >
                Loading LinkedIn Button
            </ActionButton>
        </div>
    );
}
```

## Props

### `children` (React.ReactNode)

-   **Type**: `React.ReactNode`
-   **Required**: Yes
-   **Description**: The content inside the button (text or any React element).

### `className` (string)

-   **Type**: `string`
-   **Required**: No
-   **Description**: Additional CSS class names to be applied to the button.

### `platform` (SocialVariants)

-   **Type**: `SocialVariants`
-   **Default**: `SocialVariants.none`
-   **Description**: Specifies the social platform associated with the button. It determines which social media icon will be displayed on the button.
    -   `none`: No social platform icon.
    -   `facebook`: Facebook icon.
    -   `twitter`: Twitter icon.
    -   `instagram`: Instagram icon.
    -   `linkedin`: LinkedIn icon.
    -   `github`: GitHub icon.
    -   `google`: Google icon.

### `variant` (ButtonVariants)

-   **Type**: `ButtonVariants`
-   **Default**: `ButtonVariants.default`
-   **Description**: Defines the style variant of the button.
    -   `none`: No style.
    -   `default`: Default button style with a gray background.
    -   `primary`: Blue background with white text.
    -   `secondary`: Dark gray background with white text.
    -   `danger`: Red background with white text.
    -   `accent`: Pink background with white text.
    -   `ghost`: Transparent background with gray text and border.
    -   `link`: Text link button with blue text and underline.

### `outline` (Outline Design)

-   **Type**: `Boolean`
-   **Default**: `false`
-   **Description**: Defines the outline style of the button.
    -   `true`: Outline button style.
    -   `false`: Default button style.

### `loading` (boolean)

-   **Type**: `boolean`
-   **Default**: `false`
-   **Description**: If `true`, the button shows a loading state instead of the button's text. The `loadingText` and `loadingIcon` props control the text and icon displayed during loading.

### `disabled` (boolean)

-   **Type**: `boolean`
-   **Default**: `false`
-   **Description**: If `true`, the button will be on disabled state.

### `type` (ButtonTypes)

-   **Type**: `ButtonTypes`
-   **Default**: `ButtonTypes.button`
-   **Description**: Specifies the type of the button (`button`, `submit`, or `reset`).

### `size` (ButtonSizes)

-   **Type**: `ButtonSizes`
-   **Default**: `ButtonSizes.medium`
-   **Description**: Specifies the size of the button.
    -   `small`: Smaller button with less padding and smaller text.
    -   `medium`: Default size button (standard padding and text size).
    -   `large`: Larger button with more padding and larger text.

### `loadingText` (string)

-   **Type**: `string`
-   **Default**: `Loading...`
-   **Description**: Custom text to be shown when the button is in a loading state.

### `loadingIcon` (JSX.Element)

-   **Type**: `JSX.Element`
-   **Default**: Spinner icon.
-   **Description**: Custom icon to be displayed during the loading state.

### `onClick` (function)

-   **Type**: `() => void`
-   **Required**: No
-   **Description**: The function to be executed when the button is clicked.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
