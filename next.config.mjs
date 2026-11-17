/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// AVIF first (smallest), WebP fallback; PNG originals stay as the source.
		formats: ["image/avif", "image/webp"],
		minimumCacheTTL: 60 * 60 * 24 * 30,
	},
};

export default nextConfig;
