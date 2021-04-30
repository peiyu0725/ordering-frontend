const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['picsum.photos']
  },
  async rewrites() {
    return [
      {
        source: '/api',
        destination: 'http://localhost:3001/api',
      },
    ]
  },
}