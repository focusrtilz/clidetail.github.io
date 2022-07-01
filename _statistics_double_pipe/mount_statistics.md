---
layout: manual
title:  "mount - Statistics of command combinations using double pipe"
tags: statistic
---

## Before

__The commands before `mount`:__ If the given command failed, execute `mount`.

| Command | percentage |
|--------|--------|
| mount | 27% |
| rm | 18% |
| exec | 18% |
| df | 9% |
| sudo | 9% |
| mkdir | 9% |
| su | 9% |



## After

__The commands after `mount`:__ If `mount` failed, execute the given command.

| Command | Percentage | 
|-------|--------|
| mount | 30% |
| sudo | 20% |
| su | 20% |
| mkdir | 10% |
| sort | 10% |
| du | 10% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### If `mount` failed, execute `mount`

- Check a nfs mountpoint and force a remount if it does not reply after a given timeout.
- Check a nfs mountpoint and force a remount if it does not reply after a given timeout.
- Silently ensures that a FS is mounted on the given mount point (checks if it's OK, otherwise unmount, create dir and mount)

            
### If `rm` failed, execute `mount`

- Check a nfs mountpoint and force a remount if it does not reply after a given timeout.
- Check a nfs mountpoint and force a remount if it does not reply after a given timeout.

            
### If `exec` failed, execute `mount`

- Check a nfs mountpoint and force a remount if it does not reply after a given timeout.
- Check a nfs mountpoint and force a remount if it does not reply after a given timeout.

            
### If `df` failed, execute `mount`

- Silently ensures that a FS is mounted on the given mount point (checks if it's OK, otherwise unmount, create dir and mount)

            
### If `sudo` failed, execute `mount`

- Silently ensures that a FS is mounted on the given mount point (checks if it's OK, otherwise unmount, create dir and mount)

            
### If `mkdir` failed, execute `mount`

- Silently ensures that a FS is mounted on the given mount point (checks if it's OK, otherwise unmount, create dir and mount)

            
### If `su` failed, execute `mount`

- Silently ensures that a FS is mounted on the given mount point (checks if it's OK, otherwise unmount, create dir and mount)

            


### If `mount` failed, execute `mount`

- Check a nfs mountpoint and force a remount if it does not reply after a given timeout.
- Check a nfs mountpoint and force a remount if it does not reply after a given timeout.
- Silently ensures that a FS is mounted on the given mount point (checks if it's OK, otherwise unmount, create dir and mount)

            
### If `mount` failed, execute `sudo`

- Silently ensures that a FS is mounted on the given mount point (checks if it's OK, otherwise unmount, create dir and mount)
- Silently ensures that a FS is mounted on the given mount point (checks if it's OK, otherwise unmount, create dir and mount)

            
### If `mount` failed, execute `su`

- Silently ensures that a FS is mounted on the given mount point (checks if it's OK, otherwise unmount, create dir and mount)
- Silently ensures that a FS is mounted on the given mount point (checks if it's OK, otherwise unmount, create dir and mount)

            
### If `mount` failed, execute `mkdir`

- Silently ensures that a FS is mounted on the given mount point (checks if it's OK, otherwise unmount, create dir and mount)

            
### If `mount` failed, execute `sort`

- Shows space used by each directory of the root filesystem excluding mountpoints/external filesystems (and sort the output)

            
### If `mount` failed, execute `du`

- Shows space used by each directory of the root filesystem excluding mountpoints/external filesystems (and sort the output)

            
