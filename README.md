*Lisboa Digital* - Concept Work
================================

Implemention stage of *Lisboa Digital* project.

This project was developed by Pedro Pereira to fulfill the necessary requirements to obtain a Master's degree in New Media and Web Practices from NOVA Faculty of Social and Human Sciences, in Lisbon, Portugal.

Feel free to contribute, fork and distribute.

--------------------------------------------

How to start enhancing this project
-----------------------------------

Leveraging a Docker environment you can start developing in no time.

Just install [Docker Desktop](https://www.docker.com/products/docker-desktop), open your preferred terminal on the root of the project, and follow the next few simple steps.

1. **Open a Shell on the Docker environment:**
```console
docker-compose run --service-ports --rm workspace bash
```

2. **Use NPM to start Hugo in development mode**:
```console
npm run dev
```

3. **Just stop it when you want to:**
```
CTRL+C
```

4. **Use NPM to make a build compatible with Github:**
```console
npm run build:github
```

### Close the Docker environment shell:
```
exit
```

Third-party
-----------

To help implement the interfaces the following software/libraries were used:

+ [Hugo](https://github.com/gohugoio/hugo)
+ [Boostrap](https://github.com/twbs/bootstrap)
+ [Sass-Rem](https://github.com/pierreburel/sass-rem)

For the development environment:

+ [Docker Desktop](https://www.docker.com/products/docker-desktop)
+ [Node.js & NPM](https://nodejs.org)

Read more about the Docker and Node setup on this files:

+ docker-compose.yml
+ Dockerfile
+ package.json
