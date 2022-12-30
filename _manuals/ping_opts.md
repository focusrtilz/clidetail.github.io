---
layout: manual
title:  The list of ping options with example
tags: ping
---

This is a list of `ping` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-o`
#### Description

Exit successfully after receiving one reply packet.


#### Example

```
$ ping -o google.com
```

### Option `-P`
#### Description

policy specifies IPsec policy for the ping session.  For details please refer to ipsec(4) and ipsec_set_policy(3).


#### Example

```
$ ping -P 'src 10.0.0.1/32 dst 10.0.0.2/32' google.com
```

### Option `-p`
#### Description

You may specify up to 16 “pad” bytes to fill out the packet you send.  This is useful for diagnosing data-dependent problems in a network.  For example, “-p ff” will cause the sent packet to be filled with all ones.


#### Example

```
$ ping -p ff google.com
```

### Option `-Q`
#### Description

Somewhat quiet output.  Don't display ICMP error messages that are in response to our query messages.  Originally, the -v flag was required to display such errors, but -v displays all ICMP error messages.  On a busy machine, this output can be overbearing.  Without the -Q flag, ping prints out any ICMP error messages caused by its own ECHO_REQUEST messages.


#### Example

```
$ ping -Q google.com
```

### Option `-q`
#### Description

Quiet output.  Nothing is displayed except the summary lines at startup time and when finished.


#### Example

```
$ ping -q google.com
```

### Option `-R`
#### Description

Record route.  Includes the RECORD_ROUTE option in the ECHO_REQUEST packet and displays the route buffer on returned packets.  This option is deprecated and is now a no-op.


#### Example

```
$ ping -Ｒ google.com
```

### Option `-r`
#### Description

Bypass the normal routing tables and send directly to a host on an attached network.  If the host is not on a directly-attached network, an error is returned.  This option can be used to ping a local host through an interface that has no route through it (e.g., after the interface was dropped by routed(8)).


#### Example

```
$ ping -r google.com
```

### Option `-S`
#### Description

Use the following IP address as the source address in outgoing packets.  On hosts with more than one IP address, this option can be used to force the source address to be something other than the IP address of the interface the probe packet is sent on.  If the IP address is not one of this machine's interface addresses, an error is returned and nothing is sent.


#### Example

```
$ ping -S 10.0.0.1 google.com
```

### Option `-s`
#### Description

Specify the number of data bytes to be sent.  The default is 56, which translates into 64 ICMP data bytes when combined with the 8 bytes of ICMP header data.  This option cannot be used with ping sweeps.


#### Example

```
$ ping -s 100 google.com
```

### Option `-T`
#### Description

Set the IP Time To Live for multicasted packets.  This flag only applies if the ping destination is a multicast address.


#### Example

```
$ ping -T 10 google.com
```

### Option `-t`
#### Description

Specify a timeout, in seconds, before ping exits regardless of how many packets have been received.


#### Example

```
$ ping -t 10 google.com
```

### Option `-v`
#### Description

Verbose output.  ICMP packets other than ECHO_RESPONSE that are received are listed.


#### Example

```
$ ping -v google.com
```

### Option `-W`
#### Description

Time in milliseconds to wait for a reply for each packet sent.  If a reply arrives later, the packet is not printed as replied, but considered as replied when calculating statistics.


#### Example

```
$ ping -W 100 google.com
```

### Option `-z`
#### Description

Use the specified type of service.

#### Example

```
$ ping -z lowdelay google.com
```
