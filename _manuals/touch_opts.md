---
layout: manual
title:  The list of touch options with example
tags: touch
---

This is a list of `touch` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-A`
#### Description

Adjust the access and modification time stamps for the file by the specified value.  This flag is intended for use in modifying files with incorrectly set time stamps.

The argument is of the form “[-][[hh]mm]SS” where each pair of letters represents the following:
- -       Make the adjustment negative: the new time stamp is set to be before the old one.
- hh      The number of hours, from 00 to 99.
- mm      The number of minutes, from 00 to 59.
- SS      The number of seconds, from 00 to 59.

The -A flag implies the -c flag: if any file specified does not exist, it will be silently ignored.

#### Example

```
$ touch -A "-0230" myfile.txt
```

### Option `-a`
#### Description

Change the access time of the file.  The modification time of the file is not changed unless the -m flag is also specified.

#### Example

```
$ touch -a myfile.txt
```

### Option `-c`
#### Description

Do not create the file if it does not exist.  The touch utility does not treat this as an error.  No error messages are displayed and the exit value is not affected.

#### Example

```
$ touch -c myfile.txt
```

### Option `-d`
#### Description

Change the access and modification times to the specified date time instead of the current time of day.  The argument is of the form “YYYY-MM-DDThh:mm:SS[.frac][tz]” where the letters represent the following:
- YYYY    At least four decimal digits representing the year.
- MM, DD, hh, mm, SS As with -t time.
- T       The letter T or a space is the time designator.
- .frac   An optional fraction, consisting of a period or a comma followed by one or more digits.  The number of significant digits depends on the kernel configuration and the filesystem, and may be zero.
- tz      An optional letter Z indicating the time is in UTC.  Otherwise, the time is assumed to be in local time.  Local time is affected by the value of the TZ environment variable.

#### Example

```
$ touch -d "2021-01-01T12:00:00" myfile.txt
```

### Option `-h`
#### Description

If the file is a symbolic link, change the times of the link itself rather than the file that the link points to.  Note that -h implies -c and thus will not create any new files.

#### Example

```
$ touch -h mylink.txt
```

### Option `-m`

Change the modification time of the file.  The access time of the file is not changed unless the -a flag is also specified.

#### Example

```
$ touch -m myfile.txt
```

### Option `-r`
#### Description

Use the access and modifications times from the specified file instead of the current time of day.

#### Example

```
$ touch -r myfile.txt myfile2.txt
```

### Option `-t`
#### Description

Change the access and modification times to the specified time instead of the current time of day.  The argument is of the form “[[CC]YY]MMDDhhmm[.SS]” where each pair of letters represents the following:

- CC      The first two digits of the year (the century).
- YY      The second two digits of the year.  If “YY” is specified, but “CC” is not, a value for “YY” between 69 and 99 results in a “CC” value of 19.  Otherwise, a “CC” value of 20 is used.
- MM      The month of the year, from 01 to 12.
- DD      the day of the month, from 01 to 31.
- hh      The hour of the day, from 00 to 23.
- mm      The minute of the hour, from 00 to 59.
- SS      The second of the minute, from 00 to 60.

If the “CC” and “YY” letter pairs are not specified, the values default to the current year.  If the “SS” letter pair is not specified, the value defaults to 0.

#### Example

```
$ touch -t 202101011200 myfile.txt
```