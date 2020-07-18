BUILD_OPTS = -e gh_pages -d docs --ignoreCache --gc
SERVE_OPTS = --bind 0.0.0.0 -p 1313 --noHTTPCache --ignoreCache --disableFastRender --renderToDisk --gc

.PHONY: serve, build, clean

build: clean
	@hugo ${BUILD_OPTS}

serve: clean
	@hugo serve ${SERVE_OPTS}

clean:
	@rm -rf public docs