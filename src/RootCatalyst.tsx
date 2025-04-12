import "./GlobalStyles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageNotFound from "./routes/not-found";
import HomePage from "./routes/page";
import PageUnderConstruction from "./routes/under_construction/page";
import ContactPage from "./routes/contact/page";
import CompanyPage from "./routes/company/page";
import LeadershipPage from "./routes/company/leadership/page";
import NexusForLearning from "./routes/products/learning/page";
import NewsroomPage from "./routes/company/newsroom/page";
import NewsroomAllArticlesPage from "./routes/company/newsroom/articles/page";
import NewsroomArticlesSearchPage from "./routes/company/newsroom/articles/searchArticles/page";
import LoginPage from "./routes/account/login/page";
import SignUpPage from "./routes/account/signup/page";

createRoot(document.getElementById("APP_ROOT")!)
.render(
    <StrictMode>
        <BrowserRouter>
        <Routes>
            <Route path="/" element= {<HomePage />} />
            <Route path="/under_construction/" element={<PageUnderConstruction />} />
            <Route path="/contact/" element={<ContactPage />} />
            <Route path="/company/" element={<CompanyPage />} />
            <Route path="/account/signup" element={<SignUpPage />} />
            <Route path="/company/leadership" element={<LeadershipPage />} />
            <Route path="/products/learning" element={<NexusForLearning />} />
            <Route path="/company/newsroom" element={<NewsroomPage />} />
            <Route path="/account/login" element={<LoginPage />} />
            <Route path="/company/newsroom/articles" element={<NewsroomAllArticlesPage />} />
            <Route path="/company/newsroom/articles/searchArticles" element={<NewsroomArticlesSearchPage />} />
            <Route path="*" element={<PageNotFound />}/>
        </Routes>
        </BrowserRouter>
    </StrictMode>
)