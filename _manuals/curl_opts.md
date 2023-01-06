---
layout: manual
title:  The list of curl options with example
tags: curl
---

This is a list of `curl` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual


### Option `-d`
#### Description

HTTP POST data

#### Example

```
$ curl -d "name=John&location=Boston" http://example.com
```

### Option `-f`
#### Description

Fail silently (no output at all) on HTTP errors

#### Example

```
$ curl -f http://example.com
```

### Option `-h`
#### Description

Get help for commands

#### Example

```
$ curl -h
```

### Option `-i`
#### Description

Include protocol response headers in the output

#### Example

```
$ curl -i http://example.com
```

### Option `-o`
#### Description

Write to file instead of stdout

#### Example

```
$ curl -o /tmp/example.html http://example.com
```

### Option `-O`
#### Description

Write output to a file named as the remote file

#### Example

```
$ curl -O http://example.com/example.html
```

### Option `-s`
#### Description

Silent mode

#### Example

```
$ curl -s http://example.com
```

### Option `-T`
#### Description

Transfer local FILE to destination

#### Example

```
$ curl -T /tmp/example.html http://example.com
```

### Option `-u`
#### Description

Server user and password

#### Example

```
$ curl -u user:password http://example.com
```

### Option `-A`
#### Description

Send User-Agent <name> to server

#### Example

```
$ curl -A "Mozilla/5.0" http://example.com
```

### Option `-v`
#### Description

Make the operation more talkative

#### Example

```
$ curl -v http://example.com
```

### Option `-V`
#### Description

Show version number and quit

#### Example

```
$ curl -V
```
