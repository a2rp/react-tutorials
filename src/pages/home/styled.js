import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 1080px;
    margin: 0 auto;
    padding: 24px 0 34px;
`;

const Eyebrow = styled.p`
    margin: 0 0 14px;
    color: #aeaeae;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
`;

const Hero = styled.section`
    display: grid;
    grid-template-columns: minmax(0, 1.5fr) minmax(230px, 0.7fr);
    gap: 32px;
    align-items: end;
    padding: 30px 0 72px;
`;

const Title = styled.h1`,
    max-width: 680px;
    margin: 0;
    color: #f6f6f6;
    font-size: clamp(40px, 7vw, 76px);
    line-height: 0.98;
    letter-spacing: -0.06em;
`;

const Intro = styled.p`
    max-width: 660px;
    margin: 22px 0 0;
    color: #9f9f9f;
    font-size: 16px;
    line-height: 1.7;
`;

const Actions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 28px;

    a {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 11px 14px;
        border: 1px solid #4a4a4a;
        border-radius: 10px;
        color: #e8e8e8;
        text-decoration: none;
        transition: border-color 160ms ease, box-shadow 160ms ease, color 160ms ease;

        &:hover {
            border-color: #aeaeae;
            color: #aeaeae;
            box-shadow: 0 8px 18px rgba(123, 123, 123, 0.16);
        }
    }
`;

const FeatureCard = styled.aside`
    display: grid;
    gap: 10px;
    padding: 22px;
    border: 1px solid #3b3b3b;
    border-radius: 16px;
    background: linear-gradient(145deg, #1d1d1d, #141414);
    box-shadow: 0 20px 42px rgba(0, 0, 0, 0.2);

    svg {
        color: #aeaeae;
        font-size: 26px;
    }

    strong {
        color: #f3f3f3;
        font-size: 17px;
    }

    span {
        color: #929292;
        font-size: 13px;
        line-height: 1.6;
    }
`;

const Section = styled.section`
    scroll-margin-top: 90px;
`;

const SectionLabel = styled.p`
    margin: 0 0 14px;
    color: #838383;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.13em;
    text-transform: uppercase;
`;

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
`;

const Card = styled.article`
    min-height: 170px;
    padding: 20px;
    border: 1px solid #373737;
    border-radius: 14px;
    background: #191919;
    transition: border-color 160ms ease, box-shadow 160ms ease;

    &:hover {
        border-color: #747474;
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }

    svg {
        color: #aeaeae;
        font-size: 22px;
    }

    h2 {
        margin: 22px 0 8px;
        color: #f2f2f2;
        font-size: 19px;
    }

    p {
        margin: 0;
        color: #999999;
        font-size: 13px;
        line-height: 1.6;
    }

    @media (max-width: 850px) {
        min-height: 0;
    }
`;

export const Styled = {
    Wrapper,
    Eyebrow,
    Hero,
    Title,
    Intro,
    Actions,
    FeatureCard,
    Section,
    SectionLabel,
    CardGrid,
    Card,
};
