---
layout: manual
title: "Useful commands with rm"
tags: rm
---

This is a list of useful commands utilizing `rm`. The examples provided were generated through an experiment using chatGPT to describe the command and provide examples.

### Delete non-matching files in folder.

This command will delete all files in the folder "/path/to/folder" that do not have the ".txt" file extension.

Note: The -type f option is used to search for files only and the ! -name option is used to exclude files with the specified extension. The -print0 option is used to print the file names with a null character as the separator, which is useful when the filenames contain spaces or other special characters. The xargs -0 option is used to pass the file names to the rm command. Be aware that this command will delete the files permanently, they will not be in the trash or recycle bin.

```
$ find /path/to/folder -type f ! -name "*.txt" -print0 | xargs -0 rm
```