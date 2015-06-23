---
layout: project
title: Usage
excerpt: "A Docker based build and test environment, especially for Joomla!."
tags: [build, test, multi-version development, joomla, docker, usage]
share: false
image:
  feature: header-image-2.jpg
prev:
  url: build/installation/
  title: Installation
next:
  url: build/directories
  title: Directory Layouts
home:
  url: build/
  title: GreenCape / build
---

The Phing build file `build.xml` located in the `build` directory provides a number of useful build targets.
Most of these targets are implemented in separate files, which can be found in the `build/phing` directory.

In your project root directory, create a new `build.xml` file with this content:

    <?xml version="1.0" encoding="UTF-8"?>
    <project name="Name of your Project" default="build" basedir=".">
    
        <!-- Directory layout -->
        <property name="build" value="${project.basedir}/build"/>
        <property name="dist" value="${project.basedir}/dist"/>
        <property name="source" value="${project.basedir}/source"/>
        <property name="tests" value="${project.basedir}/tests"/>
    
        <!-- Package data -->
        <property name="package.type" value="com_"/>
        <property name="package.name" value="foobar"/>
        <property name="manifest.file" value="installation/manifest.xml"/>
    
        <!-- supported generators: phpdocumentor2, apigen -->
        <property name="apidoc.generator" value="apigen"/>
    
        <!-- This line does the magic -->
        <import file="${build}/build.xml"/>
    
    </project>

Of course you can and should set the property values according to your environment setup.

Then, in your project root directory, issue the command

    $ phing help
    
to list all available build targets with their description and other useful information.

