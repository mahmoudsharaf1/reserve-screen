import axios from 'axios';
import { postsURL } from '../../Utils/Apis';
import { GET_REVIEWS } from './types';


export const getReviews = () => {
    return async (dispatch) => {
        // post api for last review
        await axios(`${postsURL}`, {
            method: 'get',
        })
            .then((res) => {

                dispatch({
                    type: GET_REVIEWS,
                    payload: res.data
                })
            })
            .catch((err) => console.log('error product =====>', err))

    }
}