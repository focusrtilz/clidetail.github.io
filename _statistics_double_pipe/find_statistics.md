---
layout: manual
title:  "find - Statistics of command combinations using double pipe"
tags: statistic
---

## Before

__The commands before `find`:__ If the given command failed, execute `find`.

| Command | percentage |
|--------|--------|
| grep | 50% |
| id | 50% |



## After

__The commands after `find`:__ If `find` failed, execute the given command.

| Command | Percentage | 
|-------|--------|
| echo | 18% |
| grep | 18% |
| ls | 18% |
| chmod | 9% |
| sed | 9% |
| rm | 9% |
| sort | 9% |
| du | 9% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### If `grep` failed, execute `find`

- Cleanup firefox's database.

            
### If `id` failed, execute `find`

- Cleanup firefox's database.

            


### If `find` failed, execute `echo`

- Command template, executing a command over multiple files, outputing progress and fails only
- bash find function

            
### If `find` failed, execute `grep`

- bash find function
- Deleting directory recurcive. Directories will be deleled when empty or contains only .svn subdirectory

            
### If `find` failed, execute `ls`

- Deleting directory recurcive. Directories will be deleled when empty or contains only .svn subdirectory
- find broken symbolic links

            
### If `find` failed, execute `chmod`

- Reconstruct standard permissions for directories and files in current directory

            
### If `find` failed, execute `sed`

- Find Duplicate Files (based on size first, then MD5 hash)

            
### If `find` failed, execute `rm`

- Deleting directory recurcive. Directories will be deleled when empty or contains only .svn subdirectory

            
### If `find` failed, execute `sort`

- Shows space used by each directory of the root filesystem excluding mountpoints/external filesystems (and sort the output)

            
### If `find` failed, execute `du`

- Shows space used by each directory of the root filesystem excluding mountpoints/external filesystems (and sort the output)

            
