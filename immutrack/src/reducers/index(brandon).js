const initialState = {
    childList: [
        /* 
            {
                name: [type text]
                age: [type text]
                social: [type text]
                signUpCode: [type text] //do I need to keep this in state?
                immunizations: [
                    {
                        immunizationName: [type text]
                        DateOfVaccination: [type text]
                        hasShot: [type bool]
                    }
                ]
            }
        */
    ]
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}