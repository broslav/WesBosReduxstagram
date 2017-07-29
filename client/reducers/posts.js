// a reducer takes two things
// 1. Action (info about what happened)
// 2. copy of current store

export default function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            const index = action.index;
            return [
                ...state.slice(0, index),
                {...state[index], likes: state[index].likes + 1},
                ...state.slice(index + 1),
            ];
        default:
            return state;
    }

}