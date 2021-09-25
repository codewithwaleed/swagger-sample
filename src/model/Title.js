/*
 * Simple  Post Put Patch and Delete API
 * This is a simple API for Kema Post Put Patch and Delete
 *
 * OpenAPI spec version: 1.0.0
 * Contact: kema@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SimplePostPutPatchAndDeleteApi) {
      root.SimplePostPutPatchAndDeleteApi = {};
    }
    root.SimplePostPutPatchAndDeleteApi.Title = factory(root.SimplePostPutPatchAndDeleteApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Title model module.
   * @module model/Title
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Title</code>.
   * @alias module:model/Title
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Title</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Title} obj Optional instance to populate.
   * @return {module:model/Title} The populated <code>Title</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    return data;
  }


  return exports;

}));
