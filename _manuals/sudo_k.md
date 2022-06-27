---
layout: manual
title:  "sudo -k [lowercase k] | Use option -k to ignore triggering the cached credential"
tags: "sudo"
---

### Scenario
__`sudo`__ allows a permitted user to execute a command as the __`superuser`__ or __`another user`__.

### Options `-k` for `sudo` 
__`k`__ is the abbreviation of __`kill`__.

### Manpage Description
When used without a command, __`invalidates`__ the user's __`cached credentials`__.  In other words, the next time sudo is run a password will be required.  This option does not require a password and was added to allow a user to revoke sudo permissions from a .logout file.

When __`used`__ in __`conjunction`__ with a command or an option that may require a password, this option will cause sudo to __`ignore`__ the user's cached credentials.  As a result, sudo will prompt for a password (if one is required by the security policy) and will __`not update`__ the user's cached credentials.

Not all security policies support credential caching.

### Detail Explain
When the user's cached credential is valid, users just have to type the password once and they don't have to type the password again in the next following short time (like 5 mins).

However, this convenient design gives the criminal an opportunity to control the machine with superuser privilege. And thus cause the security issue.

Preventing this from happening, we can use option __`-k`__ to ignore triggering the cached credential. So the next time sudo is run, a password will be required.

### Version
Mac System Manager's Manual

### Examples
Here is the example of __`sudo -k`__.

- __`sudo -k command`__ Execute the command with superuser privilege and ignore the update of cached credential.

```bash
$sudo -k ping 127.0.0.1
Password:
PING 127.0.0.1 (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.055 ms
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.077 ms
64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.080 ms
^C
--- 127.0.0.1 ping statistics ---
3 packets transmitted, 3 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 0.078/0.083/0.092/0.006 ms

$sudo ping 127.0.0.1
Password:
PING 127.0.0.1 (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.057 ms
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.055 ms
64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.060 ms
^C
--- 127.0.0.1 ping statistics ---
3 packets transmitted, 3 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 0.055/0.057/0.060/0.002 ms
```

