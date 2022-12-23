---
layout: manual
title:  The list of rm options with example
tags: rm
---

This is a list of `rm` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-d` or `--dir`
#### Description

Attempt to remove the file hierarchy rooted in each file argument.  The super-user can use the --no-preserve-root option to override this protection.  See the description of the --preserve-root option under _FILES_ for details.

#### Example

```
$ rm -d <file>
```

### Option `-f` or `--force`
#### Description

Attempt to remove the files without prompting for confirmation, regardless of the file`s permissions.  If the file does not exist, do not display a diagnostic message or modify the exit status to reflect an error.  The -f option overrides any previous -i options.

#### Example

```
$ rm -f <file>
```

### Option `-i` or `--interactive`
#### Description

Require confirmation before any removal.  If the user responds with a single character of `y` or `Y`, the file is removed.  If the user responds with a single character of `n` or `N`, the file is not removed.  If the user responds with a single character of `s` or `S`, the removal of the file is skipped, but any subsequent removals are still performed.  If the user responds with a single character of `q` or `Q`, no more removals are performed.  Any other response causes the user to be prompted again.  The -i option overrides any previous -f options.

#### Example

```
$ rm -i <file>
```

### Option `-I` or `--interactive=once`
#### Description

Request confirmation once before removing more than three files, or when removing recursively.  The -I option overrides any previous -f or -i options.

#### Example

```
$ rm -I <file>
```

### Option `-P` or `--no-preserve-root`
#### Description

This flag has no effect.  It is kept only for backwards compatibility with 4.4BSD-Lite2.

#### Example

```
$ rm -P <file>
```

### Option `-R` or `--recursive`
#### Description

Attempt to remove the file hierarchy rooted in each file argument.  The super-user can use the --no-preserve-root option to override this protection.  See the description of the --preserve-root option under _FILES_ for details.

#### Example

```
$ rm -R <file>
```

### Option `-r` or `--recursive`
#### Description

Equivalent to -R.

#### Example

```
$ rm -r <file>
```

### Option `-v` or `--verbose`
#### Description

Be verbose when deleting files, showing them as they are removed.

#### Example

```
$ rm -v <file>
```

### Option `-W` or `--interactive=whenever`
#### Description

Attempt to undelete the named files.  Currently, this option can only be used to recover files covered by whiteouts in a union file system (see undelete(2)).

#### Example

```
$ rm -W <file>
```

### Option `-x` or `--one-file-system`
#### Description

When removing a hierarchy recursively, skip any directory that is on a file system different from that of the corresponding command line argument.  This can be used to avoid removing the contents of mount points.  This option has no effect when the -d option is used.

#### Example

```
$ rm -x <file>
```
