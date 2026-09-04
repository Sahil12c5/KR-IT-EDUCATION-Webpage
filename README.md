# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Deploying to Hostinger

This project is fully configured and optimized for Hostinger (Shared Hosting, Cloud Hosting, and LiteSpeed/Apache).

### Option 1: Quick Upload via Hostinger File Manager (Recommended)

1. Build the production bundle:
   ```bash
   npm run build
   ```
2. Open your **Hostinger hPanel** -> **Websites** -> click **Manage** on your domain.
3. Go to **Files** -> **File Manager** -> open the `public_html/` folder.
4. Delete the default `default.php` or placeholder files in `public_html/`.
5. Upload all files and folders from the local **`dist/`** directory (including `.htaccess`, `index.html`, and the `assets/` folder) directly into `public_html/`.
6. Your website is live and fully functional with HTTPS, caching, and SPA routing!

### Option 2: Automated Deployment via GitHub Actions (FTP)

1. In your Hostinger hPanel, go to **Files** -> **FTP Accounts** to find your FTP host, username, and password.
2. In your GitHub repository:
   - Go to **Settings** -> **Secrets and variables** -> **Actions**.
   - Add three Repository Secrets:
     - `HOSTINGER_FTP_SERVER`: (e.g. `ftp.yourdomain.com` or your Hostinger FTP IP)
     - `HOSTINGER_FTP_USERNAME`: your Hostinger FTP user
     - `HOSTINGER_FTP_PASSWORD`: your Hostinger FTP password
3. Push to `main` and GitHub Actions will automatically build and deploy the latest version directly to Hostinger `public_html/`!

