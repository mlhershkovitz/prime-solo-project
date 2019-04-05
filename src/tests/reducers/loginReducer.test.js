import loginReducer from '../../redux/reducers/loginModeReducer';

describe('Testing loginModeReducer', () => {
    test('should have the correct initial state', () => {
        const action = {type: 'INITIALIZE'};
        const returnedState = loginReducer(undefined, action);
        expect(returnedState).toBe('login')
    })
    test('should have the REGISTER', () => {
        const action = {type: 'REGISTER'};
        const returnedState = loginReducer('INITIALIZE', action);
        expect(returnedState).toBe('register')
    })
});