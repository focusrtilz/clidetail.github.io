---
layout: manual
title:  The list of sudo options with example
tags: sudo
---

This is a list of `sudo` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-A` or `--askpass`
#### Description
Normally sudo will prompt for a password when it needs one. This option tells sudo to use the program specified by the SUDO_ASKPASS environment variable to prompt for a password.  If SUDO_ASKPASS is not set, sudo will use the program specified by the --askpass option or the default askpass program (see sudo.conf(5)).

#### Example

```
$ sudo -A <command>
```

### Option `-B` or `--bell`
#### Description

Ring the terminal bell when a password is required, rather than printing a message on the terminal.

#### Example

```
$ sudo -B <command>
```

### Option `-b` or `--background`
#### Description

Run the given command in the background.  Note that it is not possible to use shell job control to manipulate background processes started by sudo.  Most interactive commands will fail to work properly in background mode.

#### Example

```
$ sudo -b <command>
```

### Option `-E` or `--preserve-env`
#### Description

Indicates to the security policy that the user wishes to preserve their existing environment variables.  The security policy may return an error if the user does not have permission to preserve the environment.

#### Example

```
$ sudo -E <command>
```

### Option `-e` or `--edit`
#### Description

Edit the command via the editor specified by the SUDO_EDITOR environment variable, or the editor specified by the --editor option, or the default editor (see sudo.conf(5)).  The editor is invoked with the command as standard input.  If the command is modified, the modified command is executed.  If the command is not modified, it is not executed.

#### Example

```
$ sudo -e <command>
```

### Option `-H` or `--set-home`
#### Description

Request that the security policy set the HOME environment variable to the home directory specified by the target user's password database entry.  The security policy may return an error if the user does not have permission to set the HOME environment variable.

#### Example

```
$ sudo -H <command>
```

### Option `-h` or `--help`
#### Description

Display a help message.

#### Example

```
$ sudo -h 
```

### Option `-k` or `--reset-timestamp`
#### Description

When used without a command, invalidates the user's cached credentials.  In other words, the next time sudo is run a password will be required.  This option does not require a password and was added to allow a user to revoke sudo permissions from a .logout file.

When used in conjunction with a command or an option that may require a password, this option will cause sudo to ignore the user's cached credentials.  As a result, sudo will prompt for a password (if one is required by the security policy) and will not update the user's cached credentials.

Not all security policies support credential caching.

#### Example

```
$ sudo -k <command>
```

### Option `-K` or `--remove-timestamp`
#### Description

Similar to the -k option, but also removes the user's timestamp file.  This option does not require a password and was added to allow a user to revoke sudo permissions from a .logout file.

#### Example

```
$ sudo -K <command>
```

### Option `-l` or `--list`
#### Description

If the -l (lower-case letter ``ell'') option is specified, sudo will list the allowed commands for the invoking user.  If a command is specified on the command line, sudo will list whether or not the invoking user is allowed to run the command as the target user.  If the -l option is specified more than once, sudo will list the allowed commands for the target user.

#### Example

```
$ sudo -l <command>
```

### Option `-n` or `--non-interactive`

Avoids the use of a password if one is not required by the security policy.  This option is useful for scripts that need to run commands as root but do not have a password.  If a password is required by the security policy, sudo will return an error.

#### Example

```
$ sudo -n <command>
```

### Option `-p` or `--prompt`
#### Description

Use the specified prompt instead of the default.  The default prompt is "Password: ".

#### Example

```
$ sudo -p=<passord> command
```

### Option `-S` or `--stdin`
#### Description

Write a prompt to the standard error and read the password from the standard input.  The -S option is useful for scripts that need to run commands as root but do not have a password.  If a password is required by the security policy, sudo will return an error.

#### Example

```
$ sudo -S <command>
```

### Option `-s` or `--shell`
#### Description

Run the shell specified by the target user's password database entry rather than the user's default shell.  The security policy may return an error if the user does not have permission to run the shell specified by the password database entry.

#### Example

```
$ sudo -s <command>
```

### Option `-u` or `--user`

Run the specified command as the target user rather than as root.  The target user must be allowed to run the specified command as root via the sudoers file.  The -u option may be used to run a command as a user other than root.  The -u option may be specified more than once to run a command as multiple users.

#### Example

```
$ sudo -u <user> <command>
```

### Option `-v` or `--validate`
#### Description

Update the user's cached credentials if they have expired.  This option does not require a password and was added to allow a user to update their cached credentials from a .login file.

#### Example

```
$ sudo -v <command>
```

### Option `-V` or `--version`
#### Description

Display the version of sudo.

#### Example

```
$ sudo -V
```

