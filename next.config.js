// Перенаправление с / на /form
// Конфиг, доступный только на server side 

module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/form",
        permanent: true,
      },
    ];
  },
  serverRuntimeConfig: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};
