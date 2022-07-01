---
layout: manual
title:  "systemctl - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `systemctl`:__ Pipe the result of the given command to `systemctl`.

| Command | percentage |
|--------|--------|
| echo | 33% |
| dd | 33% |
| ss | 33% |



## After

__The commands after `systemctl`:__ Pipe the result of `systemctl` to the given command.

| Command | Percentage | 
|-------|--------|
| head | 100% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `echo` to `systemctl`

- Blackhole any level zones via dnsmasq

            
### Pipe `dd` to `systemctl`

- Blackhole any level zones via dnsmasq

            
### Pipe `ss` to `systemctl`

- Blackhole any level zones via dnsmasq

            


### Pipe `systemctl` to `head`

- Print failed units in systemd

            
