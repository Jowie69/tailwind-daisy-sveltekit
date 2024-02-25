import adapter from '@sveltejs/adapter-auto';
import { preprocess } from 'svelte/compiler';

const config = {
  kit: {
    adapter: adapter(),
  },
  preprocess: preprocess, // Removed parentheses here
};

export default config;
