// @ts-check
const { withBlitz } = require("@blitzjs/next")

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
    images: {
        domains: ['img.youtube.com', 'i.scdn.co'],
    }
}

module.exports = withBlitz(config)
