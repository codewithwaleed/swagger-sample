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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SimplePostPutPatchAndDeleteApi);
  }
}(this, function(expect, SimplePostPutPatchAndDeleteApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SimplePostPutPatchAndDeleteApi.PutStudentNameApi();
  });

  describe('(package)', function() {
    describe('PutStudentNameApi', function() {
      describe('putStudentName', function() {
        it('should call putStudentName successfully', function(done) {
          // TODO: uncomment, update parameter values for putStudentName call
          /*
          var opts = {};
          opts.name = new SimplePostPutPatchAndDeleteApi.Name();
          opts.rollId = new SimplePostPutPatchAndDeleteApi.RollId();

          instance.putStudentName(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
