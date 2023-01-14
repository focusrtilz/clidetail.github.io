---
layout: manual
title: "Useful commands with curl"
tags: curl
---

This is a list of useful commands utilizing `curl`. The examples provided were generated through an experiment using chatGPT to describe the command and provide examples.

### Update twitter with curl.

To update a Twitter status using curl, you will need to have a valid Twitter developer account and create an application to obtain the necessary API keys and tokens. Once you have the required keys, you can use the curl command with the -d option to send a POST request to the Twitter API to update your status.

This command will update your Twitter status with the message "Hello World" using the bearer token "YOUR_BEARER_TOKEN".

Note: This command uses a bearer token instead of OAuth 1.0, which is no longer supported by Twitter. You will need to use OAuth 2.0 for authentication and obtain the bearer token from your developer account.

```
$ curl --request POST --data 'status=Hello World' --header 'Authorization: Bearer YOUR_BEARER_TOKEN' 'https://api.twitter.com/1.1/statuses/update.json'
```