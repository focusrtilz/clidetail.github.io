---
layout: manual
title: "Useful commands with ps"
tags: ps
---

This is a list of useful commands utilizing `ps`. The examples provided were generated through an experiment using chatGPT to describe the command and provide examples.

### Show top processes by memory usage

This command will display the top ten running processes sorted by memory usage in descending order. The ps -e -o pid,comm,%mem will display the pid, comm (process name) and the %mem columns for all the processes and sort them by %mem in descending order using the --sort=-%mem. The head -n 11 command will display the first 11 lines of the output which will include the top 10 processes.

Note : The first line of the output is the headers for the columns, so to only see the top 10 processes, you'll have to use the head -n 11 instead of head -n 10

You can also use top command instead of ps command to see the running process sorted by memory usage by default. It also shows the process sorted by CPU usage, process id, and other information.

```
$ ps -e -o pid,comm,%mem --sort=-%mem | head -n 11
```