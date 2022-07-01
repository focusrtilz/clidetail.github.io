---
layout: manual
title:  "fdisk - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `fdisk`:__ Pipe the result of the given command to `fdisk`.

| Command | percentage |
|--------|--------|
| echo | 42% |
| w | 35% |
| fdisk | 14% |
| sed | 7% |



## After

__The commands after `fdisk`:__ Pipe the result of `fdisk` to the given command.

| Command | Percentage | 
|-------|--------|
| grep | 38% |
| fdisk | 15% |
| dd | 15% |
| sed | 7% |
| tar | 7% |
| sudo | 7% |
| su | 7% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `echo` to `fdisk`

- Programmatically partition a new disk with fdisk
- Rescan partitions on a SCSI device
- Partition a sequence of disk drives for LVM with fdisk
- Partition a new disk as all one partition tagged as
- Partition a new disk as all one partition tagged as "LInux LVM"
- Partition a new disk as all one partition tagged as LINUX_NATIVE

            
### Pipe `w` to `fdisk`

- Programmatically partition a new disk with fdisk
- Rescan partitions on a SCSI device
- Partition a sequence of disk drives for LVM with fdisk
- Partition a new disk as all one partition tagged as
- Partition a new disk as all one partition tagged as "LInux LVM"

            
### Pipe `fdisk` to `fdisk`

- copy partition table from /dev/sda to /dev/sdb
- Copy the partition table from /dev/sda to /dev/sdb

            
### Pipe `sed` to `fdisk`

- copy partition table from /dev/sda to /dev/sdb

            


### Pipe `fdisk` to `grep`

- Check if you partition are aligned
- Mount a partition from within a complete disk dump
- list all hd partitions
- Destroy all disks on system simultaneously
- 1 pass wipe of a complete disk with status

            
### Pipe `fdisk` to `fdisk`

- copy partition table from /dev/sda to /dev/sdb
- Copy the partition table from /dev/sda to /dev/sdb

            
### Pipe `fdisk` to `dd`

- dd with progress bar and remaining time displayed
- dd with progress bar and remaining time displayed

            
### Pipe `fdisk` to `sed`

- copy partition table from /dev/sda to /dev/sdb

            
### Pipe `fdisk` to `tar`

- Mount a partition from within a complete disk dump

            
### Pipe `fdisk` to `sudo`

- Copy the partition table from /dev/sda to /dev/sdb

            
### Pipe `fdisk` to `su`

- Copy the partition table from /dev/sda to /dev/sdb

            
