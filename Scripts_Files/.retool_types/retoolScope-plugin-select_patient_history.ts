const select_patient_history = {
  "_selector": ["select_patient_history"] as const,
  "_isPlugin": true,
  "id": "select_patient_history",
    /**
  * Declare cached results invalid. Next request will retrieve fresh results.
  **/
  invalidateCache: (): unknown => undefined as unknown,
  /**
  * Trigger query run. Returns a Promise that resolves to the query's `.data` property.
  * @param options
  * @param options.onSuccess Function to call after query successfully returns.
  * @param options.onFailure Function to call on query failure.
  * @param options.additionalScope Additional context to pass to query.
  **/
  trigger: (options: {onSuccess: any, onFailure: any, additionalScope: any}): Promise<unknown> => undefined as unknown as Promise<unknown>,
  /**
  * Clear the `.data` and `.error` properties of the query.
  **/
  reset: (): unknown => undefined as unknown,
  "pluginType": "SqlQueryUnified",
  "tableName": "",
  "query": "SELECT \n  patient_name,\n  service_type,\n  location,\n  appointment_time,\n  message,\n  submitted_at\nFROM \n  appointment_bookings\n\nORDER BY \n  appointment_time DESC;",
  "databaseNameOverride": "",
  "databaseHostOverride": "",
  "databaseUsernameOverride": "",
  "databasePasswordOverride": "",
  "databaseRoleOverride": "",
  "databaseWarehouseOverride": "",
  "shouldEnableBatchQuerying": false,
  "shouldUseLegacySql": false,
  "queryRefreshTime": "",
  "streamResponse": false,
  "records": "",
  /** The time in milliseconds when the query was last received from the resource (not the cache). */
  "lastReceivedFromResourceAt": null,
  "isFunction": false,
  "functionParameters": null,
  "queryDisabledMessage": "",
  /** Boolean indicating whether query results were returned from cache. */
  "servedFromCache": false,
  "offlineUserQueryInputs": "",
  "functionDescription": null,
  "successMessage": "",
  /** Boolean indicating whether this query is disabled. */
  "queryDisabled": "",
  "playgroundQuerySaveId": "latest",
  "workflowParams": null,
  "resourceNameOverride": "",
  /** Boolean indicating whether the query automatically runs when parameters change. */
  "runWhenModelUpdates": true,
  "workflowRunExecutionType": "sync",
  "showFailureToaster": true,
  "playgroundQueryUuid": "",
  "playgroundQueryId": null,
  /** If the query encountered an error while running, this field will be populated with the error message. */
  "error": null,
  "workflowRunBodyType": "raw",
  "queryRunOnSelectorUpdate": false,
  "runWhenPageLoadsDelay": "",
  "recordId": "",
  "isImported": false,
  "showSuccessToaster": true,
  "cacheKeyTtl": "",
  "filterBy": "",
  /** The time the query request was sent. */
  "requestSentTimestamp": 1743385599659,
  "metadata": null,
  "editorMode": "sql",
  /** How long the query took to execute */
  "queryRunTime": null,
  "actionType": "",
  "changesetObject": "",
  "offlineOptimisticResponse": null,
  "errorTransformer": "return data.error",
  /** The time in milliseconds when the query finished executing. */
  "finished": null,
  "confirmationMessage": null,
  "isFetching": true,
  "changeset": "",
  "rawData": null,
  "queryTriggerDelay": 0,
  "resourceTypeOverride": null,
  "enableErrorTransformer": false,
  "enableBulkUpdates": false,
  "showLatestVersionUpdatedWarning": false,
  "timestamp": 0,
  "enableTransformer": false,
  "showUpdateSetValueDynamicallyToggle": true,
  "overrideOrgCacheForUserCache": false,
  "bulkUpdatePrimaryKey": "",
  /** Boolean indicating whether this query auto runs on page load. */
  "runWhenPageLoads": false,
  "transformer": "return data",
  "events": null,
  "queryTimeout": 10000,
  "workflowId": null,
  "requireConfirmation": false,
  "queryFailureConditions": "",
  "changesetIsObject": false,
  "enableCaching": false,
  "doNotThrowOnNoOp": false,
  "offlineQueryType": "None",
  "queryThrottleTime": 750,
  "updateSetValueDynamically": false,
  "notificationDuration": "",
  /** You can use the `.data` property to refer to the result of this query. */
  "data": null
} as const
