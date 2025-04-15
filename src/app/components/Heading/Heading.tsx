import { JSX } from "react";

type HeadingProps = {
    tag: keyof JSX.IntrinsicElements; // It means that it must be a valid HTML tag name
    customTagClass?: string;
    className?: string;
    text: string;
    font?: string;
};

function Heading({tag, className, customTagClass, text, font = 'lato'}: HeadingProps) {
    const Tag = tag;
    const computedTagClass = customTagClass ?? tag;

    const computedClassName = [
        className, // Only added if not undefined
        computedTagClass,
        `font-${font}`
    ].filter(Boolean).join(' '); // Removes falsy values like undefined or empty strings

    return (
        <Tag className={computedClassName}>{text}</Tag>
    );
}

export default Heading;
