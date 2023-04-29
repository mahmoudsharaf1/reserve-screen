import { GET_REVIEWS } from '../actions/types';


const INITIAL_STATE = { fetching: false, reviews: null }


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_REVIEWS:
            return { fetching: true, reviews: action.payload }
        default:
            return state;
    }
}