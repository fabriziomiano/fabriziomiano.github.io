# FabrizioMiano.com

Personal website and resume for Fabrizio Miano, built as a custom static Jekyll site for GitHub Pages.

The current version keeps the architecture intentionally small: Liquid includes for the shell, one custom stylesheet, one lightweight JavaScript file, local visual assets, and a reusable Docker-based Jekyll workflow.

Hosted at [fabriziomiano.com](https://fabriziomiano.com/).

## Local checks

Build the site with the cached Docker toolchain:

```sh
bin/site build
```

Serve locally on <http://localhost:4000>:

```sh
bin/site serve
```

The first run builds a local Docker image and installs gems into the `fabriziomiano_site_bundle` Docker volume. Later runs reuse both, so static-site checks are much faster.
