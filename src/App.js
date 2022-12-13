import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Upload from "./Pages/Upload/Upload";
import Profile from "./Pages/Upload/Profile";
import Download from "./Pages/Others/Download";
import Details from "./Pages/Others/Details";
import ScrollToTop from "./utils.js/scrollToTop";
import QnA from "./Pages/Upload/QnA";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoaderStore } from "./store";
import { GettingHairAnimationProvider } from "./context";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/LogIn/Login";
import Protected from "./components/protectedRoute";
import { useContext } from "react";
import { UserContext } from "./context/authContext";
import Loading from "./Pages/Upload/Loading";

function App() {
  const queryClient = new QueryClient();
  const { loggedIn } = useContext(UserContext)
  console.log(loggedIn)
  return (
    <div className="App">
      {/* <QueryClientProvider client={queryClient}>
        <LoaderStore> */}
      <GettingHairAnimationProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/register" element={<SignUp />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/upload" element={
              <Protected isLoggedIn={loggedIn}>
                <Upload />
              </Protected>
            } />
            <Route exact path="/qna" element={<Protected isLoggedIn={loggedIn}>
              <QnA />
            </Protected>} />
            {/* <Route exact path="/qna-1" element={<QnA1 />} />
          <Route exact path="/qna-2" element={<QnA2 />} /> */}
            <Route exact path="/loading" element={<Loading />} />
            <Route exact path="/profile" element={
              <Protected isLoggedIn={loggedIn}>
                <Profile />
              </Protected>
            } />
            <Route exact path="/detail" element={<Protected isLoggedIn={loggedIn}>
              <Details />
            </Protected>} />
            <Route exact path="/download" element={<Download />} />
          </Routes>
        </Router>
      </GettingHairAnimationProvider>
      {/* </LoaderStore>
      </QueryClientProvider> */}
    </div>
  );
}

export default App;
