module.exports = {
  images: {
    loader: 'cloudinary',
    domains: ['media.graphcms.com'],
  },
  target: 'serverless',
  options: {
    dist: 'out_publish',
  },
};
