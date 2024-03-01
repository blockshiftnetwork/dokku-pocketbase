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
6. Add the Dokku remote by executing: `git remote add dokku dokku@ipOrHosthere:pocketbase`.
7. Push the code to your Dokku remote using: `git push dokku main`.
8. You're done! Pocketbase should now be successfully installed on your server.

## Customizing Pocketbase Version

If you wish to use a different version of Pocketbase, you can do so by modifying the Dockerfile. Simply change the value of the `POCKETBASE_VERSION` argument to your desired version.