/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#f6f8fb',
        ink: {
          300: '#9aa8bb',
          400: '#8494a9',
          500: '#5f7288',
          600: '#485a71',
          700: '#33455c',
          800: '#22334a',
          900: '#132234'
        },
        brand: {
          50: '#f2f7fd',
          100: '#e3effa',
          200: '#c6ddf4',
          300: '#9cc4ea',
          400: '#6ba4db',
          500: '#4787c7',
          600: '#356daa',
          700: '#2c588c',
          800: '#294b74',
          900: '#274161'
        }
      },
      fontFamily: {
        sans: [
          '"Inter"',
          '"SF Pro Text"',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          'system-ui',
          'sans-serif'
        ],
        mono: ['"JetBrains Mono"', '"SFMono-Regular"', 'Consolas', '"Liberation Mono"', 'monospace']
      },
      boxShadow: {
        soft: '0 24px 60px -32px rgba(31, 66, 110, 0.28)',
        card: '0 16px 40px -32px rgba(31, 66, 110, 0.35)',
        lift: '0 28px 60px -28px rgba(31, 66, 110, 0.32)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        float: 'float 7s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
