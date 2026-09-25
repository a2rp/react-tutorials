import styled from "styled-components";

const Wrapper = styled.div`,
    min-height: 100vh;
    position: relative;
    background: #0d1117;
    color: #f2f5f8;
`;

const Header = styled.header`,
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    min-height: 72px;
    padding: 12px 18px;
    display: flex;
    align-items: center;
    gap: 16px;
    border-bottom: 1px solid #243142;
    background: rgba(1, 4, 9, 0.96);
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.2);
`;

const NavLinkWrapper = styled.button`,
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    border: 1px solid #2d4057;
    border-radius: 10px;
    color: #e8f0fa;
    background: #111b28;
    cursor: pointer;
    transition: border-color 160ms ease, box-shadow 160ms ease, color 160ms ease;

    &:hover {
        border-color: #63a8ff;
        color: #76b8ff;
        box-shadow: 0 8px 18px rgba(35, 122, 229, 0.18);
    }

    svg {
        font-size: 20px;
    }
`;

const Heading = styled.h1`,
    margin: 0;
    font-size: 16px;

    a {
        display: inline-flex;
        align-items: center;
        gap: 11px;
        color: #f4f7fb;
        text-decoration: none;
    }

    img {
        width: 36px;
        height: 36px;
        object-fit: contain;
        border-radius: 9px;
    }

    span {
        display: grid;
        gap: 2px;
    }

    strong {
        font-size: 16px;
        font-weight: 700;
    }

    small {
        color: #8191a6;
        font-size: 10px;
        font-weight: 500;
        letter-spacing: 0.04em;
    }
`;

const HeaderNote = styled.p`,
    margin: 0 0 0 auto;
    color: #8b9aad;
    font-size: 12px;

    @media (max-width: 700px) {
        display: none;
    }
`;

const Main = styled.main`,
    height: 100vh;
    padding-top: 72px;
    display: flex;
    overflow: hidden;
`;

const NavWrapper = styled.aside`,
    flex: 0 0 0;
    width: 0;
    height: calc(100vh - 72px);
    overflow: hidden;
    border-right: 1px solid transparent;
    background: #0b121d;
    transition: width 180ms ease, flex-basis 180ms ease, border-color 180ms ease;

    &.active {
        flex: 0 0 250px;
        width: 250px;
        border-right-color: #26384e;
    }

    @media (max-width: 1000px) {
        position: fixed;
        top: 72px;
        left: 0;
        z-index: 15;
        box-shadow: 18px 0 30px rgba(0, 0, 0, 0.28);
    }

    .navInner {
        width: 250px;
        height: 100%;
        padding: 26px 16px;
        overflow-y: auto;
        scrollbar-gutter: stable;
        scrollbar-width: thin;
        scrollbar-color: #344962 transparent;

        &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-thumb {
            border: 3px solid transparent;
            border-radius: 99px;
            background: #344962;
            background-clip: content-box;
        }

        .navLabel {
            margin: 0 8px 16px;
            color: #7fa2c7;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
        }

        a {
            display: flex;
            align-items: center;
            gap: 11px;
            min-height: 44px;
            padding: 0 12px;
            border: 1px solid transparent;
            border-radius: 10px;
            color: #8e9caf;
            text-decoration: none;
            transition: border-color 160ms ease, box-shadow 160ms ease, color 160ms ease;

            &:hover,
            &.active {
                border-color: #2d5881;
                color: #eef6ff;
                box-shadow: 0 8px 18px rgba(35, 122, 229, 0.12);
            }

            svg {
                flex: 0 0 auto;
                color: #70b1ff;
            }
        }

        .navNote {
            display: flex;
            gap: 9px;
            margin: 28px 8px 0;
            color: #718196;
            font-size: 12px;
            line-height: 1.5;

            svg {
                flex: 0 0 auto;
                margin-top: 2px;
                color: #70b1ff;
            }
        }
    }
`;

const ContentWrapper = styled.section`,
    flex: 1 1 auto;
    min-width: 0;
    height: calc(100vh - 72px);
    padding: 28px clamp(18px, 4vw, 56px) 28px;
    overflow-y: auto;
    scroll-behavior: auto;
    scrollbar-gutter: stable;
    scrollbar-width: thin;
    scrollbar-color: #344962 transparent;

    &::-webkit-scrollbar {
        width: 11px;
    }

    &::-webkit-scrollbar-thumb {
        border: 3px solid transparent;
        border-radius: 99px;
        background: #344962;
        background-clip: content-box;
    }
`;

const RoutesWrapper = styled.div`,
    min-height: calc(100vh - 170px);
`;

const Loading = styled.div`,
    min-height: 50vh;
    display: grid;
    place-content: center;
    justify-items: center;
    gap: 12px;
    color: #9bb0c8;
`;

const Footer = styled.div`,
    padding-top: 22px;
`;

const ScrollButton = styled.button`,
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 25;
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border: 1px solid #36516f;
    border-radius: 50%;
    color: #dbebff;
    background: #142235;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
    cursor: pointer;
    transition: border-color 160ms ease, box-shadow 160ms ease, color 160ms ease;

    &:hover {
        border-color: #76b8ff;
        color: #76b8ff;
        box-shadow: 0 12px 28px rgba(35, 122, 229, 0.2);
    }
`;

export const Styled = {
    Wrapper,
    Header,
    NavLinkWrapper,
    Heading,
    HeaderNote,
    Main,
    ContentWrapper,
    RoutesWrapper,
    NavWrapper,
    Loading,
    Footer,
    ScrollButton,
};
