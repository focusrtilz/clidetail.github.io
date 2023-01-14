---
layout: manual
title: "Useful commands with ping"
tags: ping
---

This is a list of useful commands utilizing `ping`. The examples provided were generated through an experiment using chatGPT to describe the command and provide examples.

### Ping IP and play sound on success.

To set an audible alarm when an IP address comes online using the ping command, you can use a combination of ping, grep, and afplay (macOS) or play (Linux).

This command will ping the IP address 8.8.8.8 and if the IP address responds, the command will play the sound file "/path/to/alarm.mp3" using afplay (macOS) or play (Linux) command.

Note: The grep -q option is used to suppress the output of the ping command and only check if the text "time=" appears in the output, indicating that the IP address is online.
You can also use this command inside a while loop to check every x seconds

```
$ ping 8.8.8.8 | grep -q "time=" && afplay /path/to/alarm.mp3
```