export default function user(state, action) {
    if (typeof state === 'undefined') {
        return false;
    }

    switch (action.type) {
        case 'user/LOGIN':
            return true;
        case 'user/LOGOUT':
            return false;
        default:
            return false;
    }
}