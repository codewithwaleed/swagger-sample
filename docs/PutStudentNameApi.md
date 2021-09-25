# SimplePostPutPatchAndDeleteApi.PutStudentNameApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**putStudentName**](PutStudentNameApi.md#putStudentName) | **PUT** /studentP | Update a student name in record


<a name="putStudentName"></a>
# **putStudentName**
> putStudentName(opts)

Update a student name in record

Updated a selective attribute in an item to the system

### Example
```javascript
var SimplePostPutPatchAndDeleteApi = require('simple__post_put_patch_and_delete_api');

var apiInstance = new SimplePostPutPatchAndDeleteApi.PutStudentNameApi();

var opts = { 
  'name': new SimplePostPutPatchAndDeleteApi.Name(), // Name | Student item to add
  'rollId': new SimplePostPutPatchAndDeleteApi.RollId() // RollId | Inventory item to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putStudentName(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**Name**](Name.md)| Student item to add | [optional] 
 **rollId** | [**RollId**](RollId.md)| Inventory item to add | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

