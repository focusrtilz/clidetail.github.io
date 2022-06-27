---
layout: manual
title:  "sudo -K [uppercase K] | Remove user’s cached credential entirely"
tags: "sudo"
---

### Scenario
__`sudo`__ allows a permitted user to execute a command as the __`superuser`__ or __`another user`__.

### Options `-K` for `sudo` 
__`K`__ is the abbreviation of __`kill`__.

### Manpage Description
Similar to the __`-k`__ option, except that it __`removes`__ the user's cached credentials __`entirely`__ and may not be used in conjunction with a command or other option.  This option does not require a password. Not all security policies support credential caching.

### Detail Explain
When the user's cached credential is valid, users just have to type the password once and they don't have to type the password again in the next following short time (like 5 mins).

However, this convenient design gives the criminal an opportunity to control the machine with superuser privilege. And thus cause the security issue.

Preventing this from happening, we can use option __`-k`__ to ignore triggering the cached credential. So the next time sudo is run, a password will be required.

But, sometimes we just forget about using option __`-k`__. That's okay. We can still use option __`-K`__ to remove user's cached credential entirely. And make sure that the next sudo is run, a password will be required.

### Version
Mac System Manager's Manual

### Examples
Here is the example of __`sudo -k`__.

- __`sudo -K`__ Remove user's cached credential entirely.

```bash
$sudo ping 127.0.0.1
Password:
PING 127.0.0.1 (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.076 ms
^C
--- 127.0.0.1 ping statistics ---
1 packets transmitted, 1 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 0.076/0.076/0.076/0.000 ms

$sudo ping 127.0.0.1
PING 127.0.0.1 (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.114 ms
^C
--- 127.0.0.1 ping statistics ---
1 packets transmitted, 1 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 0.114/0.114/0.114/0.000 ms

$sudo -K

$sudo ping 127.0.0.1
Password:
PING 127.0.0.1 (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.059 ms
^C
--- 127.0.0.1 ping statistics ---
1 packets transmitted, 1 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 0.059/0.059/0.059/0.000 ms
```

