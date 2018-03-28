let serverBack = 'http://localhost:8880';
if (process.env.SERVER === 'production') {
    serverBack = '/it-agency-back';
} else if (process.env.SERVER === 'development') {
    serverBack = '/it-agency-back';
} else if (process.env.SERVER === 'local') {
    serverBack = 'localhost:8880'
}


export const SERVER_BACK = serverBack;
export const LOGIN_URL = '/login?username={username}&password={password}';