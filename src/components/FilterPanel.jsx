import { useSelector, useDispatch } from "react-redux";

import Card from "../UI/Card";
import Stack from "../UI/Stack";
import Badge from "../UI/Badge";

import { selectFilters } from "../store/filters/selectors-filters";
import { removeFilter, clearFilter } from "../store/filters/actions-filters";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);

  if (currentFilters.length === 0) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((filter) => (
            <Badge
              key={filter}
              variant="clearable"
              onClear={() => dispatch(removeFilter(filter))}
            >
              {filter}
            </Badge>
          ))}
        </Stack>
        <button className="link" onClick={() => dispatch(clearFilter)}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export default FilterPanel;
