---
layout: manual
title:  The list of wget options with example
tags: wget
---

This is a list of `wget` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-V`
#### Description

Display the version of Wget.

#### Example

```
$ wget -V
```

### Option `-h`
#### Description

Print a help message describing all of Wget's command-line options.

#### Example

```
$ wget -h
```

### Option `-b`
#### Description

Go to background immediately after startup.  If no output file is specified via the -o, output is redirected to wget-log.

#### Example

```
$ wget -b url
```

### Option `-e command`
#### Description

Execute command as if it were a part of .wgetrc.  A command thus invoked will be executed after the commands in  wgetrc, thus taking precedence over them.  If you need to specify more than one wgetrc command, use multiple instances of -e.

#### Example

```
$ wget -e "http_proxy=http://proxy.example.com:8080" url
```

### Option `-o logfile`
#### Description

Log all messages to logfile.  The messages are normally reported to standard error.

#### Example

```
$ wget -o log.txt url
```

### Option `-a logfile`
#### Description

Append to logfile.  This is the same as -o, only it appends to logfile instead of overwriting the old log file.  If logfile does not exist, a new file is created.

#### Example

```
$ wget -a log.txt url
```

### Option `-d`
#### Description

Turn on debug output, meaning various information important to the developers of Wget if it does not work properly.  Your system administrator may have chosen to compile Wget without debug support, in which case -d will not work.  Please note that compiling with debug support is always safe---Wget compiled with the debug support will not print any debug info unless requested with -d.

#### Example

```
$ wget -d url
```

### Option `-q`
#### Description

Turn off Wget's output.

#### Example

```
$ wget -q url
```

### Option `-v`
#### Description

Turn on verbose output, with all the available data.  The default output is verbose.

#### Example

```
$ wget -v url
```

### Option `-nv`
#### Description

Turn off verbose without being completely quiet (use -q for that), which means that error messages and basic information still get printed.

#### Example

```
$ wget -nv url
```

### Option `--report-speed=type`
#### Description

Output bandwidth as type.  The only accepted value is bits.

#### Example

```
$ wget --report-speed=bits url
```

### Option `-i file`
#### Description

Read URLs from a local or external file.  If - is specified as file, URLs are read from the standard input.  (Use ./- to read from a file literally named -.) If this function is used, no URLs need be present on the command line.  If there are URLs both on the command line and in an input file, those on the command lines will be the first ones to be retrieved.  If --force-html is not specified, then file should consist of a series of URLs, one per line. However, if you specify --force-html, the document will be regarded as html.  In that case you may have problems with relative links, which you can solve either by adding "<base href="url">" to the documents or by specifying --base=url on the command line. If the file is an external one, the document will be automatically treated as html if the Content-Type matches text/html.  Furthermore, the file's location will be implicitly used as base href if none was specified.

#### Example

```
$ 
```

### Option `--input-metalink=file`
#### Description

Downloads files covered in local Metalink file. Metalink version 3 and 4 are supported.

#### Example

```
$ wget --input-metalink=file.metalink
```

### Option `--keep-badhash `
#### Description

Keeps downloaded Metalink's files with a bad hash. It appends .badhash to the name of Metalink's files which have a checksum mismatch, except without overwriting existing files.

#### Example

```
$ wget --keep-badhash url
```
