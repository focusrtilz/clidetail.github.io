---
layout: manual
title:  The list of chown options with example
tags: chown
---

This is a list of `chown` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-H`
#### Description

If the -R option is specified, symbolic links on the command line are followed and hence unaffected by the command. (Symbolic links encountered during traversal are not followed.)

#### Example

```
$ chown -H <user> <file>
```

### Option `-L`
#### Description

If the -R option is specified, all symbolic links are followed.

#### Example

```
$ chown -L <user> <file>
```

### Option `-P`
#### Description

If the -R option is specified, no symbolic links are followed.  Instead, the user and/or group ID of the link itself are modified.  This is the default. Use -h to change the user ID and/or the group of symbolic links.

#### Example

```
$ chown -P <user> <file>
```

### Option `-R`
#### Description

Change the user ID and/or the group ID of the file hierarchies rooted in the files, instead of just the files themselves. Beware of unintentionally matching the “..” hard link to the parent directory when using wildcards like “.*”.

#### Example

```
$ chown -R <user> <file>
```

### Option `-f`
#### Description

Do not report any failure to change file owner or group, nor modify the exit status to reflect such failures.

#### Example

```
$ chown -f <user> <file>
```

### Option `-h`
#### Description

If the file is a symbolic link, change the user ID and/or the group ID of the link itself.

#### Example

```
$ chown -h <user> <file>
```

### Option `-n`
#### Description

Interpret user ID and group ID as numeric, avoiding name lookups.

#### Example

```
$ chown -n <user> <file>
```

### Option `-v`
#### Description

Cause chown to be verbose, showing files as the owner is modified.  If the -v flag is specified more than once, chown will print the filename, followed by the old and new numeric user/group ID.

#### Example

```
$ chown -v <user> <file>
```

### Option `-x`
#### Description

File system mount points are not traversed.

#### Example

```
$ chown -x <user> <file>
```
