---
layout: manual
title:  "vmstat - Statistics of command combinations using semicolon"
tags: statistic
---

## Before

__The commands before `vmstat`:__  Execute the given command __before__ `vmstat`.

| Command | percentage |
|--------|--------|
| echo | 66% |
| date | 33% |



## After

__The commands after `vmstat`:__ Execute the given command __after__ `vmstat`.

| Command | Percentage | 
|-------|--------|
| sleep | 66% |
| w | 33% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Execute `echo` before `vmstat`

- Output system statistics every 5 seconds with timestamp
- Continually monitor things

            
### Execute `date` before `vmstat`

- Output system statistics every 5 seconds with timestamp

            


### Execute `sleep` after `vmstat`

- Output system statistics every 5 seconds with timestamp
- Continually monitor things

            
### Execute `w` after `vmstat`

- vmstat/iostat with timestamp

            
