import styled from "styled-components";

const Wrapper = styled.div`,
    max-width: 900px;
    margin: 0 auto;
    padding: 24px 0 34px;
`;

const Eyebrow = styled.p`,
    margin: 0 0 14px;
    color: #70b1ff;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
`;

const Title = styled.h1`,
    max-width: 720px;
    margin: 0;
    color: #f2f6fb;
    font-size: clamp(38px, 6vw, 68px);
    line-height: 1;
    letter-spacing: -0.06em;
`;

const Text = styled.p`,
    max-width: 680px;
    margin: 24px 0 48px;
    color: #91a1b5;
    font-size: 16px;
    line-height: 1.7;
`;

const Grid = styled.div`,
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
`;

const Card = styled.article`,
    padding: 22px;
    border: 1px solid #25384e;
    border-radius: 14px;
    background: #101a27;
    transition: border-color 160ms ease, box-shadow 160ms ease;

    &:hover {
        border-color: #4a78a4;
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }

    svg {
        color: #70b1ff;
        font-size: 24px;
    }

    h2 {
        margin: 24px 0 8px;
        color: #eaf3ff;
        font-size: 19px;
    }

    p {
        margin: 0;
        color: #8a9bb0;
        font-size: 13px;
        line-height: 1.6;
    }

    @media (max-width: 850px) {
        grid-template-columns: 1fr;
    }
`;

export const Styled = { Wrapper, Eyebrow, Title, Text, Grid, Card };
