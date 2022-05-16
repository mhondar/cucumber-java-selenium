$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/automatedtest/sample/Home_page.feature");
formatter.feature({
  "name": "Home page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check page display",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@home_page"
    },
    {
      "name": "@home_page_display"
    }
  ]
});
formatter.step({
  "name": "A user navigates to HomePage \"\u003ccountryCode\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Google logo is displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "search bar is displayed",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "countryCode"
      ]
    },
    {
      "cells": [
        "fr"
      ]
    },
    {
      "cells": [
        "com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check page display",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@home_page"
    },
    {
      "name": "@home_page_display"
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
  "name": "Google logo is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automatedtest.sample.homepage.HomePageSteps.googleLogoIsDisplayed()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: Logo wasn\u0027t displayed after 5 seconds. (tried for 5 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:138)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:234)\n\tat com.automatedtest.sample.infrastructure.driver.Wait.waitUntilCondition(Wait.java:23)\n\tat com.automatedtest.sample.infrastructure.driver.Wait.forElementToBeDisplayed(Wait.java:35)\n\tat com.automatedtest.sample.homepage.HomePage.checkLogoDisplay(HomePage.java:32)\n\tat com.automatedtest.sample.homepage.HomePageSteps.googleLogoIsDisplayed(HomePageSteps.java:25)\n\tat ✽.Google logo is displayed(file:///Users/mhondar/Desktop/java%20cucumber%20selenium%20example/cucumber-java-selenium-webdriver-example/src/test/resources/com/automatedtest/sample/Home_page.feature:7)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#hplogo\"}\n  (Session info: chrome\u003d89.0.4389.114)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-4\u0027, revision: \u0027c2d955b49e\u0027\nSystem info: host: \u0027MacBook-Pro-de-Marisleydi.local\u0027, ip: \u0027fe80:0:0:0:8f4:f11a:a760:3721%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u002711.0.10\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.114, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: /var/folders/tg/jc73wlq11zj...}, goog:chromeOptions: {debuggerAddress: localhost:54751}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d539f9aa5ed998efc76e1ba3d7298852\n*** Element info: {Using\u003dcss selector, value\u003d#hplogo}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:441)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:494)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\n\tat com.sun.proxy.$Proxy22.isDisplayed(Unknown Source)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:211)\n\tat com.automatedtest.sample.infrastructure.driver.Wait.waitUntilCondition(Wait.java:23)\n\tat com.automatedtest.sample.infrastructure.driver.Wait.forElementToBeDisplayed(Wait.java:35)\n\tat com.automatedtest.sample.homepage.HomePage.checkLogoDisplay(HomePage.java:32)\n\tat com.automatedtest.sample.homepage.HomePageSteps.googleLogoIsDisplayed(HomePageSteps.java:25)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\n",
  "status": "failed"
});
formatter.step({
  "name": "search bar is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.automatedtest.sample.homepage.HomePageSteps.searchBarIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check page display",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@home_page"
    },
    {
      "name": "@home_page_display"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A user navigates to HomePage \"com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.automatedtest.sample.homepage.HomePageSteps.aUserNavigatesToHomePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Google logo is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automatedtest.sample.homepage.HomePageSteps.googleLogoIsDisplayed()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: Logo wasn\u0027t displayed after 5 seconds. (tried for 5 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:138)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:234)\n\tat com.automatedtest.sample.infrastructure.driver.Wait.waitUntilCondition(Wait.java:23)\n\tat com.automatedtest.sample.infrastructure.driver.Wait.forElementToBeDisplayed(Wait.java:35)\n\tat com.automatedtest.sample.homepage.HomePage.checkLogoDisplay(HomePage.java:32)\n\tat com.automatedtest.sample.homepage.HomePageSteps.googleLogoIsDisplayed(HomePageSteps.java:25)\n\tat ✽.Google logo is displayed(file:///Users/mhondar/Desktop/java%20cucumber%20selenium%20example/cucumber-java-selenium-webdriver-example/src/test/resources/com/automatedtest/sample/Home_page.feature:7)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#hplogo\"}\n  (Session info: chrome\u003d89.0.4389.114)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-4\u0027, revision: \u0027c2d955b49e\u0027\nSystem info: host: \u0027MacBook-Pro-de-Marisleydi.local\u0027, ip: \u0027fe80:0:0:0:8f4:f11a:a760:3721%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u002711.0.10\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.114, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: /var/folders/tg/jc73wlq11zj...}, goog:chromeOptions: {debuggerAddress: localhost:54775}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fd0047480f42b034a6f31a2dd80edd16\n*** Element info: {Using\u003dcss selector, value\u003d#hplogo}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor8.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:441)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:494)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\n\tat com.sun.proxy.$Proxy22.isDisplayed(Unknown Source)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:211)\n\tat com.automatedtest.sample.infrastructure.driver.Wait.waitUntilCondition(Wait.java:23)\n\tat com.automatedtest.sample.infrastructure.driver.Wait.forElementToBeDisplayed(Wait.java:35)\n\tat com.automatedtest.sample.homepage.HomePage.checkLogoDisplay(HomePage.java:32)\n\tat com.automatedtest.sample.homepage.HomePageSteps.googleLogoIsDisplayed(HomePageSteps.java:25)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\n",
  "status": "failed"
});
formatter.step({
  "name": "search bar is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.automatedtest.sample.homepage.HomePageSteps.searchBarIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check title",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@home_page"
    },
    {
      "name": "@home_page_title"
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
  "name": "page title is \"Google\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.automatedtest.sample.homepage.HomePageSteps.pageTitleIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});