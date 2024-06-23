import type { Config } from "tailwindcss";
import customCssUtility from "./custom-css-utility";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	safelist: [
		// { pattern: /(bg|text|border|shadow)-(blue|orange|violet|pink|green|sky|emerald|slate)-(400|500|600)/ },

	],
	theme: {
		extend: {
			colors: {
				'navy': '#050a1a',
				'primary-header-txt': '#F6F6F7',
				'primary-parag-txt': '#c9c9cf',
				'primary-btn-purple': '#6357f7',
				'primary-btn-pink': '#a937fe',
				'primary-border': '#ffffff33'
			},
			boxShadow: {
				'half-border': '0px -0.5px 0px 0.5px'
			},
			height: {
			},
			backgroundImage: {
				'fade-linear-tb': 'linear-gradient(to bottom, rgba(215, 215, 215, 0.15) 0%, transparent 70%, transparent 90%, transparent 100%)'
			},
			animation: {
				'slight_to_lr': 'slight_lr 3s ease-in-out infinite',
				'fade_in_up': 'fade_in_up 0.8s linear 0s 1 forwards',
				'fade_in_down': 'fade_in_down 0.3s linear 0s 1 forwards',
				'fade_out_down': 'fade_out_down 0.3s linear 0s 1 forwards',
				'fade_in': 'fade_in 0.3s linear 0s 1 forwards',
				'fade_out': 'fade_out 0.3s linear 0s 1 forwards',
				'bounce_low': 'bounce_low 1.7s ease-in-out infinite',
				'translate_y':'translateY 0.7s linear 0s 1 forwards',
				'loader_dots':'loader_dots 1s steps(4) infinite',
			},
			screens:{
				'xs':'320px',
				'xsm':'540px'
			},
			keyframes: {
				'bounce_low':{
					'0%,100%':{
						'transform': 'translateY(-10%)',
					},
					'50%':{
						'transform': 'none'
					}
				},
				'slight_lr': {
					'0%': {
						'transform': 'translateX(0)'
					},
					'100%': {
						'transform': 'translateX(60%)'
					}
				},
				'fade_in':{
					'to':{
						opacity:'1',
					},
				},
				'fade_out':{
					'to':{
						'opacity':'0'
					}
				},
				'fade_in_down': {
					'0%': {
						opacity:'0',
						transform: 'translateY(-40px)',
					},
					'100%': {
						opacity:'1',
						transform: 'translateY(0)',
					},
				},
				'fade_out_down': {
					'0%': {
						opacity:'1',
						transform: 'translateY(0px)',
					},
					'100%': {
						opacity:'0',
						transform: 'translateY(40px)',
					},
				},
				'fade_in_up': {
					'0%': {
						opacity:'0',
						transform: 'translateY(40px)',
					},
					'100%': {
						opacity:'1',
						transform: 'translateY(0)',
					},
				},
				'translateY':{
					'to': {
						'transform':'translateY(0px)'
					},
				},
				'loader_dots':{
					'to':{
						'clip-path':'inset(0 -34% 0 0)'
					}
				}
			},
		},
	},
	plugins: [
		customCssUtility
	]
};
export default config;
