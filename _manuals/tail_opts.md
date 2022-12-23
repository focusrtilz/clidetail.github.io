---
layout: manual
title:  The list of tail options with example
tags: tail
---

This is a list of `tail` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-c` or `--bytes`
#### Description

The location is number bytes.

#### Example

```
$ tail -c 10 file.txt
```

### Option `-f` or `--follow`
#### Description

The -f option causes tail to not stop when end of file is reached, but rather to wait for additional data to be appended to the input.  The -f option is ignored if the standard input is a pipe, but not if it is a FIFO.

#### Example

```
$ tail -f file.txt
```

### Option `-F` or `--retry`
#### Description

The -F option is similar to the -f option, except that if the file being followed is renamed, tail continues to track its end.  This is useful for tracking the ``current'' end of a log file that gets renamed (e.g. log -> log.1 -> log.2 -> ...).

#### Example

```
$ tail -F file.txt
```

### Option `-n` or `--lines`
#### Description

The location is number lines.

#### Example

```
$ tail -n 10 file.txt
```

### Option `-q` or `--quiet`
#### Description

Suppresses printing of headers when multiple files are being examined.

#### Example

```
$ tail -q file.txt
```

### Option `-r` or `--follow=name`
#### Description

The -r option causes the input to be displayed in reverse order, by line.  Additionally, this option changes the meaning of the -b, -c and -n options.  When the -r option is specified, these options specify the number of bytes, lines or 512-byte blocks to display, instead of the bytes, lines or blocks from the beginning or end of the input from which to begin the display. The default for the -r option is to display all of the input.

#### Example

```
$ tail -r file.txt
```
