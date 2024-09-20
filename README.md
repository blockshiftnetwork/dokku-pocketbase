# Pocketbase Dokku

![Pocketbase Logo](https://user-images.githubusercontent.com/8460736/188195613-01a44972-24eb-459c-a437-cdfa34b1bf73.png)

[Pocketbase](https://pocketbase.io) is an open-source backend for your next SaaS and mobile app, designed to be implemented with just one file.

## Documentation

To learn more about Pocketbase and how to use it, please refer to the [Pocketbase Documentation](https://pocketbase.io/docs).

## Demo

You can explore a live demo of Pocketbase by visiting the [Live Demo](https://pocketbase.io/demo/) page.

## Installation

To install Pocketbase, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the `dokku-pocketbase` directory: `cd dokku-pocketbase`
3. Create a Dokku app on your server using the command: `dokku apps:create pocketbase`.
4. Ensure the creation of a persistent storage by running: `dokku storage:ensure-directory pocketbase`.
5. Mount the storage into the Pocketbase app using: `dokku storage:mount pocketbase /var/lib/dokku/data/storage/pocketbase:/app/pb_data`.
6. Set the Pocketbase version using an environment variable (Optional): `dokku config:set pocketbase POCKETBASE_VERSION=0.22.4`
7. Add the Dokku remote by executing: `git remote add dokku dokku@ipOrHosthere:pocketbase`.
8. Push the code to your Dokku remote using: `git push dokku main`.
9. You're done! Pocketbase should now be successfully installed on your server.

## Customizing Pocketbase Version

If you wish to use a different version of Pocketbase, you can do so by modifying the Dockerfile. Simply change the value of the `POCKETBASE_VERSION` argument to your desired version or set the `POCKETBASE_VERSION` environment variable on the Dokku app.

## Upgrading Pocketbase Version

To upgrade an existing Pocketbase instance to a new version, use the following Dokku command to add the Pocketbase version as a Docker build argument:

```sh
dokku docker-options:add pocketbase build '--build-arg POCKETBASE_VERSION=0.22.22'
```

Then, rebuild the app with:

```sh
dokku ps:rebuild pocketbase
```

## Backups

Since PocketBase v0.16+, there are built-in backups and restore APIs that can be accessed from the Admin UI (Settings > Backups).

## Custom Business Logic

PocketBase can be [used as a framework](https://pocketbase.io/docs/use-as-framework/) to write your own custom app business logic in Go or JavaScript. You can achieve this by using the `pb_hooks` directory, ensuring you still have a portable backend at the end.

## Troubleshooting

If you encounter any issues during installation or usage, please refer to the [Pocketbase Documentation](https://pocketbase.io/docs) or open an issue on this [GitHub repository](https://github.com/blockshiftnetwork/dokku-pocketbase/issues).

# Need a Custom Solution?

If you're looking for a custom web application or a bespoke solution for your business, we'd love to hear from you. Our team at BlockShift can help you:

- Build a custom Laravel/PHP application tailored to your needs
- Develop a Vue.js or JavaScript solution for your web or mobile application
- Provide expert consulting services for your existing application

## Get in Touch

Ready to discuss your project? Contact us today at [blockshift.us](https://blockshift.us/contact/) to learn more about our services and expertise.

## Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/pocketbase/pocketbase/blob/main/CONTRIBUTING.md) for more details on how to get started.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
