import withPWA from 'next-pwa';

const isDev = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,      // Enable React strict mode for improved error handling
    swcMinify: true,            // Enable SWC minification for improved performance
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development"     // Remove console.log in production
    }
};

export default withPWA({
    dest: "public",         // destination directory for the PWA files
    disable: process.env.NODE_ENV === "development",        // disable PWA in the development environment
    register: true,         // register the PWA service worker
    skipWaiting: true,      // skip waiting for service worker activation
    exclude: [
        // add buildExcludes here
        ({ asset, compilation }) => {
            if (
                asset.name.startsWith("server/") ||
                asset.name.match(/^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/) ||
                asset.name.includes("server")
            ) {
                return true;
            }
            if (isDev && !asset.name.startsWith("static/runtime/")) {
                return true;
            }
            return false;
        }
    ],
})(nextConfig);