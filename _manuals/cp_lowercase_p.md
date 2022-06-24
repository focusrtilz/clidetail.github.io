---
layout: manual
title:  "cp -p || See the built-in protection mechanism of command cp"
tags: "cp"
---

### Scenario
The __`cp`__ comand helps us to copy files or directories in various ways. 

### Options `-p` for `cp`
Command __`cp`__ is the abbreviation of __`copy`__.
Option __`-p`__ is the abbreviation of  __`preserve`__.

### Manpage Description

Option __`-p`__: 

Cause cp to `preserve` the following attributes of each source file in the copy: `modification time`, `access time`, `file flags`, `file mode`, `user ID`, and `group ID`, as allowed by `permissions`. `Access Control Lists (ACLs)` and `Extended Attributes (EAs)`, including resource forks, will also be preserved.

If the user ID and group ID cannot be preserved, no error message is displayed and the exit value is not altered.

If the source file has its set-user-ID bit on and the user ID cannot be preserved, the set-user-ID bit is not preserved in the copy's permissions.  

If the source file has its set-group-ID bit on and the group ID cannot be preserved, the set-group-ID bit is not preserved in the copy's permissions. 

If the source file has both its set-user-ID and set-group-ID bits on, and either the user ID or group ID cannot be preserved, neither the set-user-ID nor set-group-ID bits are preserved in the copy's permissions.

### Detail Explain

When using the __`cp`__ command without any options, it has a protection mechanism which disabled the __`write`__ permission for the copied one.

So, when we're doing cyber security forensics, we tend to keep as much information as we can for the files. Thus, we suggest to use __-p__ as the default option.


### Version
Mac BSD General Commands Manual

### Examples
Here is the example of __`cp -p`__.

- __`cp -p`__ copy files with attributes preseved.

```bash
$ chmod 777 source.txt 
$ ls -el
-rwxrwxrwx  1 user  staff  6 Jun  8 14:58 source.txt
$ cp source.txt dest.txt
$ ls -el
-rwxr-xr-x  1 user  staff  6 Jun  8 15:10 dest.txt
$ cp -p source.txt destPreserved.txt
$ ls -el
-rwxrwxrwx  1 user  staff  6 Jun  8 14:58 destPreserved.txt
```

