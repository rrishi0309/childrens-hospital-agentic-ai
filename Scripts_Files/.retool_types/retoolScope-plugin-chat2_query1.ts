const _LEVEL_1 = {
  "_chat2_query1_events": [{
      "_selector": ["chat2_query1","events","0"] as const,
      "event": "success",
      "type": "script",
      "method": "run",
      "pluginId": "",
      "targetId": null,
      "params": {
        "_selector": ["chat2_query1","events","0","params"] as const,
        "src": "const lastUserReply = chat2.lastMessage?.toLowerCase() || \"\";\n\nif (\n  lastUserReply.includes(\"yes\") ||\n  lastUserReply.includes(\"confirm\") ||\n  lastUserReply.includes(\"go ahead\") ||\n  lastUserReply.in..."
      } as const,
      "waitType": "debounce",
      "waitMs": 0
    } as const] as const,
  "_chat2_query1_chatHistory": [] as const,
}
const chat2_query1 = {
  "_selector": ["chat2_query1"] as const,
  "_isPlugin": true,
  "id": "chat2_query1",
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
  "pluginType": "RetoolAIQuery",
  /** You can use the `.data` property to refer to the result of this query. */
  "data": null,
  "isFetching": false,
  "streamResponse": true,
  "vectorDynamicUrls": "",
  "queryRefreshTime": "",
  "vectorActionNamespaceDynamicModeEnabled": false,
  "vectorCreateAndFetchDynamicModeEnabled": false,
  "imageClassifierDynamicLabels": "",
  /** The time in milliseconds when the query was last received from the resource (not the cache). */
  "lastReceivedFromResourceAt": null,
  "vectorSemanticSearchString": "",
  "isFunction": false,
  "functionParameters": null,
  "queryDisabledMessage": "",
  "customTemperature": 1,
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
  "runWhenModelUpdates": false,
  "workflowRunExecutionType": "sync",
  "showFailureToaster": true,
  "customSystemMessage": "",
  "textExtractorDynamicLabels": "",
  "query": "",
  "playgroundQueryUuid": "",
  "imageExtractorDynamicModeEnabled": false,
  "playgroundQueryId": null,
  /** If the query encountered an error while running, this field will be populated with the error message. */
  "error": null,
  "workflowRunBodyType": "raw",
  "model": "gpt-4o",
  "queryRunOnSelectorUpdate": false,
  "runWhenPageLoadsDelay": "",
  "defaultModelInitialized": true,
  "providerId": "retoolAIBuiltIn::openAI",
  "textClassifierDynamicModeEnabled": false,
  "instruction": "",
  "isImported": false,
  "imageModel": "dall-e-3",
  "showSuccessToaster": true,
  "fileUseDynamicSource": false,
  "cacheKeyTtl": "",
  /** The time the query request was sent. */
  "requestSentTimestamp": null,
  "textClassifierDynamicLabels": "",
  /** How long the query took to execute */
  "queryRunTime": null,
  "changesetObject": "",
  "offlineOptimisticResponse": null,
  "errorTransformer": "return data.error",
  /** The time in milliseconds when the query finished executing. */
  "finished": null,
  "embeddingModel": "text-embedding-ada-002",
  "confirmationMessage": null,
  "changeset": "",
  "chatInput": "",
  "rawData": null,
  "vectorNamespaceId": "",
  "queryTriggerDelay": 0,
  "resourceTypeOverride": null,
  "vectorDynamicNamespaces": "",
  "enableErrorTransformer": false,
  "imageExtractorDynamicLabels": "",
  "multimodalModel": "gpt-4o",
  "showLatestVersionUpdatedWarning": false,
  "vectorActionDynamicNamespace": "",
  "dynamicModelName": "",
  "timestamp": 0,
  "textExtractorDynamicModeEnabled": false,
  "action": "chatResponseGeneration",
  "enableTransformer": false,
  "showUpdateSetValueDynamicallyToggle": true,
  "fileSource": "",
  "dynamicModelEnabled": false,
  "systemMessage": "You are a helpful assistant for Children’s Steps Pediatric Hospital. You ONLY support hospital-related topics such as:\n\n- Information about the hospital’s services (Primary Care, Pediatric Cancer, Aut...",
  "overrideOrgCacheForUserCache": false,
  /** Boolean indicating whether this query auto runs on page load. */
  "runWhenPageLoads": false,
  "content": "",
  "transformer": "return data",
  "events": _LEVEL_1["_chat2_query1_events"] as RetoolArrayWrapper<["chat2_query1","events"], typeof _LEVEL_1["_chat2_query1_events"], 1>,
  "vectorAction": "upsertDocument",
  "isMultiplayerEdited": false,
  "queryTimeout": 120000,
  "workflowId": null,
  "vectorNamespacesDynamicModeEnabled": false,
  "requireConfirmation": false,
  "queryFailureConditions": "",
  "source": "",
  "imageClassifierDynamicModeEnabled": false,
  "changesetIsObject": false,
  "vectorModeEnabled": false,
  "providerName": "openAI",
  "enableCaching": false,
  "chatHistory": _LEVEL_1["_chat2_query1_chatHistory"] as RetoolArrayWrapper<["chat2_query1","chatHistory"], typeof _LEVEL_1["_chat2_query1_chatHistory"], 0>,
  "imageContent": "",
  "offlineQueryType": "None",
  "queryThrottleTime": 750,
  "updateSetValueDynamically": false,
  "notificationDuration": ""
} as const
