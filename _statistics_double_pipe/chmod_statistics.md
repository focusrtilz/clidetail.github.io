---
layout: manual
title:  "chmod - Statistics of command combinations using double pipe"
tags: statistic
---

## Before

__The commands before `chmod`:__ If the given command failed, execute `chmod`.

| Command | percentage |
|--------|--------|
| chmod | 50% |
| find | 50% |



## After

__The commands after `chmod`:__ If `chmod` failed, execute the given command.

| Command | Percentage | 
|-------|--------|
| chmod | 33% |
| rm | 33% |
| echo | 33% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### If `chmod` failed, execute `chmod`

- Reconstruct standard permissions for directories and files in current directory

            
### If `find` failed, execute `chmod`

- Reconstruct standard permissions for directories and files in current directory

            


### If `chmod` failed, execute `chmod`

- Reconstruct standard permissions for directories and files in current directory

            
### If `chmod` failed, execute `rm`

- How to run a shell script on a remote host using ftp

            
### If `chmod` failed, execute `echo`

- How to run a shell script on a remote host using ftp

            
