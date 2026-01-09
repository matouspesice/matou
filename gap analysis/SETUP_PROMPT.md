# React + Tailwind CSS Setup Prompt

Use this prompt to set up a new React + Tailwind CSS project with the same configuration as the PDP Content System project.

## Initial Setup Commands

```bash
npm create vite@latest project-name -- --template react-ts
cd project-name

npm install
npm install -D tailwindcss@^3 postcss autoprefixer
npx tailwindcss init -p
```

## Configuration Steps

1. **Rename TypeScript files to JavaScript:**
   - `src/App.tsx` → `src/App.jsx`
   - `src/main.tsx` → `src/main.jsx`
   - Update `index.html` to reference `main.jsx` instead of `main.tsx`
   - Update import in `main.jsx` from `./App.tsx` to `./App.jsx`
   - Remove TypeScript non-null assertion (`!`) from `main.jsx`: change `document.getElementById('root')!` to `document.getElementById('root')`

2. **Update `tailwind.config.js`:**
   ```js
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

3. **Update `src/index.css`:**
   Replace all content with:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   
   /* Add your custom styles here */
   ```

4. **Clear `src/App.css`:**
   Delete all content (leave it empty)

5. **Create `vercel.json` in project root:**
   ```json
   {
     "rewrites": [
       {
         "source": "/(.*)",
         "destination": "/index.html"
       }
     ]
   }
   ```

6. **Update `tsconfig.json`:**
   ```json
   {
     "files": [],
     "references": [
       { "path": "./tsconfig.app.json" },
       { "path": "./tsconfig.node.json" }
     ],
     "compilerOptions": {
       "noImplicitAny": false,
       "strict": false
     }
   }
   ```

7. **Update `tsconfig.app.json`:**
   - Set `"strict": false`
   - Add `"noImplicitAny": false`
   - Add `"allowJs": true` in compilerOptions
   - Change `"noUnusedLocals": true` to `false`
   - Change `"noUnusedParameters": true` to `false`
   - Update `"include"` to: `["src/**/*.js", "src/**/*.jsx"]`

8. **Verify `postcss.config.js` exists and contains:**
   ```js
   export default {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   }
   ```

## Project Structure

```
project-name/
├── src/
│   ├── App.jsx          ← Replace content here for new page
│   ├── App.css          (empty)
│   ├── main.jsx
│   └── index.css        (Tailwind directives + custom styles)
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── package.json
```

## Customization

**Only modify `src/App.jsx`** with your new page content. Keep the same React component structure:

```jsx
import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    // Add any initialization scripts here (intersection observers, etc.)
  }, []);

  return (
    <div className="text-white overflow-x-hidden">
      {/* Your page content here */}
    </div>
  )
}

export default App
```

## Run Development Server

```bash
npm run dev
```

## Important Notes

- Use Tailwind CSS v3 (not v4) for compatibility
- All HTML attributes must use JSX syntax: `className` instead of `class`, `strokeLinecap` instead of `stroke-linecap`, etc.
- Move all `<style>` tag content to `src/index.css`
- Convert HTML comments `<!-- -->` to JSX comments `{/* */}`
- Move `<script>` tag logic to React `useEffect` hooks
- Remove `<!DOCTYPE>`, `<html>`, `<head>`, and `<body>` tags from React components

## Example Conversion Checklist

- [ ] All `class` → `className`
- [ ] All `stroke-linecap` → `strokeLinecap`
- [ ] All `stroke-linejoin` → `strokeLinejoin`
- [ ] All `stroke-width` → `strokeWidth`
- [ ] All HTML comments → JSX comments
- [ ] All inline `<script>` → `useEffect` hooks
- [ ] All `<style>` content → `index.css`
- [ ] Remove HTML document structure tags from component
