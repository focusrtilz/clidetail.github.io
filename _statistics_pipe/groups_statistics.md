---
layout: manual
title:  "groups - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `groups`:__ Pipe the result of the given command to `groups`.

| Command | percentage |
|--------|--------|
| w | 100% |



## After

__The commands after `groups`:__ Pipe the result of `groups` to the given command.

| Command | Percentage | 
|-------|--------|
| sort | 50% |
| xargs | 25% |
| grep | 25% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `w` to `groups`

- Get a list of stale AWS security groups

            


### Pipe `groups` to `sort`

- List all groups and the user names that were in each group
- List all users and groups

            
### Pipe `groups` to `xargs`

- Quickly add a new user to all groups the default user is in

            
### Pipe `groups` to `grep`

- search for groups in ldap

            
