---
layout: manual
title:  "xargs - Statistics of command combinations using double pipe"
tags: statistic
---

## Before

__The commands before `xargs`:__ If the given command failed, execute `xargs`.

| Command | percentage |
|--------|--------|



## After

__The commands after `xargs`:__ If `xargs` failed, execute the given command.

| Command | Percentage | 
|-------|--------|
| echo | 25% |
| sed | 25% |
| sort | 25% |
| du | 25% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.




### If `xargs` failed, execute `echo`

- Check CRL expiration time

            
### If `xargs` failed, execute `sed`

- Find Duplicate Files (based on size first, then MD5 hash)

            
### If `xargs` failed, execute `sort`

- Shows space used by each directory of the root filesystem excluding mountpoints/external filesystems (and sort the output)

            
### If `xargs` failed, execute `du`

- Shows space used by each directory of the root filesystem excluding mountpoints/external filesystems (and sort the output)

            
