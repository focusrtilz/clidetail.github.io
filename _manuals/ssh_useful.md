---
layout: manual
title: "Useful commands with ssh"
tags: ssh
---

This is a list of useful commands utilizing `ssh`. The examples provided were generated through an experiment using chatGPT to describe the command and provide examples.

### Compare remote file with local file.

This command will open an SSH session to the remote server, run the command diff /path/to/remote_file.txt on the remote machine and compare it to the local file "local_file.txt" on your local machine.

```
$ ssh user@remote 'diff /path/to/remote_file.txt' < local_file.txt
```

### Connect to final destination via intermediate host

This command will create an SSH connection through the intermediate host "intermediate_host" to the final destination "final_destination" as user2.

Note: This command requires that the intermediate host has SSH access to the final destination, and that the user has access to both the intermediate and final hosts.

```
$ ssh -J user1@intermediate_host user2@final_destination
```