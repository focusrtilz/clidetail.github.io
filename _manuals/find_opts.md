---
layout: manual
title:  The list of find options with example
tags: find
---

This is a list of `find` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-E`
#### Description

Interpret regular expressions followed by -regex and -iregex primaries as extended (modern) regular expressions rather than basic regular expressions (BRE's).  The re_format(7) manual page fully describes both formats.


#### Example

```
$ find . -E -regex '.*\.txt'
```

### Option `-H`
#### Description

Cause the file information and file type (see stat(2)) returned for each symbolic link specified on the command line to be those of the file referenced by the link, not the link itself.  If the referenced file does not exist, the file information and type will be for the link itself.  File information of all symbolic links not on the command line is that of the link itself.


#### Example

```
$ find / -type l -name '*lib*' -H
```

### Option `-L`
#### Description

Cause the file information and file type (see stat(2)) returned for each symbolic link to be those of the file referenced by the link, not the link itself.  If the referenced file does not exist, the file information and type will be for the link itself. This option is equivalent to the deprecated -follow primary.


#### Example

```
$ find . -type l -L
```

### Option `-P`
#### Description

Cause the file information and file type (see stat(2)) returned for each symbolic link to be those of the link itself.  This is the default.


#### Example

```
$ find . -type l -P
```

### Option `-X`
#### Description

Permit find to be safely used in conjunction with xargs(1).  If a file name contains any of the delimiting characters used by xargs(1), a diagnostic message is displayed on standard error, and the file is skipped.  The delimiting characters include single (“ ' ”) and double (“ " ”) quotes, backslash (“\”), space, tab and newline characters. However, you may wish to consider the -print0 primary in conjunction with “xargs -0” as an effective alternative.


#### Example

```
$ find . -type f -X | xargs grep 'pattern'
```

### Option `-d`
#### Description

Cause find to perform a depth-first traversal. This option is a BSD-specific equivalent of the -depth primary specified by IEEE Std 1003.1-2001 (“POSIX.1”).  Refer to its description under PRIMARIES for more information.


#### Example

```
$ find . -type d -d
```

### Option `-s`
#### Description

Cause find to traverse the file hierarchies in lexicographical order, i.e., alphabetical order within each directory.  Note: ‘find -s’ and ‘find | sort’ may give different results.


#### Example

```
$ find . -type f -s
```

### Option `-x`
#### Description

Prevent find from descending into directories that have a device number different than that of the file from which the descent began. This option is equivalent to the deprecated -xdev primary.

#### Example

```
$ find / -type f -x
```
