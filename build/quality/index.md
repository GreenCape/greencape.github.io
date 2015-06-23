---
layout: project
title: Quality Check
excerpt: "A Docker based build and test environment, especially for Joomla!."
tags: [build, test, multi-version development, joomla, docker, quality, check]
share: false
image:
  feature: header-image-2.jpg
prev:
  url: build/directories
  title: Directory Layouts
next:
  url: build/documentation
  title: Documentation
home:
  url: build/
  title: GreenCape / build
---

The [PHP Quality Assurance Toolchain][phpqatools] contains a lot of tools for creating metrics
and documentation. It can be easily installed using PEAR.

This development environment uses

  - PHPUnit
  - PHPLOC
  - PHP Mess Detector
  - PHP Copy/Paste Detector
  - PHP_CodeSniffer
  - PHP_CodeBrowser
  - PHP_Depend

Some of them produce XML log files, which are stored in `build/logs`. Additionally, the test
logs from the test installations are are moved to this directory, grouped by the name of the
test installation. After a full build, the following log files are found:

    J3-latest       // one for each test installation, named accordingly
        clover.xml
        junit.xml
    checkstyle.xml  // Style violations report from PHP_CodeSniffer
    clover.xml      // Coverage report from PHPUnit
    depend.xml      // Dependency metrics from PHP_Depend
    junit.xml       // Test report from PHPUnit
    phploc.csv      // LOC based metrics from PHPLOC
    pmd.xml         // Mess report from PHP Mess Detector
    pmd-cpd.xml     // Code duplication report from PHP Copy/Paste Detector
    summary.xml     // Several other metrics from PHP_Depend

[phpqatools]: http://phpqatools.org/ "PHP QA Tools project home"

