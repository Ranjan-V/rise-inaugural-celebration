import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				celebration: {
					gold: 'hsl(var(--celebration-gold))',
					pink: 'hsl(var(--celebration-pink))',
					blue: 'hsl(var(--celebration-blue))',
					green: 'hsl(var(--celebration-green))',
					purple: 'hsl(var(--celebration-purple))',
					orange: 'hsl(var(--celebration-orange))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'balloon-float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(-2deg) scale(1)' },
					'33%': { transform: 'translateY(-25px) rotate(1deg) scale(1.05)' },
					'66%': { transform: 'translateY(-15px) rotate(-1deg) scale(0.95)' }
				},
				'confetti-fall': {
					'0%': { transform: 'translateY(-100vh) rotate(0deg) scale(1)', opacity: '1' },
					'10%': { opacity: '1' },
					'90%': { opacity: '0.8' },
					'100%': { transform: 'translateY(100vh) rotate(1080deg) scale(0.5)', opacity: '0' }
				},
				'fireworks': {
					'0%': { transform: 'scale(0) rotate(0deg)', opacity: '1' },
					'50%': { transform: 'scale(1.5) rotate(180deg)', opacity: '0.8' },
					'100%': { transform: 'scale(0) rotate(360deg)', opacity: '0' }
				},
				'ribbon-cut': {
					'0%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', transform: 'scaleX(1)' },
					'50%': { clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)', transform: 'scaleX(0.8)' },
					'100%': { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', transform: 'scaleX(0)' }
				},
				'celebrate-pulse': {
					'0%, 100%': { transform: 'scale(1) rotate(0deg)', filter: 'brightness(1) hue-rotate(0deg)' },
					'25%': { transform: 'scale(1.03) rotate(1deg)', filter: 'brightness(1.1) hue-rotate(15deg)' },
					'50%': { transform: 'scale(1.06) rotate(-1deg)', filter: 'brightness(1.2) hue-rotate(30deg)' },
					'75%': { transform: 'scale(1.03) rotate(1deg)', filter: 'brightness(1.1) hue-rotate(15deg)' }
				},
				'sparkle': {
					'0%, 100%': { opacity: '0', transform: 'scale(0) rotate(0deg)' },
					'50%': { opacity: '1', transform: 'scale(1.2) rotate(180deg)' }
				},
				'bounce-in': {
					'0%': { transform: 'scale(0.1) rotate(-15deg)', opacity: '0' },
					'30%': { transform: 'scale(1.2) rotate(5deg)', opacity: '0.7' },
					'50%': { transform: 'scale(0.9) rotate(-2deg)', opacity: '0.9' },
					'70%': { transform: 'scale(1.05) rotate(1deg)', opacity: '1' },
					'100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' }
				},
				'logo-entrance': {
					'0%': { transform: 'scale(0) rotate(-180deg)', opacity: '0', filter: 'blur(10px)' },
					'50%': { transform: 'scale(1.1) rotate(10deg)', opacity: '0.8', filter: 'blur(2px)' },
					'100%': { transform: 'scale(1) rotate(0deg)', opacity: '1', filter: 'blur(0px)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'float-gentle': {
					'0%, 100%': { transform: 'translateY(0px) scale(1)' },
					'50%': { transform: 'translateY(-10px) scale(1.02)' }
				},
				'rainbow-rotate': {
					'0%': { filter: 'hue-rotate(0deg) saturate(1)' },
					'100%': { filter: 'hue-rotate(360deg) saturate(1.2)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'balloon-float': 'balloon-float 4s ease-in-out infinite',
				'confetti-fall': 'confetti-fall 4s linear infinite',
				'fireworks': 'fireworks 2s ease-out infinite',
				'ribbon-cut': 'ribbon-cut 3s ease-in-out forwards',
				'celebrate-pulse': 'celebrate-pulse 3s ease-in-out infinite',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'bounce-in': 'bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'logo-entrance': 'logo-entrance 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
				'shimmer': 'shimmer 3s linear infinite',
				'float-gentle': 'float-gentle 6s ease-in-out infinite',
				'rainbow-rotate': 'rainbow-rotate 4s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
