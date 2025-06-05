# Pocketbase Dokku

![Pocketbase Logo](https://user-images.githubusercontent.com/8460736/188195613-01a44972-24eb-459c-a437-cdfa34b1bf73.png)

[Pocketbase](https://pocketbase.io) is a powerful, open-source backend designed for SaaS and mobile applications, all implemented with a single file.

## Pocketbase Documentation

For comprehensive Pocketbase usage and implementation details, visit the [Pocketbase Documentation](https://pocketbase.io/docs).

## Pocketbase Live Demo

Experience the capabilities of Pocketbase through the [Live Demo](https://pocketbase.io/demo/).

## How to Install Pocketbase on Dokku

To install Pocketbase on a Dokku server, follow these detailed steps:

1. **Clone the Repository**: Download the repository onto your local machine.
   ```sh
   git clone https://github.com/your-repo/dokku-pocketbase.git
   ```
2. **Navigate to Directory**: Change to the `dokku-pocketbase` directory.
   ```sh
   cd dokku-pocketbase
   ```
3. **Create a Dokku App**: Set up a new Dokku app named `pocketbase` on your server.
   ```sh
   dokku apps:create pocketbase
   ```
4. **Ensure Persistent Storage**: Create a directory for persistent storage.
   ```sh
   dokku storage:ensure-directory pocketbase
   ```
5. **Mount Storage**: Attach the persistent storage to your Pocketbase app.
   ```sh
   dokku storage:mount pocketbase /var/lib/dokku/data/storage/pocketbase:/app/pb_data
   ```
6. **Set Pocketbase Version**: (Optional) Specify the Pocketbase version.
   ```sh
   dokku config:set pocketbase POCKETBASE_VERSION=0.22.4
   ```
7. **Add Dokku Remote**: Link your local repository to the Dokku remote.
   ```sh
   git remote add dokku dokku@<YOUR_SERVER_IP>:pocketbase
   ```
8. **Deploy Pocketbase**: Push your application to the Dokku server.
   ```sh
   git push dokku main
   ```

Pocketbase will now be operational on your server.

## Production Environment Variables

When deploying Pocketbase to a production environment on Dokku, it's crucial to configure the following environment variables. These ensure your application runs smoothly and securely.

- `POCKETBASE_ADMIN_EMAIL`: Specifies the email address for the initial administrator account. This account is used to access the Pocketbase admin UI.
- `POCKETBASE_ADMIN_PASSWORD`: Sets the password for the initial administrator account. Choose a strong, unique password.
- `POCKETBASE_APP_NAME`: Defines the name of your application. This can be reflected in various parts of the Pocketbase system and UI.
- `POCKETBASE_APP_URL`: The public URL where your application will be accessible (e.g., `https://your-app.dokku.example.com`). This is important for ensuring Pocketbase generates correct links and for CORS settings if you have a separate frontend.

You can set these environment variables using the `dokku config:set` command. Here's an example for each:

```sh
dokku config:set pocketbase POCKETBASE_ADMIN_EMAIL=admin@example.com
dokku config:set pocketbase POCKETBASE_ADMIN_PASSWORD=yourSuperSecretPassword
dokku config:set pocketbase POCKETBASE_APP_NAME="My Awesome App"
dokku config:set pocketbase POCKETBASE_APP_URL=https://my-awesome-app.dokku.example.com
```

Make sure to replace the example values with your actual desired configuration.

## Customizing Pocketbase Version

To select a different Pocketbase version, modify the Dockerfile or set the `POCKETBASE_VERSION` environment variable in your Dokku app.

## Upgrading Pocketbase

Upgrade your Pocketbase instance to a new version with these commands:

1. Add Docker build argument:
   ```sh
   dokku docker-options:add pocketbase build '--build-arg POCKETBASE_VERSION=0.22.22'
   ```
2. Rebuild your app:
   ```sh
   dokku ps:rebuild pocketbase
   ```

## Pocketbase Backups

From version 0.16+, Pocketbase includes built-in backup and restore APIs accessible via the Admin UI (Settings > Backups).

## Backup Strategy

While Pocketbase offers a convenient built-in backup feature through its Admin UI (accessible via Settings > Backups), it's important to establish a robust backup strategy for your production data.

Consider the following recommendations:

- **Regularly Schedule Backups**: Automate your backups to run at regular intervals (e.g., daily or weekly) depending on your data change frequency and recovery point objectives (RPO).
- **Secure Off-site Storage**: Store your backups in a separate and secure location, preferably off-site from your Dokku server. This could be a cloud storage service (like AWS S3, Google Cloud Storage, Backblaze B2) or another physical server. This protects your data in case of server-level failures.
- **Test Restore Procedures**: Periodically test your backup restoration process to ensure your backups are valid and can be restored successfully.
- **Refer to Official Documentation**: For detailed instructions on creating, managing, and restoring backups, always consult the official [Pocketbase Documentation](https://pocketbase.io/docs/backups/). The documentation provides the most up-to-date and comprehensive guidance.

A well-thought-out backup strategy is crucial for data durability and disaster recovery.

## Security Hardening

Securing your Pocketbase instance is vital, especially in a production environment. Here are several recommendations to enhance the security of your deployment:

- **Keep Pocketbase Updated:** Software vulnerabilities are discovered and patched over time. Regularly check the [Pocketbase releases page](https://github.com/pocketbase/pocketbase/releases) and update your instance to the latest version. You can update the `POCKETBASE_VERSION` build argument in your `Dockerfile` or set it as an environment variable in Dokku and rebuild your app.

- **Strong Admin Credentials:** The Pocketbase admin account provides full access to your data and settings.
    - Use a strong, unique password for this account.
    - Set the admin email and password via environment variables (`POCKETBASE_ADMIN_EMAIL`, `POCKETBASE_ADMIN_PASSWORD`) as described in the "Production Environment Variables" section. This prevents them from being hardcoded or easily discovered.

- **Secure API Rules:** Pocketbase allows you to define API rules for each collection, controlling who can access and modify data.
    - Apply the principle of least privilege: only grant the necessary permissions.
    - Carefully craft your API rules to prevent unauthorized data access or modification. Review these rules regularly, especially when your application logic changes.

- **Enable HTTPS:** Encrypting traffic between your users and your Pocketbase instance is essential.
    - Dokku offers robust Let's Encrypt integration for free SSL/TLS certificates. This is the recommended way to enable HTTPS.
    - Refer to the [Dokku SSL documentation](https://dokku.com/docs/networking/ssl/) for detailed instructions on configuring HTTPS for your app.

- **Review Pocketbase Settings:** Within the Pocketbase Admin UI (under Settings), review and configure the following:
    - **Application Name & URL:** Ensure these are set correctly. The Application URL (`POCKETBASE_APP_URL` environment variable) is particularly important for security features like OAuth2 and email verification.
    - **Allowed CORS Origins:** If your frontend is hosted on a different domain, specify the allowed origins to prevent cross-site request forgery (CSRF) and other web vulnerabilities. Be as specific as possible.
    - Other security-related settings as they become available in newer Pocketbase versions.

- **Firewall:** Implement a firewall at the server level (e.g., using `ufw` on Ubuntu).
    - Restrict access to only necessary ports (typically 80 for HTTP and 443 for HTTPS).
    - This provides an additional layer of defense against network-based attacks.

By implementing these hardening measures, you can significantly improve the security posture of your Pocketbase application on Dokku.

## Pocketbase Custom Business Logic

Enhance Pocketbase by writing custom business logic in Go or JavaScript. Use the `pb_hooks` directory to create a portable backend. Learn more in the [Pocketbase as a Framework](https://pocketbase.io/docs/use-as-framework/) guide.

## Troubleshooting Pocketbase

Consult the [Pocketbase Documentation](https://pocketbase.io/docs) or open an issue on our [GitHub repository](https://github.com/blockshiftnetwork/dokku-pocketbase/issues) for any installation or usage problems.

# Custom Web and Mobile Solutions

Seeking a custom web application or a bespoke solution for your business? The BlockShift team can assist with:

- Custom Laravel/PHP application development
- Vue.js or JavaScript solutions for web and mobile applications
- Expert consulting services for existing applications

## Contact Us

Ready to start your project? Visit [blockshift.us](https://blockshift.us/contact/) and discover more about our services.

## Contributing

We welcome contributions! For details on how to get started, review our [Contributing Guide](/CONTRIBUTING.md).

## License Information

This project is licensed under the MIT License. View the [LICENSE](LICENSE) file for more details.
