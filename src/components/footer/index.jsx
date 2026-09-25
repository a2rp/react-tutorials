import { createElement } from "react";
import {
    FaCodepen,
    FaCoffee,
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaGlobe,
    FaHandHoldingHeart,
    FaLinkedin,
    FaPatreon,
    FaYoutube,
} from "react-icons/fa";
import { Styled } from "./styled";

const links = [
    { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FaGlobe },
    { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
    { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedin },
    { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebook },
    { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
    { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FaEnvelope },
    { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FaHandHoldingHeart },
    { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FaCoffee },
    { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: FaPatreon },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <Styled.Wrapper>
            <Styled.Intro>
                <Styled.Heading>Keep learning, keep building.</Styled.Heading>
                <Styled.Description>
                    React tutorials and practical notes for steady frontend progress.
                </Styled.Description>
            </Styled.Intro>
            <Styled.SocialLinks aria-label="External links">
                {links.map(({ label, href, icon }) => (
                    <a
                        key={label}
                        href={href}
                        title={label}
                        aria-label={label}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                        {createElement(icon)}
                    </a>
                ))}
            </Styled.SocialLinks>
            <Styled.Copyright>
                Copyright © {year}{" "}
                <a
                    href="https://www.ashishranjan.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ashish Ranjan
                </a>
            </Styled.Copyright>
        </Styled.Wrapper>
    );
}
