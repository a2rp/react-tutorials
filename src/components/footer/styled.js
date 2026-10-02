import styled from "styled-components";

const Wrapper = styled.footer`
    margin-top: 24px;
    padding: 28px 0 4px;
    border-top: 1px solid #373737;
`;

const Intro = styled.div`
    display: grid;
    gap: 8px;
`;

const Heading = styled.h2`,
    color: #f2f2f2;
    font-size: 23px;
`;

const Description = styled.p`
    color: #8f8f8f;
    font-size: 13px;
`;

const SocialLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 20px;

    a {
        width: 36px;
        height: 36px;
        display: grid;
        place-items: center;
        border: 1px solid #3f3f3f;
        border-radius: 9px;
        color: #a1a1a1;
        transition: border-color 160ms ease, box-shadow 160ms ease, color 160ms ease;

        &:hover {
            border-color: #aeaeae;
            color: #aeaeae;
            box-shadow: 0 8px 18px rgba(123, 123, 123, 0.16);
        }
    }
`;

const Copyright = styled.p`
    margin: 22px 0 0;
    padding-top: 16px;
    border-top: 1px solid #2b2b2b;
    color: #808080;
    font-size: 12px;

    a {
        color: #cccccc;
        font-weight: 700;
    }
`;

export const Styled = { Wrapper, Intro, Heading, Description, SocialLinks, Copyright };
