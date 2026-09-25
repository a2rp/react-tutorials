import { lazy, Suspense, useState } from "react";
import { useLocation, NavLink, Route, Routes } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { FiBookOpen, FiHome, FiInfo, FiX } from "react-icons/fi";
import { CircularProgress } from "@mui/material";
import ScrollToTop from "./components/ScrollToTop";
import { Styled } from "./App.styled";
import Footer from "./components/footer";

const Home = lazy(() => import("./pages/home"));
const NotFound = lazy(() => import("./pages/notFound"));
const About = lazy(() => import("./pages/about"));

const App = () => {
    const [displayNav, setDisplayNav] = useState(true);
    const { pathname } = useLocation();

    const toggleNavigation = () => setDisplayNav((visible) => !visible);

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Styled.NavLinkWrapper
                    type="button"
                    aria-label={displayNav ? "Hide navigation" : "Show navigation"}
                    title={displayNav ? "Hide navigation" : "Show navigation"}
                    onClick={toggleNavigation}
                >
                    {displayNav ? <FiX /> : <MdMenuOpen />}
                </Styled.NavLinkWrapper>

                <Styled.Heading>
                    <NavLink to="/" aria-label="React tutorials home">
                        <img src="/logo.png" alt="" />
                        <span>
                            <strong>React Tutorials</strong>
                            <small>Practical learning notes</small>
                        </span>
                    </NavLink>
                </Styled.Heading>

                <Styled.HeaderNote>
                    Learn one concept, then build with it
                </Styled.HeaderNote>
            </Styled.Header>

            <Styled.Main>
                <Styled.NavWrapper className={displayNav ? "active" : ""}>
                    <div className="navInner">
                        <p className="navLabel">Study guide</p>
                        <NavLink to="/" title="Home">
                            <FiHome />
                            <span>Overview</span>
                        </NavLink>
                        <NavLink to="/about" title="About this project">
                            <FiInfo />
                            <span>About</span>
                        </NavLink>
                        <div className="navNote">
                            <FiBookOpen />
                            <span>Choose a section to begin.</span>
                        </div>
                    </div>
                </Styled.NavWrapper>

                <Styled.ContentWrapper id="scroll-root" data-scroll-root>
                    <Styled.RoutesWrapper>
                        <Suspense
                            key={pathname}
                            fallback={
                                <Styled.Loading role="status" aria-live="polite">
                                    <CircularProgress size={24} />
                                    <span>Loading page...</span>
                                </Styled.Loading>
                            }
                        >
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
        </Styled.Wrapper>
    );
};

export default App;
