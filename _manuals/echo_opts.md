---
layout: manual
title:  The list of echo options with example
tags: echo
---

This is a list of `echo` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-n` or `--no-newline`
#### Description

Do not print the trailing newline character.  This may also be achieved by appending ‘\c’ to the end of the string, as is done by iBCS2 compatible systems.  Note that this option as well as the effect of ‘\c’ are implementation-defined in IEEE Std 1003.1-2001 (“POSIX.1”) as amended by Cor. 1-2002.  Applications aiming for maximum portability are strongly encouraged to use printf(1) to suppress the newline character.

#### Example

```
$ echo -n <string>
```
