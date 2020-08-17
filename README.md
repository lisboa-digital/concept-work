*Lisboa Digital* - Concept Work
================================

Implemention stage of *Lisboa Digital* project.

This project was developed by Pedro Pereira to fulfill the necessary requirements to obtain a Master's degree in New Media and Web Practices from NOVA Faculty of Social and Human Sciences, in Lisbon, Portugal.

Feel free to contribute, fork and distribute.

--------------------------------------------

How to start enhancing this project
-----------------------------------

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

5. **Close the Docker environment shell:**
```
exit
```

Third-party
-----------

+ [Hugo](https://github.com/gohugoio/hugo) to create the static build;
+ [Boostrap](https://github.com/twbs/bootstrap) to accelerate the CSS development;
+ [Sass-Rem](https://github.com/pierreburel/sass-rem) to convert pixel to rem units;
+ [Leaflet](https://github.com/Leaflet/Leaflet) to render the Map;
+ [AR.js](https://github.com/AR-js-org/AR.js) to help with the AR feature.
+ [Docker Desktop](https://www.docker.com/products/docker-desktop) to launch and manage the environment dependencies;
+ [Node.js & NPM](https://nodejs.org) to help Hugo process the assets and define project-wide commands.
