---
layout: project
title: Directory Layouts
excerpt: "A Docker based build and test environment, especially for Joomla!."
tags: [build, test, multi-version development, joomla, docker, directory, layout]
share: false
prev:
  url: build/usage/
  title: Usage
next:
  url: build/quality/
  title: Quality Check
home:
  url: build/
  title: GreenCape / build
---

When using this build and test environment, your directory layout looks like this:

    <project>/                      # Your project's root directory
     |- build/                      # The GreenCape build environment as a git submodule
     |   |- cache/                  # [gen] Cache for downloaded Joomla! versions
     |   |- config/                 # Configuration files 
     |   |- docker/                 # Definition of individual Docker images, that are not (yet) available from DockerHub
     |   |- logs/                   # [gen] Log files produced by the build and test environment
     |   |- phing/                  # Phing related files
     |   |   |- *.xml               # Build target definitions, included by build.xml
     |   |- plantuml                # Files for embedding of PlantUML
     |   |- report/                 # [gen] HTML reports generated from the log files
     |   |- screenshots             # [gen] Screenshots by failing system tests
     |   |- servers/                # [gen] Volumes and configuration files for the Docker containers
     |   |- template/               # Templates for container files
     |   |- vendor/                 # [gen] Dependencies installed by Composer
     |   |- build.xml.dist          # Template for the main build file
     |   |- composer.json           # Description of the dependencies
     |   |- composer.lock           # Composer lock file
     |   |- README.md               # This file
     |   |- *.*                     # Files related to the build project itself
     |   `- version.json            # [gen] Available Joomla! versions
     |- dist/                       # [gen] Your project's distribution packages
     |- docs/                       # Your project's documentation
     |- source/                     # Your project's source 
     |- tests/                      # Your project's test sources 
     `- build.xml                   # Your project's build file

The marker `[gen]` denotes files and directories that will be generated during the build process when needed.

### Source Directory Layout

Usually, the source directory layout follows the structure of the installation package. While
that makes packaging easier, it is hard to combine coverage reports from the integration tests
and the unit tests, if their directory layouts are different. The integration tests are always
run with the runtime structure.

Because of that, the source directory has the same structure as in a running installation.
For a `foobar` component, that would be

    administrator/components/com_foobar/
    administrator/language/en-GB/
    components/com_foobar/
    language/en-GB/
    media/com_foobar/

Unused directories can of course be omitted.
All installation related files are located in the `installation` directory.

### Test Directory Layout

The test directory layout follows the same structure as the source directory for integration
and unit tests.

    integration
        administrator/components/com_foobar/
        components/com_foobar/
    unit
        administrator/components/com_foobar/
        components/com_foobar/

The integration tests are copied to prepared test installations of different Joomla! versions
and run there. The unit tests are run where they are, and can thus only contain tests, that do
not need the CMS, framework or platform in any way.

### Test Installations

The test installations need a certain layout, too. For each installation, a `source` and a
`tests` directory are created. The `source` directory contains the Joomla! installation.
It is recommended to name the root directories with the version number, e.g. `J3.1.1`.
To reduce changes due to new versions, symlinks should be created, e.g. `J3-latest` pointing
to the newest 3.x.x installation of Joomla!.

PHPUnit on a test installation must be configured to create `clover.xml` and `junit.xml`
in the `build/logs` directory. These log files will be used for a consolidated test report.

