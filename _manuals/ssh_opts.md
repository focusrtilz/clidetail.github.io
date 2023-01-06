---
layout: manual
title:  The list of ssh options with example
tags: ssh
---

This is a list of `ssh` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-4`
#### Description

Forces ssh to use IPv4 addresses only.

#### Example

```
$ ssh -4 user@host
```

### Option `-6`
#### Description

Forces ssh to use IPv6 addresses only.

#### Example

```
$ ssh -6 user@host
```

### Option `-A`
#### Description

Enables forwarding of connections from an authentication agent suchas ssh-agent(1).  This can also be specified on a per-host basis ina configuration file.

#### Example

```
$ ssh -A user@host
```

### Option `-a`
#### Description

Disables forwarding of the authentication agent connection.

#### Example

```
$ ssh -a user@host
```

### Option `-B`
#### Description

Bind to the address of bind_interface before attempting to connectto the destination host.  This is only useful on systems with morethan one address.

#### Example

```
$ ssh -B user@host
```

### Option `-b`
#### Description

Use bind_address on the local machine as the source address of theconnection.  Only useful on systems with more than one address.

#### Example

```
$ ssh -b user@host
```

### Option `-C`
#### Description

Requests compression of all data (including stdin, stdout, stderr,and data for forwarded X11, TCP and UNIX-domain connections).  Thecompression algorithm is the same used by gzip(1).  Compression isdesirable on modem lines and other slow connections, but will onlyslow down things on fast networks.  The default value can be set ona host-by-host basis in the configuration files; see theCompression option.

#### Example

```
$ ssh -C user@host
```

### Option `-c`
#### Description

Selects the cipher specification for encrypting the session.cipher_spec is a comma-separated list of ciphers listed in order ofpreference.  See the Ciphers keyword in ssh_config(5) for moreinformation.

#### Example

```
$ ssh -c user@host
```

### Option `-D`
#### Description

Specifies a local “dynamic” application-level port forwarding.This works by allocating a socket to listen to port on the localside, optionally bound to the specified bind_address.  Whenever aconnection is made to this port, the connection is forwarded overthe secure channel, and the application protocol is then used todetermine where to connect to from the remote machine.  Currentlythe SOCKS4 and SOCKS5 protocols are supported, and ssh will act asa SOCKS server.  Only root can forward privileged ports.  Dynamicport forwardings can also be specified in the configuration file.

#### Example

```
$ ssh -D user@host
```

### Option `-IP`
#### Description

brackets.	Only the superuser can forward privileged ports.  Bydefault, the local port is bound in accordance with theGatewayPorts setting.  However, an explicit bind_address may beused to bind the connection to a specific address.  Thebind_address of “localhost” indicates that the listening port bebound for local use only, while an empty address or ‘*’ indicatesthat the port should be available from all interfaces.

#### Example

```
$ ssh -IP user@host
```

### Option `-E`
#### Description

Append debug logs to log_file instead of standard error.

#### Example

```
$ ssh -E user@host
```

### Option `-e`
#### Description

Sets the escape character for sessions with a pty (default: ‘~’).The escape character is only recognized at the beginning of a line.The escape character followed by a dot (‘.’) closes the connection;followed by control-Z suspends the connection; and followed byitself sends the escape character once.  Setting the character to“none” disables any escapes and makes the session fullytransparent.

#### Example

```
$ ssh -e user@host
```

### Option `-F`
#### Description

Specifies an alternative per-user configuration file.  If aconfiguration file is given on the command line, the system-wideconfiguration file (/etc/ssh/ssh_config) will be ignored.	Thedefault for the per-user configuration file is ~/.ssh/config.  Ifset to “none”, no configuration files will be read.

#### Example

```
$ ssh -F user@host
```

### Option `-f`
#### Description

Requests ssh to go to background just before command execution.This is useful if ssh is going to ask for passwords or passphrases,but the user wants it in the background.  This implies -n.  Therecommended way to start X11 programs at a remote site is withsomething like ssh -f host xterm.

#### Example

```
$ ssh -f remote_server "sleep 100; echo 'This command was run in the background'"
```

### Option `-G`
#### Description

Causes ssh to print its configuration after evaluating Host andMatch blocks and exit.

#### Example

```
$ ssh -G remote_server
```

### Option `-g`
#### Description

Allows remote hosts to connect to local forwarded ports.  If usedon a multiplexed connection, then this option must be specified onthe master process.$ ssh -H remote_server

#### Example

```
$ ssh -R 80:localhost:8080 remote_server
```

### Option `-I`
#### Description

Specify the PKCS#11 shared library ssh should use to communicatewith a PKCS#11 token providing keys for user authentication.

#### Example

```
$ ssh -I 2 remote_server
```
### Option `-i`
#### Description

Selects a file from which the identity (private key) for public keyauthentication is read.  The default is ~/.ssh/id_dsa,~/.ssh/id_ecdsa, ~/.ssh/id_ecdsa_sk, ~/.ssh/id_ed25519,~/.ssh/id_ed25519_sk and ~/.ssh/id_rsa.  Identity files may also bespecified on a per-host basis in the configuration file.  It ispossible to have multiple -i options (and multiple identitiesspecified in configuration files).  If no certificates have beenexplicitly specified by the CertificateFile directive, ssh willalso try to load certificate information from the filename obtainedby appending -cert.pub to identity filenames.

#### Example

```
$ ssh -i ~/.ssh/id_rsa remote_server
```

### Option `-J`
#### Description

Connect to the target host by first making a ssh connection to thejump host described by destination and then establishing a TCPforwarding to the ultimate destination from there.  Multiple jumphops may be specified separated by comma characters.  This is ashortcut to specify a ProxyJump configuration directive.  Note thatconfiguration directives supplied on the command-line generallyapply to the destination host and not any specified jump hosts.Use ~/.ssh/config to specify configuration for jump hosts.

#### Example

```
$ ssh -J jump_server remote_server
```

### Option `-K`
#### Description

Enables GSSAPI-based authentication and forwarding (delegation) ofGSSAPI credentials to the server.

#### Example

```
$ ssh -K remote_server
```

### Option `-k`
#### Description

Disables forwarding (delegation) of GSSAPI credentials to theserver.

#### Example

```
$ ssh -k remote_server
```

### Option `-l`
#### Description

Specifies the user to log in as on the remote machine.  This alsomay be specified on a per-host basis in the configuration file.

#### Example

```
$ ssh -l remote_server
```

### Option `-x`
#### Description

Disables X11 forwarding.

#### Example

```
$ ssh -x -l root
```

### Option `-Y`
#### Description

Enables trusted X11 forwarding.  Trusted X11 forwardings are notsubjected to the X11 SECURITY extension controls.

#### Example

```
$ ssh -Y -l root
```

### Option `-y`
#### Description

Send log information using the syslog(3) system module.  By defaultthis information is sent to stderr.

#### Example

```
$ ssh -y -l root
```

