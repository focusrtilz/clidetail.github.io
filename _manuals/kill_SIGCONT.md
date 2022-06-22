---
layout: manual
title:  "kill -SIGCONT || Send a continue signal to the paused process" 
tags: kill
---

### Scenario
When we need to continue the paused process, we can use command __`kill`__ with option __`SIGCONT`__ to do the work.

### Option __`-SIGCONT`__ of Command `kill` 
__`-SIGCONT`__ stands for __`signal continue`__.

### Manpage Description
There's no description for __`SIGCONT`__. However, we did several experiements and proved that this option works!

### Detail Explain
Sometimes when we need to pause a process while using terminal, we can press __`ctrl + z`__ to pause the process. later, when we need to continue the process, we can type command __`fg`__ to continue the process.

However, we can do the same with option __`SIGCONT`__  of command __`kill`__. 

Please note that when using option __`SIGCONT`__ to continue the process, the process will not stop unless we use option __-s INT__ of command __`kill`_.

### Version
Mac BSD General Commands Manual

### Examples
Here are the examples of __`kill -SIGCONT`__ and __`kill -s INT`__.

- __`kill -SIGCONT`__ Continue the paused process.

```bash
# terminal 1
$ ping 127.0.0.1
PING 127.0.0.1 (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.075 ms
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.063 ms
64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.061 ms
64 bytes from 127.0.0.1: icmp_seq=3 ttl=64 time=0.090 ms
64 bytes from 127.0.0.1: icmp_seq=4 ttl=64 time=0.066 ms
64 bytes from 127.0.0.1: icmp_seq=5 ttl=64 time=0.101 ms
64 bytes from 127.0.0.1: icmp_seq=6 ttl=64 time=0.084 ms
.
.
.
# now we press ctrl + z to pause the ping process
^Z
zsh: suspended  ping 127.0.0.1
```
```bash
# On the same machine, terminal 2.
$ ps |grep "ping" 
 5548 ttys000    0:00.00 grep ping
 5545 ttys001    0:00.00 ping 127.0.0.1

$ kill -SIGCONT 5545
# Then we can see the ping process continues
```

- __`kill -s INT`__ Interrupt the continued process.

```bash
# terminal 1
# you can see the process continues!
$ 64 bytes from 127.0.0.1: icmp_seq=7 ttl=64 time=0.063 ms
64 bytes from 127.0.0.1: icmp_seq=8 ttl=64 time=0.090 ms
64 bytes from 127.0.0.1: icmp_seq=9 ttl=64 time=0.083 ms
64 bytes from 127.0.0.1: icmp_seq=10 ttl=64 time=0.092 ms
64 bytes from 127.0.0.1: icmp_seq=11 ttl=64 time=0.080 ms
64 bytes from 127.0.0.1: icmp_seq=12 ttl=64 time=0.093 ms

# and it can't be stopped even with ctrl + c
```

```bash
# terminal 2
# the only way to stop the process is to use option -s INT

$ kill -s INT 5545

# now you can see the ping process in terminal 1 stops!
```

