---
layout: manual
title:  The list of cd options with example
tags: cd
---

This is a list of `cd` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-L` or `--logical`

#### Description

Change the shell working directory to the target directory by following symbolic links.

#### Example

```
$ cd -L <link>
```

### Option `--`

#### Description

Change the shell working directory to the target directory by following symbolic links.

#### Example

```
$ cd -- -L link
```
