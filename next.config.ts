import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
    {
      hostname:"anexosolucoes.com.br"
    },
    {
      hostname:"raw.githubusercontent.com"
    }
    ]
  }
  /* config options here */
};

export default nextConfig;
