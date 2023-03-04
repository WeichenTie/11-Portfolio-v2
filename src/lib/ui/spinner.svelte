<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <defs>
        <linearGradient x1="50%" y1="92.034%" x2="50%" y2="7.2%" id="a">
            <stop offset="0%" stop-color="currentColor" />
            <stop stop-opacity="0" offset="100%" stop-color="white" />
        </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
    <path
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
</svg>

<style lang="postcss">
    @tailwind components;
    @layer components {
        svg {
            @apply animate-spin mx-1 w-4;
        }
        circle {
            @apply opacity-25;
        }
        path {
            @apply opacity-75;
        }
    }
</style>
