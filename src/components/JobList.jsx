import { useSelector, useDispatch } from "react-redux";
import JobPosition from "./JobPosition";
import { selectVisiblePositions } from "../store/positions/selectors-positions";
import { selectFilters } from "../store/filters/selectors-filters";

import { addFilter } from "../store/filters/actions-filters";

const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  );

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item, index) => {
        return (
          <JobPosition
            key={index}
            {...item}
            handleAddFilter={handleAddFilter}
          />
        );
      })}
    </div>
  );
};

export default JobList;
