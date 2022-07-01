---
layout: manual
title:  "dd - Statistics of command combinations using double pipe"
tags: statistic
---

## Before

__The commands before `dd`:__ If the given command failed, execute `dd`.

| Command | percentage |
|--------|--------|
| sudo | 33% |
| mkdir | 33% |
| su | 33% |



## After

__The commands after `dd`:__ If `dd` failed, execute the given command.

| Command | Percentage | 
|-------|--------|
| echo | 100% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### If `sudo` failed, execute `dd`

- Silently ensures that a FS is mounted on the given mount point (checks if it's OK, otherwise unmount, create dir and mount)

            
### If `mkdir` failed, execute `dd`

- Silently ensures that a FS is mounted on the given mount point (checks if it's OK, otherwise unmount, create dir and mount)

            
### If `su` failed, execute `dd`

- Silently ensures that a FS is mounted on the given mount point (checks if it's OK, otherwise unmount, create dir and mount)

            


### If `dd` failed, execute `echo`

- Check if a machine is online with better UI
- Get internal and external IP addresses
- Check CRL expiration time

            
