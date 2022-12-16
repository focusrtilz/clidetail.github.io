---
layout: manual
title:  The list of ls options with example
tags: ls
---

This is a list of `ls` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-a` or `--all`

#### Description

Include directory entries whose names begin with a dot (‘.’).

#### Example

```
$ ls -a
```

### Option `-A` or `--almost-all`

#### Description

Include directory entries whose names begin with a dot (‘.’) except for . and ...  Automatically set for the super-user unless -I is specified.

#### Example

```
$ ls -A
```

### Option `-B` or `--ignore-backups`

#### Description

Force printing of non-printable characters (as defined by ctype(3) and current locale settings) in file names as \xxx, where xxx is the numeric value of the character in octal.  This option is not defined in IEEE Std 1003.1-2008 (“POSIX.1”).

#### Example

```
$ ls -B
```

### Option `-d` or `--directory`

#### Description

Directories are listed as plain files (not searched recursively).

#### Example

```
$ ls -d
```

### Option `-f` or `--classify`

#### Description

Output is not sorted.  This option turns on -a.  It also negates the effect of the -r, -S and -t options.  As allowed by IEEE Std 1003.1-2008 (“POSIX.1”), this option has no effect on the -d, -l, -R and -s options.

#### Example

```
$ ls -f
```

### Option `-F` or `--classify`

#### Description

Display a slash (‘/’) immediately after each pathname that is a directory, an asterisk (‘*’) after each that is executable, an at sign (‘@’) after each symbolic link, an equals sign (‘=’) after each socket, a percent sign (‘%’) after each whiteout, and a vertical bar (‘|’) after each that is a FIFO.

#### Example

```
$ ls -F
```

### Option `-h` or `--human-readable`

#### Description

When used with the -l option, use unit suffixes: Byte, Kilobyte, Megabyte, Gigabyte, Terabyte and Petabyte in order to reduce the number of digits to four or fewer using base 2 for sizes.  This option is not defined in IEEE Std 1003.1-2008 (“POSIX.1”).

#### Example

```
$ ls -h
```

### Option `-H` or `--dereference-command-line`

#### Description

Symbolic links on the command line are followed.  This option is assumed if none of the -F, -d, or -l options are specified.

#### Example

```
$ ls -H
```

### Option `-i` or `--inode`

#### Description

For each file, print the file's file serial number (inode number).

#### Example

```
$ ls -i
```

### Option `-l` or `--long`

#### Description

(The lowercase letter “ell”.) List files in the long format, as described in the The Long Format subsection below.

#### Example

```
$ ls -l
```

### Option `-L` or `--dereference`

#### Description

Follow all symbolic links to final target and list the file or directory the link references rather than the link itself.  This option cancels the -P option.

#### Exmaple

```
$ ls -L link1.txt
```
