export const GITHUB_ACCOUNTS = [
  // {
  //   username: 'kimaru355',
  //   token: process.env.GITHUB_READ_USER_TOKEN_WORK,
  //   endpoint: '/api/github?type=work',
  //   type: 'work',
  //   is_active: true,
  // },
  {
    username: 'kimaru355',
    token: process.env.GITHUB_READ_USER_TOKEN_PERSONAL,
    endpoint: '/api/github?type=personal',
    type: 'personal',
    is_active: true,
  },
];
