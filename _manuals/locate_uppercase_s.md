---
layout: manual
title:  "locate -S || Check and generate locate database" 
tags: locate
---

### Scenario
When we need to search files in the system, we often use command __`locate`__ to do the work.

### Option __`-S`__ of Command `locate` 
__`-S`__ is the abbreviation of __`statistics`__.

### Manpage Description
Option __`-S`__:
Print some __`statistics`__ about the database and exit.

### Detail Explain
The command __`locate`__ does not search directly in the system. Instead, it first built a database of files and their locations. Then the __`locate`__ command searches directly in the database.

In other words, if no database exits, you can't use __`locate`__. So how do we know if there's a database for locate to search? Simple, we can use option __`-S`__ to see if there is a db. 

If there's no db, we can use __`sudo launchctl load -w /System/Library/LaunchDaemons/com.apple.locate.plist`__ to generate the db.

Please note that creating a db might take some time. 

### Version
Mac BSD General Commands Manual

### Examples
Here is the example of __`locate -S`__.

- __`locate -S`__ Print some statistics about the database and exit.

```bash
$ locate -S

WARNING: The locate database (/var/db/locate.database) does not exist.
To create the database, run the following command:

  sudo launchctl load -w /System/Library/LaunchDaemons/com.apple.locate.plist

Please be aware that the database can take some time to generate; once
the database has been created, this message will no longer appear.

$ sudo launchctl load -w /System/Library/LaunchDaemons/com.apple.locate.plist

$ locate -S                                                         
Database: /var/db/locate.database
Compression: Front: 12.78%, Bigram: 54.36%, Total: 8.77%
Filenames: 1744500, Characters: 213675518, Database size: 18745052
Bigram characters: 8556110, Integers: 162747, 8-Bit characters: 329
```

