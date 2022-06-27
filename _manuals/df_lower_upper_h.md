---
layout: manual
title:  "df -h -H | To display free disk space in computer operating system format or the manufacturer's format" 
tags: df
---

### Scenario
When we need to check free disk space,, we use command __`df`__ to do the work.

### Options `-h` and `-H` for `df` 
__`df`__ stands for __`disk free`__.
Both __`-h`__ and __`-H`__ are the abbreviation of __`human`__  readable.

### Manpage Description
Option __`-h`__:
"Human-readable" output.  Use unit suffixes: `Byte`, `Kilobyte`, `Megabyte`, `Gigabyte`, `Terabyte` and `Petabyte` in order to reduce the number of digits to three or less using __`base 2`__ for sizes.

Option __`-H`__:
"Human-readable" output.  Use unit suffixes: `Byte`, `Kilobyte`, `Megabyte`, `Gigabyte`, `Terabyte` and `Petabyte` in order to reduce the number of digits to three or less using __`base 10`__ for sizes.

### Detail Explain
If we buy a storage device, it is often that the manufacturer express the size in decimal format (base 10) instead of what computer operating system traditionally reported format (base 2). 

Base 10:
```
Byte    
Kilobyte    10^3
Megabyte    10^6
Gigabyte    10^9
Terabyte    10^12
Petabyte    10^15
```
Base 2:
```
Byte    
Kibibyte    2^10
Mebibyte    2^20
Gibibyte    2^30
Tebibyte    2^40
Pebibyte    2^50
```

That is to say, if we display the storage size in computer operating system format (base 2), we get a smaller number than the manufacturer's format (base 10).

We can use option __`-h`__ and __`-H`__ to cross validate the storage size.

### Version
Mac BSD General Commands Manual

### Examples
Here are the examples of __`df -h`__ and __`df -H`__.

- __`df -H`__ Print the disk free space in manufacturer's format (base 10).



```bash
$ df -H
Filesystem       Size   Used  Avail Capacity iused      ifree %iused  Mounted on
/dev/disk3s1s1   245G    22G   132G    15%  553788 2393071172    0%   /
devfs            207k   207k     0B   100%     701          0  100%   /dev
/dev/disk3s6     245G    20k   132G     1%       0 2393624960    0%   /System/Volumes/VM
/dev/disk3s2     245G   330M   132G     1%     238 2393624722    0%   /System/Volumes/Preboot
/dev/disk3s4     245G   614M   132G     1%     191 2393624769    0%   /System/Volumes/Update
/dev/disk1s2     524M   6.3M   505M     2%       3    5119997    0%   /System/Volumes/xarts
/dev/disk1s1     524M   7.7M   505M     2%      17    5119983    0%   /System/Volumes/iSCPreboot
/dev/disk1s3     524M   328k   505M     1%      30    5119970    0%   /System/Volumes/Hardware
/dev/disk3s5     245G    88G   132G    40%  790233 2392834727    0%   /System/Volumes/Data
map auto_home      0B     0B     0B   100%       0          0  100%   /System/Volumes/Data/home
/dev/disk3s1     245G    22G   132G    15%  553607 2393071353    0%   /System/Volumes/Update/mnt1
```

- __`df -h`__ Print the disk free space in traditional computer operating system's format (base 10).

```bash
$ df -h
Filesystem       Size   Used  Avail Capacity iused      ifree %iused  Mounted on
/dev/disk3s1s1  228Gi   21Gi  123Gi    15%  553788 2393071172    0%   /
devfs           202Ki  202Ki    0Bi   100%     701          0  100%   /dev
/dev/disk3s6    228Gi   20Ki  123Gi     1%       0 2393624960    0%   /System/Volumes/VM
/dev/disk3s2    228Gi  315Mi  123Gi     1%     238 2393624722    0%   /System/Volumes/Preboot
/dev/disk3s4    228Gi  586Mi  123Gi     1%     191 2393624769    0%   /System/Volumes/Update
/dev/disk1s2    500Mi  6.0Mi  482Mi     2%       3    5119997    0%   /System/Volumes/xarts
/dev/disk1s1    500Mi  7.4Mi  482Mi     2%      17    5119983    0%   /System/Volumes/iSCPreboot
/dev/disk1s3    500Mi  320Ki  482Mi     1%      30    5119970    0%   /System/Volumes/Hardware
/dev/disk3s5    228Gi   82Gi  123Gi    40%  790462 2392834498    0%   /System/Volumes/Data
map auto_home     0Bi    0Bi    0Bi   100%       0          0  100%   /System/Volumes/Data/home
/dev/disk3s1    228Gi   21Gi  123Gi    15%  553607 2393071353    0%   /System/Volumes/Update/mnt1
```
