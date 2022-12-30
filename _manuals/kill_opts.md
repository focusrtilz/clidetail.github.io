---
layout: manual
title:  The list of kill options with example
tags: kill
---

This is a list of `kill` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-s`
#### Description

A symbolic signal name specifying the signal to be sent instead of the default TERM.

#### Example

```
$ kill -s HUP 1234
```

### Option `-l`
#### Description

If no operand is given, list the signal names; otherwise, write the signal name corresponding to exit_status.

#### Example

```
$ kill -l 9
```

### Option `-1`
#### Description

If superuser, broadcast the signal to all processes; otherwise broadcast to all processes belonging to the user.

#### Example

```
$ sudo kill -1 -1
```