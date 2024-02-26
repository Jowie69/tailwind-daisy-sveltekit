import adapter from '@sveltejs/adapter-vercel';
import { preprocess } from 'svelte/compiler';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
  preprocess: preprocess, // Removed parentheses here
};

export default config;
