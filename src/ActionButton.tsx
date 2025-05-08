import React, { JSX } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export enum ButtonVariants {
    none = "none",
    default = "default",
    primary = "primary",
    secondary = "secondary",
    danger = "danger",
    accent = "accent",
    ghost = "ghost",
    link = "link",
}

export enum ButtonTypes {
    button = "button",
    submit = "submit",
    reset = "reset",
}

export enum SocialVariants {
    none = "none",
    facebook = "facebook",
    instagram = "instagram",
    google = "google",
    linkedin = "linkedin",
    twitter = "twitter",
    github = "github",
}

const ButtonStyles = {
    none: "",
    default: "bg-gray-200 text-black hover:bg-gray-300",
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:secondary/80",
    danger: "bg-destructive hover:destructive/90 text-destructive-foreground",
    accent: "bg-accent text-accent-foreground hover:accent/80",
    ghost: "bg-transparent hover:bg-gray-200 border border-gray-300",
    link: "text-primary underline hover:text-primary/80",
};

const OutlineButtonStyles = {
    none: "",
    default: "border border-gray-400 hover:bg-gray-100",
    primary: "border border-primary hover:primary/90",
    secondary: "border border-secondary hover:bg-secondary/80",
    danger: "border border-destructive hover:destructive/90",
    accent: "border border-accent hover:bg-accent/80",
    ghost: "border border-gray-300 hover:bg-gray-100",
    link: "text-primary underline hover:text-primary/80", // Link stays the same
};

const IconSizeMapping = {
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6",
};

const IconMapping: Record<string, JSX.Element> = {
    none: <></>,
    facebook: (
        <svg
            className={IconSizeMapping.small}
            viewBox="0 0 320 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M279.14 288l14.22-92.66h-88.91V132.89c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S273.4 0 236.36 0c-73.19 0-121.06 44.38-121.06 124.72V195H32v92.66h83.3V512h100.18V288z" />
        </svg>
    ),
    twitter: (
        <svg
            className={IconSizeMapping.small}
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.974-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.299 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.97 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.783-51.005-46.783-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.919-2.599-24.041 0-57.828 46.782-104.934 104.934-104.934 30.214 0 57.502 12.67 76.67 33.137 23.715-4.548 46.132-13.32 66.158-25.34-7.798 24.366-24.366 44.832-46.132 57.828 21.117-2.274 41.909-8.122 60.1-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
        </svg>
    ),
    instagram: (
        <svg
            className={IconSizeMapping.small}
            viewBox="0 0 448 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M224 141c-63.6 0-115 51.4-115 115s51.4 115 115 115 115-51.4 115-115-51.4-115-115-115zm0 190c-41.4 0-75-33.6-75-75s33.6-75 75-75 75 33.6 75 75-33.6 75-75 75zm146-194c0 14.2-11.5 25.7-25.7 25.7s-25.7-11.5-25.7-25.7 11.5-25.7 25.7-25.7 25.7 11.5 25.7 25.7zM224 73c-75.1 0-136 60.9-136 136s60.9 136 136 136 136-60.9 136-136S299.1 73 224 73zm0 242c-58.7 0-106-47.3-106-106s47.3-106 106-106 106 47.3 106 106-47.3 106-106 106zm146-226c0 16.6-13.4 30-30 30s-30-13.4-30-30 13.4-30 30-30 30 13.4 30 30z" />
        </svg>
    ),
    linkedin: (
        <svg
            className={IconSizeMapping.small}
            viewBox="0 0 448 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.7 0 53.79 0 23.88 24.09 0 53.79 0s53.79 24.09 53.79 53.79c0 29.91-24.09 54.31-53.79 54.31zm394.2 339.9h-92.88V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.8-55.7 76.9v148h-92.88V148.9h89.2v40.8h1.3c12.4-23.4 42.7-48.3 88-48.3 94.1 0 111.4 61.9 111.4 142.3V448z" />
        </svg>
    ),
    github: (
        <svg
            className={IconSizeMapping.small}
            viewBox="0 0 480 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.8 0-6.1-3.2-6.1-7.1 0-4 2.3-7.2 6.1-7.2 3 0 5.2 2 5.2 4.5v6.2zm-3.2 13.3c0 1.6-2.1 3.2-4.5 3.2-2.3 0-4.5-1.6-4.5-3.2 0-1.7 2.2-3.3 4.5-3.3 2.4 0 4.5 1.6 4.5 3.3zM244 8C111 8 8 113 8 246.2c0 106.4 68.4 196.5 163.3 228.6 11.9 2.2 16.3-5.2 16.3-11.6 0-5.8-.2-21.3-.3-41.8-66.3 14.6-80.3-31.8-80.3-31.8-10.8-28-26.5-35.5-26.5-35.5-21.6-14.9 1.6-14.6 1.6-14.6 23.8 1.7 36.3 24.6 36.3 24.6 21.3 36.4 55.9 25.9 69.5 19.8 2.1-15.4 8.3-25.8 15.2-31.8-53-5.9-108.7-26.5-108.7-118 0-26.1 9.3-47.4 24.6-64.1-2.5-6-10.6-30.3 2.4-63 0 0 20-6.5 65.5 24.5 19-5.3 39.3-8 59.6-8 20.3 0 40.6 2.7 59.6 8 45.5-31 65.5-24.5 65.5-24.5 13 32.7 4.9 57 2.4 63 15.3 16.7 24.6 38 24.6 64.1 0 91.8-55.7 112-108.8 118 8.5 7.3 16 21.7 16 43.8 0 31.6-.3 57-.3 64.6 0 6.5 4.4 13.9 16.4 11.6 94.8-32.1 163.1-122.2 163.1-228.6C480 113 377 8 244 8z" />
        </svg>
    ),
};

