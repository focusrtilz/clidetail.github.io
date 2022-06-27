---
layout: manual
title:  "tar -t | List files before extracting" 
tags: tar
---

### Scenario
When we need to archive files or directories, we use command __`tar`__ to do the work.

### Option __`-t`__ Command `tar` 
 __`tar`__ stands for __`tap archives`__.
 __`-t`__ is the abbreviation of __lis`t`__.

### Manpage Description
List archive contents to stdout. The long option form is __`--list`__.

### Detail Explain
It is possible that the size of a archived tar file is large and contains lots of files inside. With option __`-t`__, we don't need extract the tar file to find particular files.

We can use option __`-t`__ to list the files inside first, and then use `pipe` to pass the results to another tool `grep` to see if particular files are inside this archived file. 

This can help us to save time because the extraction might take a long time. 

### Version
Mac BSD General Commands Manual

### Examples
Here is the example of __`tar -t`__.

- __`tar -t`__ List files inside the archive file.

```bash
$ tar -tf archived.tar 
tarFiles/
tarFiles/file3
tarFiles/file2
tarFiles/file1

$ tar -tf archived.tar|grep "file3"
tarFiles/file3
```

