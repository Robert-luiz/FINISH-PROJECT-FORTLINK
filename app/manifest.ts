import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FortLink",
    short_name: "FortLink",
    description: "Portal FortLink",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0d47a1",
    orientation: "portrait",
    icons: [
      {
        src: "/icone-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icone-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}