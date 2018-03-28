let serverBack = 'https://it-agency-back.herokuapp.com';
if (process.env.SERVER === 'production') {
    serverBack = 'https://it-agency-back.herokuapp.com';
} else if (process.env.SERVER === 'development') {
    serverBack = 'https://it-agency-back.herokuapp.com';
} else if (process.env.SERVER === 'local') {
    serverBack = 'https://it-agency-back.herokuapp.com'
}


export const SERVER_BACK = serverBack;
export const LOGIN_URL = '/login?username={username}&password={password}';