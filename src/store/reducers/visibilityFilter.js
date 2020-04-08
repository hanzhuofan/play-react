import { actions } from "../actions";
import { VISIBILITY_FILTERS } from "../../components/redux/constants";

const initialState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_FILTER: {
            return action.payload.filter;
        }
        default: {
            return state;
        }
    }
};

export default visibilityFilter;
