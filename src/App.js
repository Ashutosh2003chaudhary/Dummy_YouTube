import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
// import { Feed} from '@mui/icons-material';
import VideoDetails from "./Components/VideoDetails";
import SearchFeed from "./Components/SearchFeed";
import ChannelDetails from "./Components/ChannelDetails";
import Navbar from './Components/Navbar';
import Feed from './Components/Feed';


const App = () => {
  return(
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails/>} />
          <Route path="/Channel/:id" element={<ChannelDetails />} />
          <Route path="/Search/:searchTerm" element={<SearchFeed />} />
        </Route>
      </Routes>
    </Box>
  </BrowserRouter>



  )
}
export default App;