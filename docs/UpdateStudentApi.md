# SimplePostPutPatchAndDeleteApi.UpdateStudentApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updateStudent**](UpdateStudentApi.md#updateStudent) | **PATCH** /studentU | Update a student record


<a name="updateStudent"></a>
# **updateStudent**
> updateStudent(opts)

Update a student record

Updated an item to the system

### Example
```javascript
var SimplePostPutPatchAndDeleteApi = require('simple__post_put_patch_and_delete_api');

var apiInstance = new SimplePostPutPatchAndDeleteApi.UpdateStudentApi();

var opts = { 
  'name': new SimplePostPutPatchAndDeleteApi.Name(), // Name | Student item to add
  'title': new SimplePostPutPatchAndDeleteApi.Title(), // Title | Student Title to add
  'className': new SimplePostPutPatchAndDeleteApi.ClassName(), // ClassName | Inventory item to add
  'section': new SimplePostPutPatchAndDeleteApi.Section(), // Section | Inventory item to add
  'rollId': new SimplePostPutPatchAndDeleteApi.RollId() // RollId | Inventory item to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateStudent(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**Name**](Name.md)| Student item to add | [optional] 
 **title** | [**Title**](Title.md)| Student Title to add | [optional] 
 **className** | [**ClassName**](ClassName.md)| Inventory item to add | [optional] 
 **section** | [**Section**](Section.md)| Inventory item to add | [optional] 
 **rollId** | [**RollId**](RollId.md)| Inventory item to add | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

