---
layout: manual
title:  The list of locate options with example
tags: locate
---

This is a list of `locate` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-0`
#### Description

Print pathnames separated by an ASCII NUL character (character code 0) instead of default NL (newline, character code 10).

#### Example

```
$ locate -0 '*.txt' | xargs -0 rm
```

### Option `-S`
#### Description

Print some statistics about the database and exit.

#### Example

```
$ locate -S
```

### Option `-c`
#### Description

Suppress normal output; instead print a count of matching file names.

#### Example

```
$ locate -c '*.txt'
```

### Option `-d`
#### Description

Search in database instead of the default file name database.  Multiple -d options are allowed.  Each additional -d option adds the specified database to the list of databases to be searched.

#### Example

```
$ locate -d /var/db/locate.database '*.txt'
```

### Option `-i`
#### Description

Ignore case distinctions in both the pattern and the database.

#### Example

```
$ locate -i '*.txt'
```

### Option `-l`
#### Description

Limit output to number of file names and exit.

#### Example

```
$ locate -l 10 '*.txt'
```

### Option `-m`
#### Description

Use mmap(2) instead of the stdio(3) library.  This is the default behavior and is faster in most cases.

#### Example

```
$ locate -m '*.txt'
```

### Option `-s`
#### Description

Use the stdio(3) library instead of mmap(2).

#### Example

```
$ locate -s '*.txt'
```
