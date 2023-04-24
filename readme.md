# [Olynet Wiki ](https://www.olynet.club)
test

![GitHub Deployment Status (main)](https://img.shields.io/github/deployments/OlyNet/wiki/production?label=vercel&logo=vercel)
![License](https://img.shields.io/github/license/OlyNet/wiki)

https://olynet.club

Olynet's Self Service and Troubleshooting for dorm residents of the *Olympisches
Dorf* regarding connectivity to the dorm's network and the internet.

## Develop
1. Install Docker and docker-compose
2. Build the wiki with `docker-compose build app`
3. Spin up the container, `docker-compose up`
4. Visit `http://localhost:3000` to view dev server
5. Happy coding!

Useful commands:

```sh
$ docker-compose start # Start development server (container)
$ docker-compose stop # To stop
$ docker-compose restart # To restart
$ docker-compose down # To remove the container
```

## Credits

* [Nextra](https://nextra.site) - Site Generation Framwork
* [Vercel](https://vercel.com) - Hosting

## License

MIT License
