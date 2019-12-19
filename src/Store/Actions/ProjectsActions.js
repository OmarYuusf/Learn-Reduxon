export const createProjects = (project) => {
    return (dispatch, getState, { getFirestore, getFirebase}) => {
        // Make async call to Database
        dispatch({ type: "CREATE_PROJECT", projectData: project})
    }
}