---
layout: manual
title:  The list of cp options with example
tags: cp
---

This is a list of `cp` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-a` or `--archive`

#### Description

Archive mode. Same as -RpP options. Preserves structure and attributes of files but not directory structure.

#### Example

```
$ cp -a file1.txt file2.txt
```

### Option `-f` or `--force`

#### Description

If the destination file cannot be opened, remove it and create a new file, without prompting for confirmation regardless of its permissions.  (The -f option overrides any previous -n option.)

#### Example

```
$ cp -f file1.txt file2.txt
```

### Option `-i` or `--interactive`

#### Description

Cause cp to write a prompt to the standard error output before copying a file that would overwrite an existing file.  If the response from the standard input begins with the character ‘y’ or ‘Y’, the file copy is attempted.  (The -i option overrides any previous -n option.)

#### Example

```
$ cp -i file1.txt file2.txt
```

### Option `-l` or `--link`

#### Description

Create hard links to regular files in a hierarchy instead of copying.

#### Example

```
$ cp -l file1.txt file2.txt
```

### Option `-n` or `--no-clobber`

#### Description

Do not overwrite an existing file.  (The -n option overrides any previous -f or -i options.)

#### Example

```
$ cp -n file1.txt file2.txt
```

### Option `-p` or `--preserve`

#### Description

Cause cp to preserve the following attributes of each source file in the copy: modification time, access time, file flags, file mode, user ID, and group ID, as allowed by permissions.  Access Control Lists (ACLs) and Extended Attributes (EAs), including resource forks, will also be preserved.

If the user ID and group ID cannot be preserved, no error message is displayed and the exit value is not altered.

If the source file has its set-user-ID bit on and the user ID cannot be preserved, the set-user-ID bit is not preserved in the copy's permissions.
If the source file has its set-group-ID bit on and the group ID cannot be preserved, the set-group-ID bit is not preserved in the copy's permissions.
If the source file has both its set-user-ID and set-group-ID bits on, and either the user ID or group ID cannot be preserved, neither the set-user-ID
nor set-group-ID bits are preserved in the copy's permissions.

#### Example

```
$ cp -p file1.txt file2.txt
```

### Option `-s` or `--symbolic-link`

#### Description

Create symbolic links to regular files in a hierarchy instead of copying.

#### Example

```
$ cp -s file1.txt file2.txt
```

### Option `-R` or `--recursive`

#### Description

If source_file designates a directory, cp copies the directory and the entire subtree connected at that point.  If the source_file ends in a /, the contents of the directory are copied rather than the directory itself.  This option also causes symbolic links to be copied, rather than indirected through, and for cp to create special files rather than copying them as normal files.  Created directories have the same mode as the corresponding source directory, unmodified by the process' umask.

Note that cp copies hard linked files as separate files.  If you need to preserve hard links, consider using tar(1), cpio(1), or pax(1) instead.

#### Example

```
$ cp -R dir1 dir2
```
