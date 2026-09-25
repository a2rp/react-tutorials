import { FiArrowRight, FiBookOpen, FiCheckCircle, FiLayers } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

const highlights = [
    {
        icon: FiBookOpen,
        title: "Short lessons",
        text: "Each page keeps one idea clear, practical, and easy to revisit.",
    },
    {
        icon: FiLayers,
        title: "Useful patterns",
        text: "Build a stronger foundation with examples that fit real interfaces.",
    },
    {
        icon: FiCheckCircle,
        title: "Commit-ready notes",
        text: "Turn every concept into a small experiment you can keep improving.",
    },
];

const Home = () => (
    <Styled.Wrapper>
        <Styled.Eyebrow>React learning hub</Styled.Eyebrow>
        <Styled.Hero>
            <div>
                <Styled.Title>Learn the idea. Build the interface.</Styled.Title>
                <Styled.Intro>
                    A route-based collection of concise React notes, practical examples,
                    and small exercises for steady frontend progress.
                </Styled.Intro>
                <Styled.Actions>
                    <NavLink to="/about">
                        About the project <FiArrowRight />
                    </NavLink>
                    <a href="#highlights">Explore approach</a>
                </Styled.Actions>
            </div>
            <Styled.FeatureCard>
                <FiBookOpen />
                <strong>Start with one concept</strong>
                <span>Read a note, try the pattern, then make it your own.</span>
            </Styled.FeatureCard>
        </Styled.Hero>

        <Styled.Section id="highlights">
            <Styled.SectionLabel>What you will find</Styled.SectionLabel>
            <Styled.CardGrid>
                {highlights.map(({ icon, title, text }) => (
                    <Styled.Card key={title}>
                        {icon({})}
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </Styled.Card>
                ))}
            </Styled.CardGrid>
        </Styled.Section>
    </Styled.Wrapper>
);

export default Home;
