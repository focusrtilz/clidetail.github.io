---
layout: manual
title:  "chown [owner] || See how to avoid security issues when using chown" 
tags: chown
---

### Scenario
When we need to change the owner or group of files or directories, we use command __`chown`__ to do the work.

### Command `chown` 
 __`chown`__ stands for __`change owner`__.

### Manpage Description
The chown utility changes the __`user ID`__ and/or __`the group ID`__ of the specified files.

### Detail Explain
When using chown to change the owner of soft link files (symbolic files), we need to be really careful about it! Because this might give the new symbolic file owner the permission to write the source file.

This might cause privacy and security issues! 

### Version
Mac BSD System Manager's Manual

### Examples
Here is the example of __`chown user`__.

- __`chown user`__ Change the owner of a file.

```bash
$ whoami 
john

$ sudo touch rootPermission.txt
Password:

$ ls -el 
total 0
-rw-r--r--  1 root  staff  0 Jun 14 10:00 rootPermission.txt

$ sudo ln -s rootPermission.txt rP_link.txt

$ echo "test" >> rP_link.txt 
zsh: permission denied: rP_link.txt

$ sudo chown john rP_link.txt

$ ls -el
total 8
lrwxr-xr-x  1 root   staff  18 Jun 14 10:06 rP_link.txt -> rootPermission.txt
-rw-r--r--  1 john   staff   5 Jun 14 10:06 rootPermission.txt

$ echo "test" >> rP_link.txt

$ cat rootPermission.txt 
test
```

