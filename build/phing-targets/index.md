---
layout: project
title: Phing Targets
excerpt: "Description of the Phing targets provided by GreenCape/build."
tags: [build, test, multi-version development, joomla, docker, documentation]
share: false
prev:
  url: build/documentation/
  title: Documentation
home:
  url: build/
  title: GreenCape / build
---

*Work in Progress* - The current refactoring of the build targets will have a severe impact on the available targets. 

## Main Targets (build.xml)

### build                  

Performs all tests and generates documentation and the quality report.

### dist                   

Generate the distribution

### dist-clean             

Cleanup distribution directory

### dist-prepare           

Create distribution directory

### selenium-restart       

### selenium-start         

### selenium-status        

### selenium-stop          

### sys-install-all        

### sys-reset-all          Reset the installations to the 'testbase' tag and restore the database

## Build Setup (setup.xml)

### self-update            

## Docker Targets (docker.xml)

### docker-build           

Generates the contents and prepares the test containers.

### docker-rm              

Removes the content of test containers.

### docker-start           

Starts the test containers, building them only if not existing.

### docker-stop            

Stops and removes the test containers.

### docker-up              

Starts the test containers after rebuilding them.

## Documentation Targets (document.xml)

### document               

Generates API documentation using the specified generator.

### document-changelog     

Generates CHANGELOG.md from the git commit history.

### document-clean         

### document-uml           

## Help Target (help.xml)

### help                   

Shows the available targets along with their description, dependencies, and location.

## Quality Measurement (metrics.xml)

### quality                

Generates a quality report using CodeBrowser.

### quality-check-style    

Generates checkstyle.xml using PHP CodeSniffer.

### quality-code-browser   

Aggregates the results from all the measurement tools.

### quality-copy-paste-detect 

Generates pmd-cpd.xml using PHP CopyPasteDetector.

### quality-depend         

Generates depend.xml and software metrics charts using PHP Depend.

### quality-mess-detect    

Generates pmd.xml using PHP MessDetector.

## Patch Set Creation (patch.xml)

### patch-create           

Creates a patch set ready to drop into an existing installation.

## Test Targets (tests.xml)

### test                   

Runs all tests locally and in the test containers.

### test-coverage-report   

Creates an consolidated HTML coverage report

### test-integration       

Runs integration tests on all test installations.

  - Test environments are read from `${test-environments}`
  - Integration tests are only run, if any of source files, integration test files, or environment definition is newer
    than the corresponding test log.
  - Tests from subdirectories in `tests/integration` (`administrator`, `site`, ...) are performed separately.
  - The PHPUnit `bootstrap.php` and `phpunit.xml` files are created matching the Joomla version of the test installation.
  - The log files are combined into one, and copied to `${build}/logs/coverage`.
  - The test entries in the logs are prepended with the environment name (basename of the corresponding XML file).

### test-system            

Runs system tests on all test installations.

### test-target            

### test-unit

Performs the unit tests in the local environment.

  - The `phpunit.xml` (`phpunit.xml.dist`) in the unit test directory is used to configure PHPUnit.
  - The logfiles are expected to be stored in `${build}/logs/coverage`.
  - The test entries in the logs are prepended with 'Unit: '.
