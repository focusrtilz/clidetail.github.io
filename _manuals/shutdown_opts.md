---
layout: manual
title:  The list of shutdown options with example
tags: shutdown
---

This is a list of `shutdown` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-h`
#### Description

The system is halted at the specified time.

#### Example

```
$ shutdown -h 10:30
```

### Option `-k`
#### Description

Kick everybody off.  The -k option does not actually halt the system, but leaves the system multi-user with logins disabled (for all but super-user).

#### Example

```
$ shutdown -k time
```

### Option `-n`
#### Description

If the -o is specified, prevent the file system cache from being flushed by passing -n option to halt(8) or reboot(8). This option should probably not be used.

#### Example

```
$ shutdown -n -o -h time
```

### Option `-o`
#### Description

If -h or -r is specified, shutdown will execute halt(8) or reboot(8) instead of sending a signal to launchd(8).

#### Example

```
$ shutdown -o -h time
```

### Option `-r`
#### Description

The system is rebooted at the specified time.

#### Example

```
$ shutdown -r time
```

### Option `-s`
#### Description

The system is put to sleep at the specified time.

#### Example

```
$ shutdown -s time
```

### Option `-u`
#### Description

The system is halted up until the point of removing system power, but waits before removing power for 5 minutes so that an external UPS (uninterruptible power supply) can forcibly remove power. This simulates a dirty shutdown to permit a later automatic power on. macOS uses this mode automatically with supported UPSs in emergency shutdowns.

#### Example

```
$ shutdown -u time
```