#!/usr/bin/env node

const suffix = require('./package.json').name.includes('-edge') ? '-edge' : ''
debugger
require('@nuxt/cli' + suffix).run()
  .catch((error) => {
    require('consola').fatal(error)
    process.exit(2)
  })
