---
layout: manual
title:  "ping -i -c || ping a host evenly in fix amount of time" 
tags: ping
---

### Scenario
When we need to see if a host on the internet still alive, we often use command __`ping`__ to do the work.

### Option __`-i`__ and option __`-c`__ of Command `ping` 
__`-c`__ is the abbreviation of __`count`__.
__`-i`__ uses character __`i`__ in __`wait`__.

### Manpage Description
Option __`-c`__:
Stop after sending (and receiving) count ECHO_RESPONSE packets. If this option is not specified, ping will operate until interrupted. If this option is specified in conjunction with ping sweeps, each sweep will consist of count packets.

Option __`-i`__:
Wait wait seconds between sending each packet. The default is to wait for __`one second`__ between each packet.  The wait time may be fractional, but only the __`super-user`__ may specify values __`less than 0.1 second`__. This option is incompatible with the -f option.

### Detail Explain
When we need to make sure the machines or services on the Internet work normally. Sometimes we use a very simple command to do the work. YES, we use __`ping`__.

We ping to check if the host responds. But what if we want to check a host evenly in fix amount of time? This requires simple combination of option __`-c`__ and __`-i`__.

Option __`-c`__ specifies number of pings. And Option __`-i`__ specifies how many seconds to wait for the next ping. 

Let's say, if we want to check a host every 5 minutes in the next 2 hours. We can use __`ping -i 300 -c 25 host_ip`__.

__`300 seconds`__: We have 60 seconds in 1 minute. 5 minutes = 60 x 5 = 300.
__`25 times`__: We have 60 minutes in 1 hour. 120 minutes / 5 minutes = 24. 24 time chuncks means we have 25 check points.


### Version
Mac BSD General Commands Manual

### Examples
Here is the example of __`ping -i -c 127.0.0.1`__.

- __`ping -i -c`__ Ping the host evenly in fixe amount of time.

```bash
$ time ping -i 2 -c 3 127.0.0.1
PING 127.0.0.1 (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.071 ms
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.115 ms
64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.053 ms

--- 127.0.0.1 ping statistics ---
3 packets transmitted, 3 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 0.053/0.080/0.115/0.026 ms
ping -i 2 -c 3 127.0.0.1  0.00s user 0.00s system 0% cpu 4.012 total

$ time ping -i 2 -c 4 127.0.0.1
PING 127.0.0.1 (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.110 ms
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.082 ms
64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.101 ms
64 bytes from 127.0.0.1: icmp_seq=3 ttl=64 time=0.092 ms

--- 127.0.0.1 ping statistics ---
4 packets transmitted, 4 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 0.082/0.096/0.110/0.010 ms
ping -i 2 -c 4 127.0.0.1  0.00s user 0.00s system 0% cpu 6.012 total
```

