import ScrollToTop from './components/ScrollToTop'
import { Styled } from './App.styled'
import { NavLink, Route, Routes } from 'react-router-dom'
import { lazy, Suspense, useState } from 'react'
import { MdMenuOpen } from 'react-icons/md'
import { CircularProgress } from '@mui/material'
import Footer from './components/footer'

const Home = lazy(() => import('./pages/home'));
const NotFound = lazy(() => import('./pages/notFound'));
const About = lazy(() => import('./pages/about'));

const App = () => {
    const [displayNav, setDisplayNav] = useState(true);
    const handleDisplayNav = () => {
        setDisplayNav(prev => !prev);
    };

    return (
        <>
            <Styled.Wrapper>
                <Styled.Header>
                    <Styled.NavLinkWrapper onClick={handleDisplayNav}>
                        <MdMenuOpen size={20} />
                    </Styled.NavLinkWrapper>
                    <Styled.Heading><NavLink to="/">a2rp: ReactJS Tuts</NavLink></Styled.Heading>
                </Styled.Header>
                <Styled.Main>
                    <Styled.NavWrapper className={`${displayNav ? "active" : ""}`}>
                        <div className="navInner">
                            <NavLink to="/" title="Home">Home</NavLink>
                        </div>
                    </Styled.NavWrapper>

                    <Styled.ContentWrapper id="scroll-root" data-scroll-root>
                        <Styled.RoutesWrapper>
                            <Suspense fallback={<CircularProgress />}>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/home" element={<Home />} />
                                    <Route path="/about" element={<About />} />

                                    <Route path="*" element={<NotFound />} />
                                </Routes>
                            </Suspense>
                        </Styled.RoutesWrapper>

                        <Styled.Footer>
                            <Footer />
                        </Styled.Footer>
                    </Styled.ContentWrapper>
                </Styled.Main>
                <ScrollToTop />
            </Styled.Wrapper >
        </>
    )
}

export default App
