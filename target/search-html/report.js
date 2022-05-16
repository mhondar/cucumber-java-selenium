$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/automatedtest/sample/Search.feature");
formatter.feature({
  "name": "Search",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Search cucumber studio",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@search"
    },
    {
      "name": "@search_01"
    }
  ]
});
formatter.step({
  "name": "A user navigates to HomePage \"fr\"",
  "keyword": "Given "
});
formatter.step({
  "name": "a user searches for \"cucumber studio\"",
  "keyword": "When "
});
formatter.step({
  "name": "\"CucumberStudio\" is displayed in the first \"\u003cnbOfResultsToSearch\u003e\" results",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "nbOfResultsToSearch"
      ]
    },
    {
      "cells": [
        "3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search cucumber studio",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@search"
    },
    {
      "name": "@search_01"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A user navigates to HomePage \"fr\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automatedtest.sample.homepage.HomePageSteps.aUserNavigatesToHomePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a user searches for \"cucumber studio\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.automatedtest.sample.homepage.HomePageSteps.aUserSearchesFor(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"CucumberStudio\" is displayed in the first \"3\" results",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automatedtest.sample.searchresultpage.SearchResultPageSteps.isDisplayedInTheFirstResults(java.lang.String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});