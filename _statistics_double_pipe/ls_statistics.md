---
layout: manual
title:  "ls - Statistics of command combinations using double pipe"
tags: statistic
---

## Before

__The commands before `ls`:__ If the given command failed, execute `ls`.

| Command | percentage |
|--------|--------|
| w | 26% |
| ls | 13% |
| echo | 13% |
| find | 13% |
| cat | 6% |
| wc | 6% |
| cd | 6% |
| mv | 6% |
| ip | 6% |



## After

__The commands after `ls`:__ If `ls` failed, execute the given command.

| Command | Percentage | 
|-------|--------|
| cat | 13% |
| name | 10% |
| echo | 10% |
| screen | 6% |
| uname | 6% |
| grep | 6% |
| ss | 6% |
| ls | 6% |
| w | 6% |
| mkdir | 3% |
| ssh | 3% |
| mv | 3% |
| vi | 3% |
| rm | 3% |
| less | 3% |
| last | 3% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### If `w` failed, execute `ls`

- Buffer in order to avoir mistakes with redirections that empty your files
- Deleting directory recurcive. Directories will be deleled when empty or contains only .svn subdirectory
- cd to (or operate on) a file across parallel directories
- find broken symbolic links

            
### If `ls` failed, execute `ls`

- Juste a reminder that this works.
- Deleting directory recurcive. Directories will be deleled when empty or contains only .svn subdirectory

            
### If `echo` failed, execute `ls`

- Juste a reminder that this works.
- 'readlink'  equivalent using shell commands, and following all links

            
### If `find` failed, execute `ls`

- Deleting directory recurcive. Directories will be deleled when empty or contains only .svn subdirectory
- find broken symbolic links

            
### If `cat` failed, execute `ls`

- Buffer in order to avoir mistakes with redirections that empty your files

            
### If `wc` failed, execute `ls`

- Deleting directory recurcive. Directories will be deleled when empty or contains only .svn subdirectory

            
### If `cd` failed, execute `ls`

- cd to (or operate on) a file across parallel directories

            
### If `mv` failed, execute `ls`

- Function that swaps the filenames of two given files.

            
### If `ip` failed, execute `ls`

- Function that swaps the filenames of two given files.

            


### If `ls` failed, execute `cat`

- Display which distro is installed
- Enter your ssh password one last time
- Display which distro is installed
- See a full last history by expanding logrotated wtmp files

            
### If `ls` failed, execute `name`

- Start urxvt and do whatever is needed to open the screen session named "main"
- Display which distro is installed
- Display which distro is installed

            
### If `ls` failed, execute `echo`

- bash find function
- Juste a reminder that this works.
- Print a row of characters the width of terminal

            
### If `ls` failed, execute `screen`

- Start urxvt and do whatever is needed to open the screen session named "main"
- bash auto-complete your screen sessions

            
### If `ls` failed, execute `uname`

- Display which distro is installed
- Display which distro is installed

            
### If `ls` failed, execute `grep`

- bash find function
- Deleting directory recurcive. Directories will be deleled when empty or contains only .svn subdirectory

            
### If `ls` failed, execute `ss`

- Enter your ssh password one last time
- See a full last history by expanding logrotated wtmp files

            
### If `ls` failed, execute `ls`

- Juste a reminder that this works.
- Deleting directory recurcive. Directories will be deleled when empty or contains only .svn subdirectory

            
### If `ls` failed, execute `w`

- bash auto-complete your screen sessions
- See a full last history by expanding logrotated wtmp files

            
### If `ls` failed, execute `mkdir`

- Enter your ssh password one last time

            
### If `ls` failed, execute `ssh`

- Enter your ssh password one last time

            
### If `ls` failed, execute `mv`

- Rename files in a directory in an edited list fashion

            
### If `ls` failed, execute `vi`

- Rename files in a directory in an edited list fashion

            
### If `ls` failed, execute `rm`

- Deleting directory recurcive. Directories will be deleled when empty or contains only .svn subdirectory

            
### If `ls` failed, execute `less`

- See a full last history by expanding logrotated wtmp files

            
### If `ls` failed, execute `last`

- See a full last history by expanding logrotated wtmp files

            
