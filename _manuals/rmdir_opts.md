---
layout: manual
title:  The list of rmdir options with example
tags: rmdir
---

This is a list of `rmdir` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-p`
#### Description

Each directory argument is treated as a pathname of which all components will be removed, if they are empty, starting with the last most component.  (See rm(1) for fully non-discriminant recursive removal.)

#### Example

```
$ rmdir -p /tmp/foo/bar/baz
```

### Option `-v`
#### Description

Be verbose, listing each directory as it is removed.

#### Example

```
$ rm -v /tmp/foo/bar/baz
```
