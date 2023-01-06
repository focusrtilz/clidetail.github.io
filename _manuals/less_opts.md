---
layout: manual
title:  The list of less options with example
tags: less
---

This is a list of `less` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-?` or `--help`
#### Description

This option displays a summary of the commands accepted by less (the same as the h command).  (Depending on how your shell interprets the question mark, it may be necessary to quote the question mark, thus: "-\?".)

#### Example

```
$ less -? 
```

### Option `-a` or `--search-skip-screen`
#### Description

By default, forward searches start at the top of the displayed screen and backwards searches start at the bottom of the displayed screen (except for repeated searches invoked by the n or N commands, which start after or before the "target" line respectively; see the -j option for more about the target line). The -a option causes forward searches to instead start at the bottom of the screen and backward searches to start at the top of the screen, thus skipping all lines displayed on the screen.

#### Example

```
$ less -a 
```

### Option `-A` or `--SEARCH-SKIP-SCREEN`
#### Description

Causes all forward searches (not just non-repeated searches) to start just after the target line, and all backward searches to start just before the target line.  Thus, forward searches will skip part of the displayed screen (from the first line up to and including the target line).  Similarly backwards searches will skip the displayed screen from the last line up to and including the target line.	This was the default behavior in less versions prior to 441.

#### Example

```
$ less -A 
```

### Option `-bn` or `--buffers=n`
#### Description

Specifies the amount of buffer space less will use for each file, in units of kilobytes (1024 bytes).  By default 64 KB of buffer space is used for each file (unless the file is a pipe; see the -B option).	The -b option specifies instead that n kilobytes of buffer space should be used for each file.  If n is -1, buffer space is unlimited; that is, the entire file can be read into memory.

#### Example

```
$ less -bn 
```

### Option `-B` or `--auto-buffers` 
#### Description

By default, when data is read from a pipe, buffers are allocated automatically as needed.	If a large amount of data is read from the pipe, this can cause a large amount of memory to be allocated. The -B option disables this automatic allocation of buffers for pipes, so that only 64 KB (or the amount of space specified by the -b option) is used for the pipe.	Warning: use of -B can result in erroneous display, since only the most recently viewed part of the piped data is kept in memory; any earlier data is lost.

#### Example

```
$ less -B 
```

### Option `-c` or `--clear-screen`
#### Description

Causes full screen repaints to be painted from the top line down. By default, full screen repaints are done by scrolling from the bottom of the screen.

#### Example

```
$ less -c 
```

### Option `-C` or `--CLEAR-SCREEN`
#### Description

Same as -c, for compatibility with older versions of less.

#### Example

```
$ less -C 
```

### Option `-d` or `--dumb`
#### Description

The -d option suppresses the error message normally displayed if the terminal is dumb; that is, lacks some important capability, such as the ability to clear the screen or scroll backward.  The -d option does not otherwise change the behavior of less on a dumb terminal.

#### Example

```
$ less -d 
```

### Option `-e` or `--quit-at-eof` 
#### Description

Causes less to automatically exit the second time it reaches end- of-file.	By default, the only way to exit less is via the "q" command.

#### Example

```
$ less -e 
```

### Option `-E` or `--QUIT-AT-EOF` 
#### Description

Causes less to automatically exit the first time it reaches end- of-file.

#### Example

```
$ less -E 
```

### Option `-f` or `--force`
#### Description

Forces non-regular files to be opened.  (A non-regular file is a directory or a device special file.)  Also suppresses the warning message when a binary file is opened.  By default, less will refuse to open non-regular files.  Note that some operating systems will not allow directories to be read, even if -f is set.

#### Example

```
$ less -f 
```

### Option `-F` or `--quit-if-one-screen`
#### Description

Causes less to automatically exit if the entire file can be
displayed on the first screen.

#### Example

```
$ less -F 
```

### Option `-g` or `--hilite-search`
#### Description

Normally, less will highlight ALL strings which match the last
search command.  The -g option changes this behavior to highlight
only the particular string which was found by the last search
command.	This can cause less to run somewhat faster than the
default.

#### Example

```
$ less -g 
```

### Option `-G` or `--HILITE-SEARCH`
#### Description

The -G option suppresses all highlighting of strings found by
search commands.

#### Example

```
$ less -G 
```

### Option `-hn` or `--max-back-scroll=n`
#### Description

Specifies a maximum number of lines to scroll backward.  If it is
necessary to scroll backward more than n lines, the screen is
repainted in a forward direction instead.  (If the terminal does
not have the ability to scroll backward, -h0 is implied.)

#### Example

```
$ less -hn 
```

### Option `-i` or `--ignore-case`
#### Description

Causes searches to ignore case; that is, uppercase and lowercase
are considered identical.  This option is ignored if any uppercase
letters appear in the search pattern; in other words, if a pattern
contains uppercase letters, then that search does not ignore case.

#### Example

```
$ less -i 
```

### Option `-I` or `--IGNORE-CASE`
#### Description

Like -i, but searches ignore case even if the pattern contains
uppercase letters.

#### Example

```
$ less -I 
```

### Option `-J` or `--status-column`
#### Description

Displays a status column at the left edge of the screen.	The
status column shows the lines that matched the current search, and
any lines that are marked (via the m or M command).

#### Example

```
$ less -J 
```

### Option `-K` or `--quit-on-intr`
#### Description

Causes less to exit immediately (with status 2) when an interrupt
character (usually ^C) is typed.	Normally, an interrupt character
causes less to stop whatever it is doing and return to its command
prompt.  Note that use of this option makes it impossible to
return to the command prompt from the "F" command.

#### Example

```
$ less -K 
```
