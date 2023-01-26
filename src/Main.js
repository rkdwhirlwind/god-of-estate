import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import AptInfoPage from "./pages/CoursePage";
import AptInfoListPage from "./pages/CourseListPage";
import CoursePage from "./pages/CoursePage";
import CourseListPage from "./pages/CourseListPage";
import QuestionPage from "./pages/QuestionPage";
import QuestionListPage from "./pages/QuestionListPage";
import WishlistPage from "./pages/WishlistPage";
import NotFoundPage from "./pages/NotFoundPage";

function Main() {
  return (
    <BrowserRouter>
      {/* <App> */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="aptInfo">
            <Route index element={<AptInfoListPage />} />
            <Route path=":atInfoSlug" element={<AptInfoPage />} />
          </Route>
          <Route path="courses">
            <Route index element={<CourseListPage />} />
            <Route path=":courseSlug" element={<CoursePage />} />
          </Route>
          <Route path="questions">
            <Route index element={<QuestionListPage />} />
            <Route path=":questionId" element={<QuestionPage />} />
          </Route>
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      {/* </App> */}
    </BrowserRouter>
  );
}

export default Main;
