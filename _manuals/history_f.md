---
layout: manual
title:  "history -f | Combining the use of grep to filter command logs (typed in specific date)." 
tags: history
---

### Scenario
When we need to check the typed commands in the system, we use command __`history`__ to do the work.

### Options `-f` for `history` 
 __`f`__ is the abbreviation of __`full`__ time format.

### Manpage Description
Option __`-f`__:
Prints full time-date stamps in the US __`MM/DD/YY hh:mm`__ format.

### Detail Explain
It is often that we look back into the command history when trouble shooting to a problem or doing security forensics. If so, timestamp would be a very important information for these jobs. 

With option __`-f`__, we can print the full time-date stamps in the US format. Also, we can specify a number to print histry records from that line number. So, if we'd like to print the history from the first record, the number is 1. 

Then, we can use __`pipe`__ to pass the result to the other tool, __`grep`__. And specify a specific date to look into.

### Version
zshbuiltins

### Examples
Here is the example of __`history -f`__.

- __`history -f`__ Print the full time-date stamps in US format.

```bash
$ history -f 1076 |grep "6/11/2022"
 1076  6/11/2022 20:20  history -f 1066 |grep "6/11/2022" |less
 1077  6/11/2022 20:28  history 1066 -f |grep "6/11/2022" |less
 1078  6/11/2022 20:28  history 1066 -f |grep "6/11/2022" |less
 1079  6/11/2022 20:32  history -f 1066 |grep "6/11/2022" |less
 1080  6/11/2022 20:33  history -f 1066 |grep "6/11/2022"
```

