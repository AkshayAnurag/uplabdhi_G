# uplabdhi_G

## Deployment to Cloudflare Pages

1.  **Push to GitHub/GitLab:** Ensure your project is pushed to a GitHub or GitLab repository.
2.  **Connect to Cloudflare Pages:**
    *   Log in to the Cloudflare dashboard.
    *   Navigate to Workers & Pages > Create application > Pages > Connect to Git.
    *   Select your repository.
3.  **Configure Build Settings:**
    *   **Production branch:** Select your main branch (e.g., `main` or `master`).
    *   **Build command:** `npm run build`
    *   **Build output directory:** `dist`
    *   **Environment variables (optional):** If you encounter Node.js version issues during the build on Cloudflare, you might need to set `NODE_VERSION` here. Check Cloudflare's build image defaults or set a version compatible with the `engines` field in your `package.json` (e.g., `>=18.20.0`).
4.  **Deploy:** Save and Deploy. Cloudflare Pages will automatically build and deploy your site. It will also redeploy on subsequent pushes to your production branch.