---
layout: manual
title:  The list of top options with example
tags: top
---

This is a list of `top` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-a`
#### Description

Equivalent to -c a.

#### Example

```
$ top -a
```

### Option `-c`
#### Description

Set event counting mode to mode.  The supported modes are

- a       Accumulative mode.  Count events cumulatively, starting at the launch of top.  Calculate CPU usage and CPU time since the launch of top.
- d       Delta mode.  Count events relative to the previous sample.  Calculate CPU usage since the previous sample.  This mode by default disables the memory object map reporting.  The memory object map reporting may be re-enabled with the -r option or the interactive r command.
- e       Absolute mode.  Count events using absolute counters.
- n       Non-event mode (default).  Calculate CPU usage since the previous sample.

#### Example

```
$ top -c d
```

### Option `-d`
#### Description

Equivalent to -c d.

#### Example

```
$ top -d
```

### Option `-e`
#### Description

Equivalent to -c e.

#### Example

```
$ top -e
```

### Option `-F`
#### Description

Do not calculate statistics on shared libraries, also known as frameworks.

#### Example

```
$ top -F
```

### Option `-f`
#### Description

Calculate statistics on shared libraries, also known as frameworks (default).

#### Example

```
$ top -f
```

### Option `-h`
#### Description

Print command line usage information and exit.

#### Example

```
$ top -h
```

### Option `-i`
#### Description

Update framework (-f) info every interval samples; see the PERFORMANCE/ACCURACY TRADEOFF section for more details.

#### Example

```
$ top -i 10
```

### Option `-l`
#### Description

Use logging mode and display samples samples, even if standard output is a terminal.  0 is treated as infinity.  Rather than redisplaying, output is periodically printed in raw form.  Note that the first sample displayed will have an invalid %CPU displayed for each process, as it is calculated using the delta between samples.

#### Example

```
$ top -l 10
```

### Option `-ncols`
#### Description

Display columns when using logging mode.  The default is infinite.  The number must be > 0 or an error will occur.

#### Example

```
$ top -ncols 10
```

### Option `-n`
#### Description

Only display up to nprocs processes.

#### Example

```
$ top -n 10
```

### Option `-O`
#### Description

Use skey as a secondary key when ordering the process display.  See -o for key names (pid is the default).

#### Example

```
$ top -O pid
```

### Option `-o`
#### Description

Order the process display by sorting on key in descending order.  A + or - can be prefixed to the key name to specify ascending or descending order, respectively.

#### Example

```
$ top -o cpu
```

### Option `-R`
#### Description

Do not traverse and report the memory object map for each process (default).

#### Example

```
$ top -R
```

### Option `-r`
#### Description

Traverse and report the memory object map for each process.

#### Example

```
$ top -r
```

### Option `-S`
#### Description

Display the global statistics for swap and purgeable memory.

#### Example

```
$ top -S
```

### Option `-s`

Set the delay between updates to delay-secs seconds.  The default delay between updates is 1 second.

#### Example

```
$ top -s 10
```

### Option `-stats`
#### Description

Only display the comma separated statistics.  See the -o flag for the valid keys.

#### Example

```
$ top -stats pid,cpu
```

### Option `-pid`
#### Description

Only display processid in top.  This option may be specified multiple times.

#### Example

```
$ top -pid 10
```

### Option `-user`
#### Description

Only display processes owned by user.

#### Example

```
$ top -user root
```

### Option `-U`
#### Description

This is an alias for -user.

#### Example

```
$ top -U root
```

### Option `-u`
#### Description

This is an alias equivalent to: -o cpu -O time

#### Example

```
$ top -u
```
