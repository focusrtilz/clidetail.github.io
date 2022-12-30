---
layout: manual
title:  The list of tar options with example
tags: tar
---

This is a list of `tar` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-c`
#### Description

Create a new archive containing the specified items.  The long option form is --create.

#### Example

```
$ tar -xf archive.tar
$ tar -C /home/user -xvf archive.tar
```

### Option `-r`
#### Description

Like -c, but new entries are appended to the archive.  Note that this only works on uncompressed archives stored in regular files. The -f option is required.  The long option form is --append.

#### Example

```
$ tar -f archive.tar -r file4 file5 file6
```

### Option `-t`
#### Description

List archive contents to stdout.  The long option form is --list.

#### Example

```
$ tar -tf archive.tar
```

### Option `-u`
#### Description

Like -r, but new entries are added only if they have a modification date newer than the corresponding entry in the archive.  Note that this only works on uncompressed archives stored in regular files. The -f option is required.  The long form is --update.

#### Example

```
$ tar -f archive.tar -u file4 file5 file6
```

### Option `-x`
#### Description

Extract to disk from the archive.	If a file with the same name appears more than once in the archive, each copy will be extracted, with later copies overwriting (replacing) earlier copies.	The long option form is --extract.

#### Example

```
$ tar -xf archive.tar
```

### Option `-a`
#### Description

(c mode only) Use the archive suffix to decide a set of the format and the compressions.  As a simple example, tar -a -cf archive.tgz source.c source.h creates a new archive with restricted pax format and gzip compression, tar -a -cf archive.tar.bz2.uu source.c source.h creates a new archive with restricted pax format and bzip2 compression and uuencode compression, tar -a -cf archive.zip source.c source.h creates a new archive with zip format, tar -a -jcf archive.tgz source.c source.h ignores the “-j” option, and creates a new archive with restricted pax format and gzip compression, tar -a -jcf archive.xxx source.c source.h if it is unknown suffix or no suffix, creates a new archive with restricted pax format and bzip2 compression.

#### Example

```
$ tar -a -cf archive.tgz file1 file2 file3
```

### Option `--acls`
#### Description

(c, r, u, x modes only) Archive or extract POSIX.1e or NFSv4 ACLs. This is the reverse of --no-acls and the default behavior in c, r, and u modes (except on Mac OS X) or if tar is run in x mode as root.  On Mac OS X this option translates extended ACLs to NFSv4 ACLs.  To store extended ACLs the --mac-metadata option is preferred.

#### Example

```
$ tar --acls -cvf archive.tar file1 file2 file3
```

### Option `-B`
#### Description

Ignored for compatibility with other tar(1) implementations.

#### Example

```
$ tar -B -cvf archive.tar file1 file2 file3
```

### Option `-b`
#### Description

blocksize, --block-size blocksize Specify the block size, in 512-byte records, for tape drive I/O. As a rule, this argument is only needed when reading from or writing to tape drives, and usually not even then as the default block size of 20 records (10240 bytes) is very common.

#### Example

```
$ tar -b 1024 -cvf archive.tar file1 file2 file3
```

### Option `-C directory`
#### Description

directory In c and r mode, this changes the directory before adding the following files.  In x mode, change directories after opening the archive but before extracting entries from the archive.

#### Example

```
$ tar -C /home/user -cvf archive.tar file1 file2 file3
```

### Option `--chroot`
#### Description

(x mode only) chroot() to the current directory after processing any -C options and before extracting any files.

#### Example

```
$ tar --chroot -xf archive.tar
```

### Option `-f file, --file file`
#### Description

Read the archive from or write the archive to the specified file. The filename can be - for standard input or standard output.  The default varies by system; on FreeBSD, the default is /dev/sa0; on Linux, the default is /dev/st0.

#### Example

```
$ tar -xf archive.tar
```

### Option `-H`
#### Description

(c and r modes only) Symbolic links named on the command line will be followed; the target of the link will be archived, not the link itself.

#### Example

```
$ tar -H ustar -cvf archive.tar file1 file2 file3
```

### Option `-h`
#### Description

(c and r modes only) Synonym for -L.

#### Example

```
$ tar -h
```

### Option `-I`
#### Description

Synonym for -T.

#### Example

```
$ tar -I
```

### Option `--help`
#### Description

Show usage.

#### Example

```
$ tar --help
```
