'use strict';

/**
 * course controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::course.course', ({ strapi }) => ({
  async find(ctx) {
    // Add default populate for relations and media
    ctx.query = {
      ...ctx.query,
      populate: {
        featuredImage: true,
        featuredVideo: true,
        instructors: {
          populate: {
            profile_pic: true,
          },
        },
      },
    };

    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },

  async findOne(ctx) {
    // Add default populate for relations and media
    ctx.query = {
      ...ctx.query,
      populate: {
        featuredImage: true,
        featuredVideo: true,
        instructors: {
          populate: {
            profile_pic: true,
          },
        },
      },
    };

    const { data, meta } = await super.findOne(ctx);
    return { data, meta };
  },
}));
