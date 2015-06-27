---
layout: project
title: Installation
excerpt: "A Docker based build and test environment, especially for Joomla!."
tags: [build, test, multi-version development, joomla, docker, installation]
share: false
image:
  feature: header-image-2.jpg
next:
  url: build/usage/
  title: Usage
home:
  url: build/
  title: GreenCape / build
---

### Prerequisites

In order to use this build and test environment, you need to have

  - [Composer][composer], a dependency manager for PHP
  - [Docker][docker] for lightweight container virtualization
  - [Docker-Compose][fig], a Docker orchestration tool
  - [DNSmasq][dnsmasq], a local lightweight DNS server
  - [GraphViz][graphviz] for diagrams in the API documentation

properly installed on your development system. Everything else will be retrieved automatically when it is needed.

[composer]: https://getcomposer.org/ "Dependency Manager for PHP"
[docker]: https://www.docker.com/ "Container Virtualization"
[fig]: https://www.docker.com/ "Docker Orchestration Tool"
[dnsmasq]: http://www.thekelleys.org.uk/dnsmasq/doc.html "Local DNS Server"
[graphviz]: http://www.graphviz.org/ "Graph Visualization Software"

### Configuration of DNSmasq

To route all requests for `*.dev` domains to localhost, add the line

    address=/dev/127.0.0.1
    
to the DNSmasq configuration. This is best done in its own file named `dev` in the `/etc/dnsmasq.d` directory (for Ubuntu).
You may add it to `/etc/dnsmasq.conf` directly instead, if you want. It is set up correctly, if the output of

    dig *.dev
    
contains the lines

    ;; ANSWER SECTION:
    *.dev.			0	IN	A	127.0.0.1

### Preparation of the build and test environment

Download the build environment and unpack it into your project directory.
In the `build` subdirectory, call Composer to resolve the dependencies.

    $ cd <project>/build
    $ composer install