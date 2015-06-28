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

### Preparation of the build and test environment

Add the build and test environment as a submodule to your project, so `build/` is
managed as a project of its own within your project, giving you the opportunity to branch and tweak it and retain
the updatability anyway.

{% highlight bash %}
$ cd <project>
$ git submodule add https://github.com/GreenCape/build.git
{% endhighlight %}

In the `build` subdirectory, call Composer to resolve the dependencies.

{% highlight bash %}
$ cd <project>/build
$ composer install
{% endhighlight %}

Copy the `build.xml.dist` to your project's root directory, rename it to `build.xml`, and adapt it to your settings.
Everything but the package data should not need to be changed.

The Phing build file `build.xml` located in the `build/phing` directory provides a number of useful build targets.
Most of these targets are implemented in separate files, which can be found in the `build/phing` directory.

In your project root directory, issue the command

{% highlight bash %}
$ phing help
{% endhighlight %}
    
to list all available build targets with their description and other useful information.



#### Configuration of DNSmasq

To route all requests for `*.dev` domains to localhost, add the line

{% highlight text %}
address=/dev/127.0.0.1
{% endhighlight %}
    
to the DNSmasq configuration. This is best done in its own file named `dev` in the `/etc/dnsmasq.d` directory (for Ubuntu).
You may add it to `/etc/dnsmasq.conf` directly instead, if you want. It is set up correctly, if the output of

{% highlight bash %}
$ dig *.dev
{% endhighlight %}
    
contains the lines

{% highlight text %}
;; ANSWER SECTION:
*.dev.			0	IN	A	127.0.0.1
{% endhighlight %}
