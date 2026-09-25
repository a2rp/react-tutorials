import { FiBookOpen, FiCode, FiTarget } from "react-icons/fi";
import { Styled } from "./styled";

const About = () => (
    <Styled.Wrapper>
        <Styled.Eyebrow>About this project</Styled.Eyebrow>
        <Styled.Title>Practical React notes for everyday building.</Styled.Title>
        <Styled.Text>
            This tutorial hub keeps lessons focused on the ideas that make interfaces
            easier to design, explain, and maintain.
        </Styled.Text>
        <Styled.Grid>
            <Styled.Card>
                <FiBookOpen />
                <h2>Learn in small steps</h2>
                <p>Each route is designed to be read quickly and revisited when needed.</p>
            </Styled.Card>
            <Styled.Card>
                <FiCode />
                <h2>Practice with code</h2>
                <p>Use the examples as a starting point for small experiments and projects.</p>
            </Styled.Card>
            <Styled.Card>
                <FiTarget />
                <h2>Build with intent</h2>
                <p>Focus on accessible, predictable patterns that can grow with a product.</p>
            </Styled.Card>
        </Styled.Grid>
    </Styled.Wrapper>
);

export default About;
