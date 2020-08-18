*Lisboa Digital* - Concept Work
================================

Implemention stage of *Lisboa Digital* project.

This project was developed by Pedro Pereira to fulfill the necessary requirements to obtain a Master's degree in New Media and Web Practices from NOVA Faculty of Social and Human Sciences, in Lisbon, Portugal.

Feel free to contribute, fork and distribute.

--------------------------------------------

How to start enhancing this project
-----------------------------------

Just install [Docker Desktop](https://www.docker.com/products/docker-desktop), open your preferred terminal on the root of the project, and follow the next few simple steps.


1. **Open a Shell on the Docker *workspace* service:**
```console
docker-compose run --service-ports --rm workspace bash
```

2. **Use NPM to start Hugo in development mode**:
```console
npm run dev
```

3. **Open your Browser on:**
```
http://localhost:1313
```

4. **Stop everything when you want to:**
```
CTRL+C
```

5. **Use NPM to make a build compatible with Github:**
```console
npm run build:github
```

6. **Close the Docker *workspace* service shell:**
```
exit
```

If you need to improve the AR feature, you'll need a https URL, so...
----------------------------------------------------------------------

1. **Replace "your-host.local" for your own local host on the Caddyfile**

2. **Launch the Docker Compose environment:**
```console
docker-compose up
```

3. **Open your Browser on your local host:**
```
http://<your-local-host>
```

4. **Stop everything when you want to:**
```
CTRL+C
```

5. **If you need to Build for Github just follow the other steps above**


Third-party
-----------

+ [Hugo](https://github.com/gohugoio/hugo) to create the static build;
+ [Boostrap](https://github.com/twbs/bootstrap) to accelerate the CSS development;
+ [Sass-Rem](https://github.com/pierreburel/sass-rem) to convert pixel to rem units;
+ [Leaflet](https://github.com/Leaflet/Leaflet) to render the Map;
+ [AR.js](https://github.com/AR-js-org/AR.js) to help with the AR feature.
+ [Docker Desktop](https://www.docker.com/products/docker-desktop) to launch and manage the environment dependencies;
+ [Node.js & NPM](https://nodejs.org) to help Hugo process the assets and define project-wide commands.
