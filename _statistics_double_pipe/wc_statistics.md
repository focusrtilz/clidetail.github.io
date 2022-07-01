---
layout: manual
title:  "wc - Statistics of command combinations using double pipe"
tags: statistic
---

## Before

__The commands before `wc`:__ If the given command failed, execute `wc`.

| Command | percentage |
|--------|--------|
| echo | 20% |
| name | 20% |
| id | 20% |
| hostname | 20% |
| host | 20% |



## After

__The commands after `wc`:__ If `wc` failed, execute the given command.

| Command | Percentage | 
|-------|--------|
| rm | 40% |
| name | 20% |
| ls | 20% |
| grep | 20% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### If `echo` failed, execute `wc`

- Change Title of Terminal Window to Verbose Info useful at Login

            
### If `name` failed, execute `wc`

- Change Title of Terminal Window to Verbose Info useful at Login

            
### If `id` failed, execute `wc`

- Change Title of Terminal Window to Verbose Info useful at Login

            
### If `hostname` failed, execute `wc`

- Change Title of Terminal Window to Verbose Info useful at Login

            
### If `host` failed, execute `wc`

- Change Title of Terminal Window to Verbose Info useful at Login

            


### If `wc` failed, execute `rm`

- Download random gifs from gifbin.com
- Deleting directory recurcive. Directories will be deleled when empty or contains only .svn subdirectory

            
### If `wc` failed, execute `name`

- Download random gifs from gifbin.com

            
### If `wc` failed, execute `ls`

- Deleting directory recurcive. Directories will be deleled when empty or contains only .svn subdirectory

            
### If `wc` failed, execute `grep`

- Deleting directory recurcive. Directories will be deleled when empty or contains only .svn subdirectory

            