const SocialButtonStyles: Record<string, string> = {
    none: "",
    facebook: "bg-blue-600 hover:bg-blue-700 text-white",
    twitter: "bg-blue-400 hover:bg-blue-500 text-white",
    instagram: "bg-pink-500 hover:bg-pink-600 text-white",
    linkedin: "bg-blue-700 hover:bg-blue-800 text-white",
    github: "bg-gray-800 hover:bg-gray-900 text-white",
    google: "bg-blue-600 hover:bg-blue-700 text-white",
};

const OutLineSocialButtonStyles: Record<string, string> = {
    none: "",
    facebook: "border border-blue-600 hover:border-blue-700 text-blue-600",
    twitter: "border border-blue-400 hover:border-blue-500 text-blue-400",
    instagram: "border border-pink-500 hover:border-pink-600 text-pink-500",
    linkedin: "border border-blue-700 hover:border-blue-800 text-blue-700",
    github: "border border-gray-800 hover:border-gray-900 text-gray-800",
    google: "border border-blue-600 hover:border-blue-700 text-blue-600",
};

export enum ButtonSizes {
    small = "small",
    medium = "medium",
    large = "large",
}

const SizeStyles = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
};

interface ActionButtonProps {
    children: React.ReactNode;
    className?: string;
    platform?: SocialVariants;
    variant?: ButtonVariants;
    outline?: boolean;
    loading?: boolean;
    type?: ButtonTypes;
    size?: ButtonSizes;
    loadingText?: string;
    loadingIcon?: JSX.Element;
    onClick?: () => void;
}

export function ActionButton({
    children,
    className,
    platform = SocialVariants.none,
    variant = ButtonVariants.none,
    outline = false,
    loading = false,
    type = ButtonTypes.button,
    size = ButtonSizes.medium,
    loadingText = "Loading...",
    loadingIcon = (
        <span
            className={`spinner-border animate-spin ${IconSizeMapping[size]} border-2 border-t-2 border-white rounded-full`}
        />
    ),
    onClick,
}: ActionButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={loading}
            type={type}
            className={cn(
                "flex items-center justify-center gap-2 whitespace-nowrap rounded-md cursor-pointer",
                outline
                    ? OutLineSocialButtonStyles[platform]
                    : SocialButtonStyles[platform],
                outline ? OutlineButtonStyles[variant] : ButtonStyles[variant],
                SizeStyles[size],
                className
            )}
        >
            {loading
                ? loadingIcon
                : platform !== SocialVariants.none &&
                  React.cloneElement(IconMapping[platform], {
                      className: IconSizeMapping[size],
                  })}
            <span>{loading ? loadingText : children}</span>
        </button>
    );
}
