---
layout: manual
title:  "ping - Statistics of command combinations using double pipe"
tags: statistic
---

## Before

__The commands before `ping`:__ If the given command failed, execute `ping`.

| Command | percentage |
|--------|--------|
| w | 40% |
| ping | 30% |
| jp | 20% |
| curl | 10% |



## After

__The commands after `ping`:__ If `ping` failed, execute the given command.

| Command | Percentage | 
|-------|--------|
| echo | 25% |
| ping | 10% |
| sleep | 10% |
| w | 10% |
| ssh | 3% |
| ip | 3% |
| ss | 3% |
| env | 3% |
| yes | 3% |
| date | 3% |
| sort | 3% |
| host | 3% |
| su | 3% |
| id | 3% |
| ln | 3% |
| jp | 3% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### If `w` failed, execute `ping`

- Check a server is up. If it isn't mail me.
- Check a internet connetion is up. If it isn't write a log.
- ping a host until it responds, then play a sound, then exit
- Check a server is up. If it isn't mail me.

            
### If `ping` failed, execute `ping`

- Check a server is up. If it isn't mail me.
- Check a internet connetion is up. If it isn't write a log.
- Check a server is up. If it isn't mail me.

            
### If `jp` failed, execute `ping`

- Check a server is up. If it isn't mail me.
- Check a server is up. If it isn't mail me.

            
### If `curl` failed, execute `ping`

- Check a server is up. If it isn't mail me.

            


### If `ping` failed, execute `echo`

- Check if a machine is online with better UI
- Check if a machine is online
- Check a server is up. If it isn't mail me.
- Check a internet connetion is up. If it isn't write a log.
- Shell to discover MTU using ping
- ping scan for a network and says who is alive or not
- Check a server is up. If it isn't mail me.

            
### If `ping` failed, execute `ping`

- Check a server is up. If it isn't mail me.
- Check a internet connetion is up. If it isn't write a log.
- Check a server is up. If it isn't mail me.

            
### If `ping` failed, execute `sleep`

- Make a server's console beep when the network is down
- Check a internet connetion is up. If it isn't write a log.
- Pop up a Growl alert if Amtrak wifi doesn't know where to find The Google

            
### If `ping` failed, execute `w`

- ping a host until it responds, then play a sound, then exit
- Pop up a Growl alert if Amtrak wifi doesn't know where to find The Google
- ping scan for a network and says who is alive or not

            
### If `ping` failed, execute `ssh`

- SSH to a machine's internet address if it is not present on your local network

            
### If `ping` failed, execute `ip`

- SSH to a machine's internet address if it is not present on your local network

            
### If `ping` failed, execute `ss`

- SSH to a machine's internet address if it is not present on your local network

            
### If `ping` failed, execute `env`

- Make alert if host is 'dead' or not reachable

            
### If `ping` failed, execute `yes`

- Make alert if host is 'dead' or not reachable

            
### If `ping` failed, execute `date`

- Check a internet connetion is up. If it isn't write a log.

            
### If `ping` failed, execute `sort`

- Text graphing ping output filter

            
### If `ping` failed, execute `host`

- ping a host until it responds, then play a sound, then exit

            
### If `ping` failed, execute `su`

- Shell to discover MTU using ping

            
### If `ping` failed, execute `id`

- Shell to discover MTU using ping

            
### If `ping` failed, execute `ln`

- Pop up a Growl alert if Amtrak wifi doesn't know where to find The Google

            
### If `ping` failed, execute `jp`

- Check a server is up. If it isn't mail me.

            
