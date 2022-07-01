---
layout: manual
title:  "parted - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `parted`:__ Pipe the result of the given command to `parted`.

| Command | percentage |
|--------|--------|
| grep | 100% |



## After

__The commands after `parted`:__ Pipe the result of `parted` to the given command.

| Command | Percentage | 
|-------|--------|
| grep | 25% |
| su | 25% |
| awk | 25% |
| w | 25% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `grep` to `parted`

- parted - scripted partitioning (of all multipathed SAN LUNs)

            


### Pipe `parted` to `grep`

- print offsets of file disk for losetup/loop-mount

            
### Pipe `parted` to `su`

- Mount a partitoned disk-image file

            
### Pipe `parted` to `awk`

- Mount a partitoned disk-image file

            
### Pipe `parted` to `w`

- Mount a partitoned disk-image file

            
