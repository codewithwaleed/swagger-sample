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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ClassName', 'model/Name', 'model/RollId', 'model/Section', 'model/Title', 'api/AddStudentApi', 'api/DeleteStudentApi', 'api/PutStudentNameApi', 'api/UpdateStudentApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ClassName'), require('./model/Name'), require('./model/RollId'), require('./model/Section'), require('./model/Title'), require('./api/AddStudentApi'), require('./api/DeleteStudentApi'), require('./api/PutStudentNameApi'), require('./api/UpdateStudentApi'));
  }
}(function(ApiClient, ClassName, Name, RollId, Section, Title, AddStudentApi, DeleteStudentApi, PutStudentNameApi, UpdateStudentApi) {
  'use strict';

  /**
   * This_is_a_simple_API_for_Kema_Post_Put_Patch_and_Delete.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SimplePostPutPatchAndDeleteApi = require('index'); // See note below*.
   * var xxxSvc = new SimplePostPutPatchAndDeleteApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SimplePostPutPatchAndDeleteApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SimplePostPutPatchAndDeleteApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SimplePostPutPatchAndDeleteApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ClassName model constructor.
     * @property {module:model/ClassName}
     */
    ClassName: ClassName,
    /**
     * The Name model constructor.
     * @property {module:model/Name}
     */
    Name: Name,
    /**
     * The RollId model constructor.
     * @property {module:model/RollId}
     */
    RollId: RollId,
    /**
     * The Section model constructor.
     * @property {module:model/Section}
     */
    Section: Section,
    /**
     * The Title model constructor.
     * @property {module:model/Title}
     */
    Title: Title,
    /**
     * The AddStudentApi service constructor.
     * @property {module:api/AddStudentApi}
     */
    AddStudentApi: AddStudentApi,
    /**
     * The DeleteStudentApi service constructor.
     * @property {module:api/DeleteStudentApi}
     */
    DeleteStudentApi: DeleteStudentApi,
    /**
     * The PutStudentNameApi service constructor.
     * @property {module:api/PutStudentNameApi}
     */
    PutStudentNameApi: PutStudentNameApi,
    /**
     * The UpdateStudentApi service constructor.
     * @property {module:api/UpdateStudentApi}
     */
    UpdateStudentApi: UpdateStudentApi
  };

  return exports;
}));
