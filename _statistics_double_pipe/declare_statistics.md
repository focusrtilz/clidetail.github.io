---
layout: manual
title:  "declare - Statistics of command combinations using double pipe"
tags: statistic
---

## Before

__The commands before `declare`:__ If the given command failed, execute `declare`.

| Command | percentage |
|--------|--------|



## After

__The commands after `declare`:__ If `declare` failed, execute the given command.

| Command | Percentage | 
|-------|--------|
| rm | 100% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.




### If `declare` failed, execute `rm`

- Using associative array to remove all files and directories under PWD except "$1", "$2", "$3",..."$n"

            
