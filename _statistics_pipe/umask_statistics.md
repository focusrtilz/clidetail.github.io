---
layout: manual
title:  "umask - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `umask`:__ Pipe the result of the given command to `umask`.

| Command | percentage |
|--------|--------|
| cat | 33% |
| ssh | 33% |
| ss | 33% |



## After

__The commands after `umask`:__ Pipe the result of `umask` to the given command.

| Command | Percentage | 
|-------|--------|
| grep | 100% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `cat` to `umask`

- Copy your SSH public key on a remote machine for passwordless login.

            
### Pipe `ssh` to `umask`

- Copy your SSH public key on a remote machine for passwordless login.

            
### Pipe `ss` to `umask`

- Copy your SSH public key on a remote machine for passwordless login.

            


### Pipe `umask` to `grep`

- Mount the first NTFS partition inside a VDI file (VirtualBox Disk Image)

            
