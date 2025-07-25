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
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'balloon-float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(-2deg)' },
					'50%': { transform: 'translateY(-20px) rotate(2deg)' }
				},
				'confetti-fall': {
					'0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '1' },
					'100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' }
				},
				'ribbon-cut': {
					'0%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
					'50%': { clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' },
					'100%': { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }
				},
				'celebrate-pulse': {
					'0%, 100%': { transform: 'scale(1)', filter: 'brightness(1)' },
					'50%': { transform: 'scale(1.05)', filter: 'brightness(1.2)' }
				},
				'sparkle': {
					'0%, 100%': { opacity: '0', transform: 'scale(0)' },
					'50%': { opacity: '1', transform: 'scale(1)' }
				},
				'bounce-in': {
					'0%': { transform: 'scale(0.3) rotate(-10deg)', opacity: '0' },
					'50%': { transform: 'scale(1.1) rotate(5deg)', opacity: '0.8' },
					'100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'balloon-float': 'balloon-float 3s ease-in-out infinite',
				'confetti-fall': 'confetti-fall 3s linear infinite',
				'ribbon-cut': 'ribbon-cut 2s ease-in-out forwards',
				'celebrate-pulse': 'celebrate-pulse 2s ease-in-out infinite',
				'sparkle': 'sparkle 1.5s ease-in-out infinite',
				'bounce-in': 'bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
