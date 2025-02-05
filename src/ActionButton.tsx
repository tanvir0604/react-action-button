import React, { JSX } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
    FaGithub,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaGoogle,
} from "react-icons/fa";

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

const buttonStyles = {
    none: "",
    default: "bg-gray-200 text-black hover:bg-gray-300",
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    accent: "bg-pink-500 text-white hover:bg-pink-600",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-200 border border-gray-300",
    link: "text-blue-500 underline hover:text-blue-600",
};

const iconSizeMapping = {
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6",
};

const iconMapping: Record<string, JSX.Element> = {
    none: <></>,
    facebook: <FaFacebookF className={iconSizeMapping.small} />,
    twitter: <FaTwitter className={iconSizeMapping.small} />,
    instagram: <FaInstagram className={iconSizeMapping.small} />,
    linkedin: <FaLinkedinIn className={iconSizeMapping.small} />,
    github: <FaGithub className={iconSizeMapping.small} />,
    google: <FaGoogle className={iconSizeMapping.small} />,
};

const colorMapping: Record<string, string> = {
    none: "",
    facebook: "bg-blue-600 hover:bg-blue-700 text-white",
    twitter: "bg-blue-400 hover:bg-blue-500 text-white",
    instagram: "bg-pink-500 hover:bg-pink-600 text-white",
    linkedin: "bg-blue-700 hover:bg-blue-800 text-white",
    github: "bg-gray-800 hover:bg-gray-900 text-white",
    google: "bg-blue-600 hover:bg-blue-700 text-white",
};

export enum ButtonSizes {
    small = "small",
    medium = "medium",
    large = "large",
}

const sizeStyles = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
};

interface ActionButtonProps {
    children: React.ReactNode;
    className?: string;
    platform?: SocialVariants;
    variant?: ButtonVariants;
    loading?: boolean;
    type?: ButtonTypes;
    size?: ButtonSizes;
    loadingText?: string;
    loadingIcon?: JSX.Element;
    onClick?: () => void;
}

export default function ActionButton({
    children,
    className,
    platform = SocialVariants.none,
    variant = ButtonVariants.default,
    loading = false,
    type = ButtonTypes.button,
    size = ButtonSizes.medium,
    loadingText = "Loading...",
    loadingIcon = (
        <span
            className={`spinner-border animate-spin ${iconSizeMapping[size]} border-2 border-t-2 border-white rounded-md`}
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
                "flex items-center justify-center gap-2 whitespace-nowrap rounded-md",
                platform !== SocialVariants.none
                    ? colorMapping[platform]
                    : buttonStyles[variant],
                sizeStyles[size],
                className
            )}
        >
            {loading
                ? loadingIcon
                : platform !== SocialVariants.none &&
                  React.cloneElement(iconMapping[platform], {
                      className: iconSizeMapping[size],
                  })}
            <span>{loading ? loadingText : children}</span>
        </button>
    );
}
