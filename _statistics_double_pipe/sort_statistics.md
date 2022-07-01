---
layout: manual
title:  "sort - Statistics of command combinations using double pipe"
tags: statistic
---

## Before

__The commands before `sort`:__ If the given command failed, execute `sort`.

| Command | percentage |
|--------|--------|
| ss | 25% |
| ping | 12% |
| history | 12% |
| du | 12% |
| find | 12% |
| mount | 12% |
| xargs | 12% |



## After

__The commands after `sort`:__ If `sort` failed, execute the given command.

| Command | Percentage | 
|-------|--------|
| echo | 66% |
| sed | 33% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### If `ss` failed, execute `sort`

- Lookup autonomous systems of all outgoing http/s traffic
- Lookup autonomous systems of all outgoing http/s traffic

            
### If `ping` failed, execute `sort`

- Text graphing ping output filter

            
### If `history` failed, execute `sort`

- most used commands in history (comprehensive)

            
### If `du` failed, execute `sort`

- Simple top directory usage with du flips for either Linux or base Solaris

            
### If `find` failed, execute `sort`

- Shows space used by each directory of the root filesystem excluding mountpoints/external filesystems (and sort the output)

            
### If `mount` failed, execute `sort`

- Shows space used by each directory of the root filesystem excluding mountpoints/external filesystems (and sort the output)

            
### If `xargs` failed, execute `sort`

- Shows space used by each directory of the root filesystem excluding mountpoints/external filesystems (and sort the output)

            


### If `sort` failed, execute `echo`

- Are the two lines anagrams?
- Are the two lines anagrams?

            
### If `sort` failed, execute `sed`

- Find Duplicate Files (based on size first, then MD5 hash)

            
