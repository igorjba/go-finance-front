import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AlertProvider } from "../contexts/AlertContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
    return (
        <Router>
            <ThemeProvider>
                <AlertProvider>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </AlertProvider>
            </ThemeProvider>
        </Router>
    );
};
