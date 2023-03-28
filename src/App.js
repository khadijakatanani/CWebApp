import React from "react";
import theme from "./config/theme.js";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./config/GlobalStyles";
import DaysCompleted from "./Components/DaysCompleted";
import CheckinComment from "./Components/CheckinComment";
import Header from "./Components/Header";
import Dash from "./Views/Dash";
import {
  Routes,
  Route, 
  useLocation,
  Router
}  from "react-router-dom";
import Checkin from "./Views/Checkin.js";
import Profile from "./Views/Dash";
import Join from "./Views/Join";


const checkins = [
  {
    date: "Wed Jan 29 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 20
  },
  {
    date: "Wed Jan 28 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 15
  },
  { date: "Wed Jan 27 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 8 },
  { date: "Wed Jan 26 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 2 },
  {
    date: "Wed Jan 25 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 20
  },
  {
    date: "Wed Jan 23 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 12
  },
  {
    date: "Wed Jan 22 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 19
  },
  {
    date: "Wed Jan 21 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 10
  },
  {
    date: "Wed Jan 20 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 15
  },
  { date: "Wed Jan 19 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 6 },
  {
    date: "Wed Jan 18 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 20
  },
  {
    date: "Wed Jan 17 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 20
  },
  {
    date: "Wed Jan 16 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
    score: 20
  },
  { date: "Wed Jan 15 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 20 }
];

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <GlobalStyles />
        {/* <Router> */}
          <Routes>
            <Route path="./checkin" element={<Checkin/>} /> 
            <Route path="./dash" element={<Dash/>} /> 
            <Route path="./join" element={<Join/>} /> 
            <Route path="./profile" element={<Profile/>} /> 
            {/* <Route path="./notfound" element={<NotFound/>} />  */}
          </Routes>
        {/* </Router> */}
        <DaysCompleted days={15} checkins={checkins}>
          {" "}
        </DaysCompleted>
       <CheckinComment />
      </ThemeProvider>
    </div>
  );
}

export default App;