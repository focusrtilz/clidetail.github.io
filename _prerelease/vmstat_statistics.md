---
layout: manual
title:  "vmstat - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `vmstat`:__ Pipe the result of the given command to `vmstat`.

| Command | percentage |
|--------|--------|
| vmstat | 100% |



## After

__The commands after `vmstat`:__ Pipe the result of `vmstat` to the given command.

| Command | Percentage | 
|-------|--------|
| awk | 36% |
| w | 36% |
| tail | 9% |
| sleep | 9% |
| vmstat | 9% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `vmstat` to `vmstat`

- Replace Solaris vmstat numbers with human readable format

            


### Pipe `vmstat` to `awk`

- Replace Solaris vmstat numbers with human readable format
- vmstat/iostat with timestamp
- Visualizing system performance data
- Visualizing system performance data

            
### Pipe `vmstat` to `w`

- Replace Solaris vmstat numbers with human readable format
- vmstat/iostat with timestamp
- Visualizing system performance data
- Visualizing system performance data

            
### Pipe `vmstat` to `tail`

- Output system statistics every 5 seconds with timestamp

            
### Pipe `vmstat` to `sleep`

- Output system statistics every 5 seconds with timestamp

            
### Pipe `vmstat` to `vmstat`

- Replace Solaris vmstat numbers with human readable format

            
