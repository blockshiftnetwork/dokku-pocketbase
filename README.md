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
