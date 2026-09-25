import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiArrowUp } from "react-icons/fi";
import { Styled } from "../App.styled";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = document.getElementById("scroll-root");
        if (!node) return undefined;

        const handleScroll = () => setVisible(node.scrollTop > 360);
        node.addEventListener("scroll", handleScroll, { passive: true });
        node.scrollTo({ top: 0, behavior: "auto" });
        handleScroll();

        return () => node.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    if (!visible) return null;

    return (
        <Styled.ScrollButton
            type="button"
            aria-label="Back to top"
            title="Back to top"
            onClick={() =>
                document.getElementById("scroll-root")?.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            }
        >
            <FiArrowUp />
        </Styled.ScrollButton>
    );
}
