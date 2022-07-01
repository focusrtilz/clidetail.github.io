---
layout: manual
title:  "sleep - Statistics of command combinations using double pipe"
tags: statistic
---

## Before

__The commands before `sleep`:__ If the given command failed, execute `sleep`.

| Command | percentage |
|--------|--------|
| w | 37% |
| grep | 11% |
| ping | 11% |
| wget | 7% |
| echo | 3% |
| ip | 3% |
| free | 3% |
| awk | 3% |
| rm | 3% |
| cal | 3% |
| nc | 3% |
| host | 3% |
| curl | 3% |



## After

__The commands after `sleep`:__ If `sleep` failed, execute the given command.

| Command | Percentage | 
|-------|--------|
| echo | 50% |
| w | 50% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### If `w` failed, execute `sleep`

- shutdown if wget exit
- delay execution of a command that needs lots of memory and CPU time until the resources are available
- Keep SSH tunnel open (PostgreSQL example)
- Wait for Web service to spin up, aka alert me when the server stops returning a 503
- if download end,shutdown
- Make a server's console beep when the network is down
- Check a internet connetion is up. If it isn't write a log.
- ping a host until it responds, then play a sound, then exit
- Pop up a Growl alert if Amtrak wifi doesn't know where to find The Google
- Notify on Battery power

            
### If `grep` failed, execute `sleep`

- shutdown if wget exit
- Wait for Web service to spin up, aka alert me when the server stops returning a 503
- if download end,shutdown

            
### If `ping` failed, execute `sleep`

- Make a server's console beep when the network is down
- Check a internet connetion is up. If it isn't write a log.
- Pop up a Growl alert if Amtrak wifi doesn't know where to find The Google

            
### If `wget` failed, execute `sleep`

- shutdown if wget exit
- if download end,shutdown

            
### If `echo` failed, execute `sleep`

- Ring the system bell after finishing a long script/compile

            
### If `ip` failed, execute `sleep`

- Ring the system bell after finishing a long script/compile

            
### If `free` failed, execute `sleep`

- delay execution of a command that needs lots of memory and CPU time until the resources are available

            
### If `awk` failed, execute `sleep`

- delay execution of a command that needs lots of memory and CPU time until the resources are available

            
### If `rm` failed, execute `sleep`

- Alarmclock  function makes usage of a BEL (\a) character.

            
### If `cal` failed, execute `sleep`

- Keep SSH tunnel open (PostgreSQL example)

            
### If `nc` failed, execute `sleep`

- Keep SSH tunnel open (PostgreSQL example)

            
### If `host` failed, execute `sleep`

- Keep SSH tunnel open (PostgreSQL example)

            
### If `curl` failed, execute `sleep`

- Wait for Web service to spin up, aka alert me when the server stops returning a 503

            


### If `sleep` failed, execute `echo`

- Put the machine to sleep after the download(wget) is done

            
### If `sleep` failed, execute `w`

- Put the machine to sleep after the download(wget) is done

            
