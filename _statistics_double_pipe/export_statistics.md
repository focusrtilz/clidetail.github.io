---
layout: manual
title:  "export - Statistics of command combinations using double pipe"
tags: statistic
---

## Before

__The commands before `export`:__ If the given command failed, execute `export`.

| Command | percentage |
|--------|--------|
| echo | 25% |
| sed | 25% |
| nc | 25% |
| export | 25% |



## After

__The commands after `export`:__ If `export` failed, execute the given command.

| Command | Percentage | 
|-------|--------|
| export | 100% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### If `echo` failed, execute `export`

- Turn monitor on or off if off or on, respectively

            
### If `sed` failed, execute `export`

- Turn shell tracing and verbosity (set -xv) on/off with 1 command!

            
### If `nc` failed, execute `export`

- Turn shell tracing and verbosity (set -xv) on/off with 1 command!

            
### If `export` failed, execute `export`

- Turn shell tracing and verbosity (set -xv) on/off with 1 command!

            


### If `export` failed, execute `export`

- Turn shell tracing and verbosity (set -xv) on/off with 1 command!

            
