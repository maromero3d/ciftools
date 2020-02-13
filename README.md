[![License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](./LICENSE)
[![npm version](https://badge.fury.io/js/ciftools.svg)](https://www.npmjs.com/package/ciftools)
[![Gitter](https://badges.gitter.im/molstar/Lobby.svg)](https://gitter.im/molstar/Lobby)

## Usage

### CIF schema generation
    cifschema -o mmcif.ts -p mmCIF
    cifschema -o ccd.ts -p CCD
    cifschema -o bird.ts -p BIRD

    cifschema -o core-cif.ts -p coreCIF

## Building

### Build:
    npm install
    npm run build

### Build automatically on file save:
    npm run watch

### Build with debug mode enabled:
    DEBUG=molstar npm run watch

### Build for production:
    NODE_ENV=production npm run build

### Scripts installation
    npm run build
    npm install -g

## Publish

## Prerelease
    npm version prerelease # asumes the current version ends with '-dev.X'
    npm publish --tag next

## Release
    npm version 0.X.0 # provide valid semver string
    npm publish

## Contributing
Just open an issue or make a pull request. All contributions are welcome.

## Funding
Funding sources include but are not limited to:
* [RCSB PDB](https://www.rcsb.org) funding by a grant [DBI-1338415; PI: SK Burley] from the NSF, the NIH, and the US DoE
* [PDBe, EMBL-EBI](https://pdbe.org)
* [CEITEC](https://www.ceitec.eu/)