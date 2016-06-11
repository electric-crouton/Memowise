export const DEBUG = false;

export const config = {
  api: {
    protocol: process.env.PROTOCOL || 'http',
    host: 'localhost',
    port: process.env.PORT || 3000,
  },
};
