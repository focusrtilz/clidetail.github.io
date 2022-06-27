---
layout: manual
title: "echo | Combining the use of > or >> to create service logs"
tags: echo
---

### Scenario
When we need to write arguments to the standard output, we use command __`echo`__ to do the work.

### Detail Explain

When writing shell scripts for sysmtem management or service monitoring, we often use command __`echo`__ to show or log status, errors, bugs of the system/service.

We can simply do that with __`>`__ and __`>>`__. For example, if some errors occured, we can use __`echo "service unavailable > service.log"`__. This can help us to pass the standard output (string: service unavailable) to file (service.log). The difference between __`>`__ and __`>>`__ is that, __`>`__ creates file and write one-time message to the file. Instead, __`>>`__ appends strings to exited file and creates file if it doesn't exit.

### Version
Mac (BSD) command line utilities

### Examples
Here is the example of __`echo`__.

- __`echo "hello\nworld" > msg.log`__ Write standard output string to file.

```bash
$ echo "hello\nworld" > msg.log
$ cat msg.log 
hello
world
```
