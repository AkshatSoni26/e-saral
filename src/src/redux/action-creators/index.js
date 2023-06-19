export const buttonsData = (data) => {

    return (dispatch) =>
    {
        dispatch({
            type:'data',
            data : data
        })
    }
}