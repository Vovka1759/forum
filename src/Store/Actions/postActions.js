export const createPost = (post) =>{
    return (dispatch, getState) => {
        //async call
        dispatch({ type : 'CREATE_POST', post });
    }
}