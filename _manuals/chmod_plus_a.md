---
layout: manual
title:  "chmod +a [ACL Manipulation] || Another permission control machenism"
tags: "chmod"
---

### Scenario
When specifying `whom` (__`owner, group, others`__) to have what `permission` (__`read, write, execute`__), we use command __`chmod`__.

Usually, we use __`mode`__ to specify the permissions. However, there is a __`ACL (Access Control List)`__ setting for detailed manipulation of the permissions.

### Abbreviation of `chmod` 
__`chmod`__ is the combination of two words, __`change`__ and __`mode`__.

### Manpage Description
Change file __`modes`__ or __`Access Control Lists (ACL)`__.

The __`+a`__ mode parses a new ACL entry from the next argument on the commandline and inserts it into the canonical location in the ACL. If the supplied entry refers to an identity already listed, the two entries are combined.

### Detail Explain

The `+a` option provides so many detailed manipulation for permission settings. For example, if we want to prevent a particular user from executing a executable. We can use this option to set the rule.

The grammar goes like this.

__`who`__ __`allow/deny`__ __`permission`__

So, if we want to prevent user john from executing a excutable. We can use __`chmod +a "john deny execute" executableFile`__ to solve the problem.

### Version
Mac (BSD) command line utilities

### Examples
Here is the example of __`chmod +a`__ to a __`executable file`__.

- __`chmod +a "john deny execute" executable file`__ Remove john's execute permission of `executable file`.

```bash
$ls -el
-rwxr-xr-x+  1 john  staff   20 May 30 16:19 execute.sh

$whoami 
john

$chmod +a "john deny execute" 

$ls -el
-rwxr-xr-x+  1 john  staff   20 May 30 16:19 execute.sh
 0: user:john deny execute
 
$./execute.sh 
zsh: permission denied: ./execute.sh
```
