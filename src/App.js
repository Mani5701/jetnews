import "./App.css";
import Bar from "./components/Bar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {useState} from 'react';
import LoadingBar  from "react-top-loading-bar";


function App() {
  const[progress , setProgress] = useState(0);
  return (
    <Router>
      <>
        <LoadingBar
        color='#00BFB3'
        progress={progress}
      />
      <Bar/>
      <Routes>
        <Route path="/" element={<News setProgress={setProgress} key="general" category={'general'}/>}/>
        <Route path="/business" element={<News  setProgress={setProgress} key="business" category={'business'}/>}/>
        <Route path="/entertainment" element={<News  setProgress={setProgress} key="entertainment"  category={'entertainment'}/>}/>
        <Route path="/technology" element={<News  setProgress={setProgress} key="technology"  category={'technology'}/>}/>
        <Route path="/science" element={<News  setProgress={setProgress} key="science"  category={'science'}/>}/>
        <Route path="/sport" element={<News  setProgress={setProgress} key="sport"  category={'sport'}/>}/>
        <Route path="/health" element={<News setProgress={setProgress} key="health"  category={'Health'}/>}/>
      </Routes>
    </>
    </Router>
  );
}

export default App;
