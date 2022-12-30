---
layout: manual
title:  The list of df options with example
tags: df
---

This is a list of `df` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-a` or `--all`
#### Description

Show all mount points, including those that were mounted with the MNT_IGNORE flag.

#### Example

```$ df -a
```

### Option `-b`
#### Description

Use (the default) 512-byte blocks.  This is only useful as a way to override an BLOCKSIZE specification from the environment.

#### Example

```
$ df -b
```

### Option `-g`
#### Description

Use 1073741824-byte (1-Gbyte) blocks rather than the default.  Note that this overrides the BLOCKSIZE specification from the environment.

#### Example

```
$ df -g
```

### Option `-H`
#### Description

When used with the -l option, display sizes in human readable format (e.g., 1K 234M 2G).

#### Example

```
$ df -lH
```

### Option `-h`
#### Description

"Human-readable" output.  Use unit suffixes: Byte, Kilobyte, Megabyte, Gigabyte, Terabyte and Petabyte in order to reduce the number of digits to three or less using base 2 for sizes.

#### Example

```
$ df -h
Filesystem             Size  Used Avail Use% Mounted on
/dev/sda1             7.8G  748M  7.0G  10% /
devtmpfs               64K   0B   64K   0% /dev
tmpfs                 128K 168K  128K   1% /run
tmpfs                  51M  72K   51M   1% /run/lock
tmpfs                 128K   0B  128K   0% /run/shm
```

### Option `-i`
#### Description

Include statistics on the number of free inodes. This option is now the default to conform to Version 3 of the Single UNIX Specification (“SUSv3”) Use -P to suppress this output.

#### Example

```
$ df -i
```

### Option `-k`
#### Description

Use 1024-byte (1-Kbyte) blocks, rather than the default.  Note that this overrides the BLOCKSIZE specification from the environment.

#### Example

```
$ df -k
```

### Option `-l`
#### Description

Only display information about locally-mounted filesystems.

#### Example

```
$ df -l
```

### Option `-m`
#### Description

Use 1048576-byte (1-Mbyte) blocks rather than the default.  Note that this overrides the BLOCKSIZE specification from the environment.

#### Example

```
$ df -m
```

### Option `-n`
#### Description

Print out the previously obtained statistics from the filesystems.  This option should be used if it is possible that one or more filesystems are in a state such that they will not be able to provide statistics without a long delay.  When this option is specified, df will not request new statistics from the filesystems, but will respond with the possibly stale statistics that were previously obtained.

#### Example

```
$ df -n
```

### Option `-P`
#### Description

Use (the default) 512-byte blocks.  This is only useful as a way to override an BLOCKSIZE specification from the environment.

#### Example

```
$ df -P
```

### Option `-T`
#### Description

Only print out statistics for filesystems of the specified types.  More than one type may be specified in a comma separated list.  The list of filesystem types can be prefixed with “no” to specify the filesystem types for which action should not be taken.  For example, the df command: `df -T nonfs,mfs` lists all filesystems except those of type NFS and MFS.  The lsvfs(1) command can be used to find out the types of filesystems that are available on the system.

#### Example

```
$ df -T nonfs,mfs
```

### Option `-t`
#### Description

If used with no arguments, this option is a no-op (Mac OS X already prints the total allocated-space figures).  If used with an argument, it acts like -T, but this usage is deprecated and should not be relied upon.

#### Example

```
$ df -t nonfs,mfs
```
