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
    define(['ApiClient', 'model/ClassName', 'model/Name', 'model/RollId', 'model/Section', 'model/Title'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ClassName'), require('../model/Name'), require('../model/RollId'), require('../model/Section'), require('../model/Title'));
  } else {
    // Browser globals (root is window)
    if (!root.SimplePostPutPatchAndDeleteApi) {
      root.SimplePostPutPatchAndDeleteApi = {};
    }
    root.SimplePostPutPatchAndDeleteApi.UpdateStudentApi = factory(root.SimplePostPutPatchAndDeleteApi.ApiClient, root.SimplePostPutPatchAndDeleteApi.ClassName, root.SimplePostPutPatchAndDeleteApi.Name, root.SimplePostPutPatchAndDeleteApi.RollId, root.SimplePostPutPatchAndDeleteApi.Section, root.SimplePostPutPatchAndDeleteApi.Title);
  }
}(this, function(ApiClient, ClassName, Name, RollId, Section, Title) {
  'use strict';

  /**
   * UpdateStudent service.
   * @module api/UpdateStudentApi
   * @version 1.0.0
   */

  /**
   * Constructs a new UpdateStudentApi. 
   * @alias module:api/UpdateStudentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the updateStudent operation.
     * @callback module:api/UpdateStudentApi~updateStudentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a student record
     * Updated an item to the system
     * @param {Object} opts Optional parameters
     * @param {module:model/Name} opts.name Student item to add
     * @param {module:model/Title} opts.title Student Title to add
     * @param {module:model/ClassName} opts.className Inventory item to add
     * @param {module:model/Section} opts.section Inventory item to add
     * @param {module:model/RollId} opts.rollId Inventory item to add
     * @param {module:api/UpdateStudentApi~updateStudentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateStudent = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['rollId'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/studentU', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));