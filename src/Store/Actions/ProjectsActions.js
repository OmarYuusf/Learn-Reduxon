export const createProjects = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('new').add({
            ...project,
            title:"same",
            content: "20"
        }).then(() => {
            dispatch({ type: "CREATE_PROJECT", projectData: project })
        }).catch((err) => {
            dispatch({ type: "CREATE_PROJECT_ERORR", err })
        })
    }
}