'use strict';

/**
 * live-course controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::live-course.live-course', ({ strapi }) => ({
  async find(ctx) {
    // Add default populate for nested instructor profile_pic
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
    // Add default populate for nested instructor profile_pic
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
