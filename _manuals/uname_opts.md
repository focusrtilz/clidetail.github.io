---
layout: manual
title:  The list of uname options with example
tags: uname
---

This is a list of `uname` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-a`
#### Description

Behave as though all of the options -mnrsv were specified.

#### Example

```
$ uname -a
Linux my-machine 4.15.0-76-generic #86-Ubuntu SMP Fri Jan 17 17:25:51 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux
```

### Option `-m`
#### Description

print the machine hardware name.

#### Example

```
$ uname -m
x86_64
```

### Option `-n`
#### Description

print the nodename (the nodename may be a name that the system is known by to a communications network).

#### Example

```
$ uname -n
my-machine
```

### Option `-r`
#### Description

print the operating system release.

#### Example

```
$ uname -r
4.15.0-76-generic
```

### Option `-s`
#### Description

print the operating system name.

#### Example

```
$ uname -s
Linux
```

### Option `-p`
#### Description

print the machine processor architecture name.

#### Example

```
$ uname -p
x86_64
```

### Option `-v`
#### Description

print the operating system version.

#### Example

```
$ uname -v
#86-Ubuntu SMP Fri Jan 17 17:25:51 UTC 2020
```