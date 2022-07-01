---
layout: manual
title:  "iptables - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `iptables`:__ Pipe the result of the given command to `iptables`.

| Command | percentage |
|--------|--------|
| w | 30% |
| grep | 23% |
| awk | 23% |
| echo | 7% |
| tail | 7% |
| id | 7% |



## After

__The commands after `iptables`:__ Pipe the result of `iptables` to the given command.

| Command | Percentage | 
|-------|--------|
| grep | 57% |
| ln | 14% |
| head | 14% |
| cat | 14% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `w` to `iptables`

- see the size of the downloaded traffic
- Block known dirty hosts from reaching your machine
- Retrieve top ip threats from http://isc.sans.org/sources.html and add them into iptables output chain.
- Anti DDOS

            
### Pipe `grep` to `iptables`

- Block all FaceBook traffic
- Block all IPv4 addresses that has brute forcing our ssh server
- Add an iptables rule on RH/CentOs before the reject

            
### Pipe `awk` to `iptables`

- Block known dirty hosts from reaching your machine
- Retrieve top ip threats from http://isc.sans.org/sources.html and add them into iptables output chain.
- Anti DDOS

            
### Pipe `echo` to `iptables`

- see the size of the downloaded traffic

            
### Pipe `tail` to `iptables`

- Block all brute force attacks in realtime (IPv4/SSH)

            
### Pipe `id` to `iptables`

- Block all IPv4 addresses that has brute forcing our ssh server

            


### Pipe `iptables` to `grep`

- Check for Firewall Blockage.
- Block all brute force attacks in realtime (IPv4/SSH)
- Add an iptables rule on RH/CentOs before the reject
- watch iptables counters

            
### Pipe `iptables` to `ln`

- List only executables installed by a debian package

            
### Pipe `iptables` to `head`

- see the size of the downloaded traffic

            
### Pipe `iptables` to `cat`

- Block all brute force attacks in realtime (IPv4/SSH)

            
