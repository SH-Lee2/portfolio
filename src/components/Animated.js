import React from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

const About = React.lazy(() => import("../components/pages/About/About"));
const Contact = React.lazy(() => import("../components/pages/Contact/Contact"));
const Home = React.lazy(() => import("../components/pages/Home/Home"));
const Project = React.lazy(() => import("../components/pages/Project/Project"));

const Animated = () => {
    const location = useLocation();
    return (
        // <main>
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
        // </main>
    );
};

export default Animated;
