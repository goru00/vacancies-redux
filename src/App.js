import { useEffect } from "react";
import { useDispatch } from "react-redux";

import FilterPanel from "./components/FilterPanel";
import Header from "./components/Header";
import JobList from "./components/JobList";
import "./styles.css";

import { addPosition } from "./store/positions/actions-positions";
import data from "./mock/data.json";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPosition(data));
  });

  return (
    <div className="App">
      <Header />
      <div className="container">
        <FilterPanel />
        <JobList />
      </div>
    </div>
  );
}
