---
layout: manual
title:  "pstree - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `pstree`:__ Pipe the result of the given command to `pstree`.

| Command | percentage |
|--------|--------|
| grep | 60% |
| name | 20% |
| sleep | 20% |



## After

__The commands after `pstree`:__ Pipe the result of `pstree` to the given command.

| Command | Percentage | 
|-------|--------|
| awk | 25% |
| w | 25% |
| less | 25% |
| ss | 25% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `grep` to `pstree`

- Disaster Snapshot (procmail)
- Find process tree in friendly format
- Display the tree of all instance of a particular  process

            
### Pipe `name` to `pstree`

- Find process tree in friendly format

            
### Pipe `sleep` to `pstree`

- Display the tree of all instance of a particular  process

            


### Pipe `pstree` to `awk`

- slow down CPU and IO for process and its offsprings.

            
### Pipe `pstree` to `w`

- slow down CPU and IO for process and its offsprings.

            
### Pipe `pstree` to `less`

- View and review the system process tree.

            
### Pipe `pstree` to `ss`

- View and review the system process tree.

            
