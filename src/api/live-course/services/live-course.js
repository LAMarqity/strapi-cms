'use strict';

/**
 * live-course service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::live-course.live-course');
