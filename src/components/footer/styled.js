import styled from "styled-components";

const Wrapper = styled.footer`,
    margin-top: 24px;
    padding: 28px 0 4px;
    border-top: 1px solid #26384e;
`;

const Intro = styled.div`,
    display: grid;
    gap: 8px;
`;

const Heading = styled.h2`,
    color: #eaf3ff;
    font-size: 23px;
`;

const Description = styled.p`,
    color: #8191a6;
    font-size: 13px;
`;

const SocialLinks = styled.div`,
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 20px;

    a {
        width: 36px;
        height: 36px;
        display: grid;
        place-items: center;
        border: 1px solid #2d4057;
        border-radius: 9px;
        color: #8fa3bb;
        transition: border-color 160ms ease, box-shadow 160ms ease, color 160ms ease;

        &:hover {
            border-color: #70b1ff;
            color: #70b1ff;
            box-shadow: 0 8px 18px rgba(35, 122, 229, 0.16);
        }
    }
`;

const Copyright = styled.p`,
    margin: 22px 0 0;
    padding-top: 16px;
    border-top: 1px solid #1d2c3d;
    color: #718196;
    font-size: 12px;

    a {
        color: #a9cfff;
        font-weight: 700;
    }
`;

export const Styled = { Wrapper, Intro, Heading, Description, SocialLinks, Copyright };
