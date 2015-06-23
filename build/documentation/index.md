---
layout: project
title: Documentation
excerpt: "A Docker based build and test environment, especially for Joomla!."
tags: [build, test, multi-version development, joomla, docker, documentation]
share: false
image:
  feature: header-image-2.jpg
prev:
  url: build/quality/
  title: Quality Check
home:
  url: build/
  title: GreenCape / build
---

Documentation is created during the build task.

### Changelog

A changelog is created from the commit history of `git`.

    file://<your-project's-root>/CHANGELOG.md

### API Documentation

For API documentation, either [PHPDocumentor2][phpdoc] or [ApiGen][apigen] can be used. The
documentation is located at

    file://<your-project's-root>/build/api/index.html

[apigen]: http://apigen.org/ "ApiGen project home"
[phpdoc]: http://www.phpdoc.org/ "PHPDocumentor2 project home"

### Quality Report

The [PHP_CodeBrowser][phpcb] aggregates the log files from the QA toolchain with the source
code into a browsable quality report. It is located at

    file://<your-project's-root>/build/code-browser/index.html

[phpcb]: http://github.com/Mayflower/PHP_CodeBrowser "PHP_CodeBrowser on GitHub"

### Coverage Report

The test coverage report is located at

    file://<your-project's-root>/build/report/coverage/index.html

It contains the aggregated coverage information from unit tests, integration tests, and system tests.

### Charts

[PHPDepend][pdepend] creates two charts,

    file://<your-project's-root>/build/charts/dependencies.svg
    file://<your-project's-root>/build/charts/overview-pyramid.svg

[pdepend]: http://pdepend.org/ "PHP Depend project home"
