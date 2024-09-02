import Loading from "./components/Loading.jsx";
import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Scroll from "./components/Scroll.jsx";
const Navbar = lazy(() => import("./components/Navbar.jsx"));
const Services = lazy(() => import("./components/Services.jsx"));
const AboutUs = lazy(() => import("./components/AboutUs.jsx"));
const LandingPage = lazy(() => import("./components/LandingPage.jsx"));
const Blog1 = lazy(() => import("./components/Blog/Blog1.jsx"));
const Blog2 = lazy(() => import("./components/Blog/Blog2.jsx"));
const Blog3 = lazy(() => import("./components/Blog/Blog3.jsx"));
const Blog4 = lazy(() => import("./components/Blog/Blog4.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const Policy = lazy(() => import("./components/Policy.jsx"));
const Terms = lazy(() => import("./components/Terms.jsx"));
const Service = lazy(() => import("./components/Services/Service.jsx"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Scroll />
        <Suspense fallback={<></>}>
          <Navbar />
        </Suspense>
        <Routes>
          <Route exact path="/" element={
            <Suspense fallback={<Loading />}>
              <LandingPage />
            </Suspense>
          } />
          <Route exact path="/services" element={
            <Suspense fallback={<Loading />}>
              <Services />
            </Suspense>
          } />
          <Route exact path="/contact" element={
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          } />
          <Route exact path="/about" element={
            <Suspense fallback={<Loading />}>
              <AboutUs />
            </Suspense>
          } />
          <Route exact path="/services/:param" element={
            <Suspense fallback={<Loading />}>
              <Service />
            </Suspense>
          } />
          <Route exact path="/terms-and-conditions" element={
            <Suspense fallback={<Loading />}>
              <Terms />
            </Suspense>
          } />
          <Route exact path="/privacy-policy" element={
            <Suspense fallback={<Loading />}>
              <Policy />
            </Suspense>
          } />
          <Route exact path="/blog1" element={
            <Suspense fallback={<Loading />}>
              <Blog1 />
            </Suspense>
          } />
          <Route exact path="/blog2" element={
            <Suspense fallback={<Loading />}>
              <Blog2 />
            </Suspense>
          } />
          <Route exact path="/blog3" element={
            <Suspense fallback={<Loading />}>
              <Blog3 />
            </Suspense>
          } />
          <Route exact path="/blog4" element={
            <Suspense fallback={<Loading />}>
              <Blog4 />
            </Suspense>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
