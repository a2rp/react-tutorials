import React from 'react'
import { Styled } from './styled'

const Home = () => {
    return (
        <>
            <Styled.Wrapper>
                <fieldset >
                    <legend><h3>React Tutorials — last updated: Sep 09, 2025</h3></legend>
                    <p>
                        React Tutorials is a route-based learning hub of concise, production-minded lessons. Each tutorial focuses on one concept, followed by a tiny lab and a checklist you can commit.
                    </p>
                    <p>
                        Built with Vite, React Router, and styled-components, and deployed to GitHub Pages. Check list of contents on left hand side navigation panel.
                    </p>
                </fieldset>

            </Styled.Wrapper>
        </>
    )
}

export default Home

