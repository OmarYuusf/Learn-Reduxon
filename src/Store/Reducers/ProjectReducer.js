const initState = {
    projects: [
        {id:1, title: 'Im a React Developer' , content:"im a new in react and i will learn step by step"},
        { id: 2, title: 'Im a Django Developer', content: "im a new in Django and i will learn step by step" },
        { id: 3, title: 'Im a Php Developer', content: "im a new in php and i will learn step by step" }
    ]
}

const ProjectReducer = (state = initState, action) => {
    switch(action.type){
        case "CREATE_PROJECT":
            return{
                ...state,
                projects: state.projects.concat({ id: Math.random(), 
                                                  title: action.projectData.title, 
                                                  content: action.projectData.content})
            }
    }
    return state
}

export default ProjectReducer