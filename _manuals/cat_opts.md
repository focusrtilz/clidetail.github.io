---
layout: manual
title:  The list of cat options with example
tags: cat
---

This is a list of `cat` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-b` or `--number-nonblank`

#### Description

Number the non-blank output lines, starting at 1.

#### Example

```
$ cat -b file.txt
```

### Option `-e` or `--show-ends`

#### Description

Display non-printing characters (see the -v option), and display a dollar sign (‘$’) at the end of each line.

#### Example

```
$ cat -e file.txt
```

### Option `-n` or `--number`

#### Description

Squeeze multiple adjacent empty lines, causing the output to be single spaced.

#### Example

```
$ cat -n file.txt
```

### Option `-s` or `--squeeze-blank`

#### Description

Squeeze multiple adjacent empty lines, causing the output to be single spaced.

#### Example

```
$ cat -s file.txt
```

### Option `-t` or `--show-tabs`

#### Description

Display non-printing characters (see the -v option), and display tab characters as ‘^I’.

#### Example

```
$ cat -t file.txt
```

### Option `-u` or `--u`

#### Description

Disable output buffering.

#### Example

```
$ cat -u file.txt
```

### Option `-v` or `--show-nonprinting`

#### Description

Display non-printing characters so they are visible.  Control characters print as ‘^X’ for control-X; the delete character (octal 0177) prints as ‘^?’.  Non-ASCII characters (with the high bit set) are printed as ‘M-’ (for meta) followed by the character for the low 7 bits.

#### Example

```
$ cat -v file.txt
```
