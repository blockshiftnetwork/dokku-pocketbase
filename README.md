# Pocketbase Dokku

![image](https://user-images.githubusercontent.com/8460736/188195613-01a44972-24eb-459c-a437-cdfa34b1bf73.png)


[Pocketbase](https://pocketbase.io) is a Open Source backend for your next SaaS and Mobile app in 1 file
## Documentation

[Read Pocketbase Documentation](https://pocketbase.io/docs)

## Demo

[Live Demo](https://pocketbase.io/demo/)

## Installation

1. Clone this repository
2. Run `cd dokku-pocketbase`
3. Create Dokku App in your server `dokku apps:create pocketbase`
4. Create a Persistent Storage `dokku storage:ensure-directory pocketbase`
5. Mounting storage into pocketbase app `dokku storage:mount pocketbase /var/lib/dokku/data/storage/pocketbase:/app/pb_data`
6. Add your dokku remote `git remote add dokku dokku@ipOrHosthere:pocketbase`
7. Push to your dokku `git push dokku main`
8. Done

## You want another Pocketbase version?

If you want to change the Pocketbase version just edit the Dockerfile and change the argument `POCKETBASE_VERSION` to your custom version