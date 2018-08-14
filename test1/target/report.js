$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CheckoutByCard.feature");
formatter.feature({
  "line": 1,
  "name": "Checkout and pay by card",
  "description": "",
  "id": "checkout-and-pay-by-card",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4284804584,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Search for product proceed to checkout and pay by card",
  "description": "",
  "id": "checkout-and-pay-by-card;search-for-product-proceed-to-checkout-and-pay-by-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I search for items to add to basket",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I choose home delivery",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I proceed with my delivery details and card details",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "my order should be confirmed",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.am_on_the_homepage()"
});
formatter.result({
  "duration": 5949298170,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutByCard.i_search_for_items_to_add_to_basket()"
});
formatter.result({
  "duration": 23703541951,
  "status": "passed"
});
formatter.match({
  "location": "Search_Checkout.i_proceed_to_checkout()"
});
formatter.result({
  "duration": 30035167160,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.cssSelector: #checkoutModel (tried for 10 second(s) with 500 MILLISECONDS interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\r\n\tat pageObject.ProductPage.clickCheckoutMode(ProductPage.java:106)\r\n\tat stepDefinition.Search_Checkout.i_proceed_to_checkout(Search_Checkout.java:49)\r\n\tat ✽.And I proceed to checkout(CheckoutByCard.feature:6)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.cssSelector: #checkoutModel\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027DUN107052T\u0027, ip: \u002710.70.15.59\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:883)\r\n\tat java.util.Optional.orElseThrow(Optional.java:290)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:882)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat pageObject.ProductPage.clickCheckoutMode(ProductPage.java:106)\r\n\tat stepDefinition.Search_Checkout.i_proceed_to_checkout(Search_Checkout.java:49)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CheckoutByCard.i_choose_home_delivery()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckoutByCard.i_proceed_with_my_delivery_details_and_card_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckoutByCard.my_order_should_be_confirmed()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("GuestReserveAndCollectOrder.feature");
formatter.feature({
  "line": 1,
  "name": "Guest Reserve and collect",
  "description": "",
  "id": "guest-reserve-and-collect",
  "keyword": "Feature"
});
formatter.before({
  "duration": 99556,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "As a guest user I want to be able to reserve and order without registering my account",
  "description": "",
  "id": "guest-reserve-and-collect;as-a-guest-user-i-want-to-be-able-to-reserve-and-order-without-registering-my-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "search for a product as a guest user",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I proceed to checkout to reserve the product",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "my product is reserved",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.am_on_the_homepage()"
});
formatter.result({
  "duration": 2289769232,
  "status": "passed"
});
formatter.match({
  "location": "GuestReserveAndCollectOrder.search_for_a_product_as_a_guest_user()"
});
formatter.result({
  "duration": 5593680085,
  "status": "passed"
});
formatter.match({
  "location": "GuestReserveAndCollectOrder.i_proceed_to_checkout_to_reserve_the_product()"
});
formatter.result({
  "duration": 5488593966,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003ca href\u003d\"https://qa1.dunelm.com/ROCSStoreSelectionView?catalogId\u003d10002\u0026amp;langId\u003d-1\u0026amp;storeId\u003d10151\" id\u003d\"collectFromStore\" class\u003d\"btn btn-primary\"\u003e...\u003c/a\u003e is not clickable at point (997, 954). Other element would receive the click: \u003cli id\u003d\"second-spot\" class\u003d\"outer1\"\u003e...\u003c/li\u003e\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027DUN107052T\u0027, ip: \u002710.70.15.59\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\Ajoseph\\AppData\\Local\\Temp\\scoped_dir14536_20583}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d67.0.3396.99, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: e1bfe1b4c0a1f45408c5f99f01e8fcd4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat pageObject.BasketPage.click_ReserveOnline(BasketPage.java:49)\r\n\tat stepDefinition.GuestReserveAndCollectOrder.i_proceed_to_checkout_to_reserve_the_product(GuestReserveAndCollectOrder.java:39)\r\n\tat ✽.And I proceed to checkout to reserve the product(GuestReserveAndCollectOrder.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GuestReserveAndCollectOrder.my_product_is_reserved()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 203852,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "As a registered user I want to reserve an order",
  "description": "",
  "id": "guest-reserve-and-collect;as-a-registered-user-i-want-to-reserve-an-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I sign in to my account",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I search for product as a registered user",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I proceed to checkout to reserve the product",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "my product is reserved with my details already populated in confirm details",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.am_on_the_homepage()"
});
formatter.result({
  "duration": 1951824619,
  "status": "passed"
});
formatter.match({
  "location": "GuestReserveAndCollectOrder.i_sign_in_to_my_account()"
});
formatter.result({
  "duration": 6287027992,
  "status": "passed"
});
formatter.match({
  "location": "GuestReserveAndCollectOrder.i_search_for_product_as_a_registered_user()"
});
formatter.result({
  "duration": 4991565863,
  "status": "passed"
});
formatter.match({
  "location": "GuestReserveAndCollectOrder.i_proceed_to_checkout_to_reserve_the_product()"
});
formatter.result({
  "duration": 5811186246,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003ca href\u003d\"https://qa1.dunelm.com/ROCSStoreSelectionView?catalogId\u003d10002\u0026amp;langId\u003d-1\u0026amp;storeId\u003d10151\" id\u003d\"collectFromStore\" class\u003d\"btn btn-primary\"\u003e...\u003c/a\u003e is not clickable at point (997, 954). Other element would receive the click: \u003cli id\u003d\"second-spot\" class\u003d\"outer1\"\u003e...\u003c/li\u003e\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027DUN107052T\u0027, ip: \u002710.70.15.59\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\Ajoseph\\AppData\\Local\\Temp\\scoped_dir14536_20583}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d67.0.3396.99, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: e1bfe1b4c0a1f45408c5f99f01e8fcd4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat sun.reflect.GeneratedMethodAccessor8.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat pageObject.BasketPage.click_ReserveOnline(BasketPage.java:49)\r\n\tat stepDefinition.GuestReserveAndCollectOrder.i_proceed_to_checkout_to_reserve_the_product(GuestReserveAndCollectOrder.java:39)\r\n\tat ✽.And I proceed to checkout to reserve the product(GuestReserveAndCollectOrder.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GuestReserveAndCollectOrder.my_product_is_reserved_with_my_details_already_populated_in_confirm_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("M2MEnactor.feature");
formatter.feature({
  "line": 1,
  "name": "Enactor Journey",
  "description": "",
  "id": "enactor-journey",
  "keyword": "Feature"
});
formatter.before({
  "duration": 115966,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "As a user I want to be able to configure a product and add to basket",
  "description": "",
  "id": "enactor-journey;as-a-user-i-want-to-be-able-to-configure-a-product-and-add-to-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to enactor",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I configure a product and I add to basket",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I can see product displayed in my basket",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I continue to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "My order is placed",
  "keyword": "And "
});
formatter.match({
  "location": "Search.am_on_the_homepage()"
});
formatter.result({
  "duration": 1410285360,
  "status": "passed"
});
formatter.match({
  "location": "M2Menactor.i_navigate_to_enactor()"
});
formatter.result({
  "duration": 6476662257,
  "status": "passed"
});
formatter.match({
  "location": "M2Menactor.i_configure_a_product_and_I_add_to_basket()"
});
formatter.result({
  "duration": 9773482061,
  "status": "passed"
});
formatter.match({
  "location": "M2Menactor.i_can_see_product_displayed_in_my_basket()"
});
formatter.result({
  "duration": 5163573700,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003ca href\u003d\"https://qa1.dunelm.com/HomeDeliveryDetailsView?calculationUsageId\u003d-1%2C-2%2C-7\u0026amp;catalogId\u003d\u0026amp;deliverChange\u003d\u0026amp;HDshipModeId\u003d\u0026amp;errorViewName\u003dAjaxOrderItemDisplayView\u0026amp;fromPage\u003dbasket\u0026amp;orderId\u003d.\u0026amp;langId\u003d\u0026amp;storeId\u003d\u0026amp;addressId\u003d\u0026amp;URL\u003dHomeDeliveryDetailsView\" id\u003d\"js-homeDeliveryBtn\" class\u003d\"btn btn-primary\" data-new-checkout-url\u003d\"http://qa1.dunelm.com/CkmsSendOrder?orderId\u003d3600006704\u0026amp;ipAddress\u003d172.26.0.11\"\u003e...\u003c/a\u003e is not clickable at point (1291, 954). Other element would receive the click: \u003cli id\u003d\"third-spot\" class\u003d\"outer1\"\u003e...\u003c/li\u003e\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027DUN107052T\u0027, ip: \u002710.70.15.59\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\Ajoseph\\AppData\\Local\\Temp\\scoped_dir14536_20583}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d67.0.3396.99, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: e1bfe1b4c0a1f45408c5f99f01e8fcd4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat sun.reflect.GeneratedMethodAccessor8.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat pageObject.BasketPage.click_HomeDeliveryBotton(BasketPage.java:53)\r\n\tat stepDefinition.M2Menactor.i_can_see_product_displayed_in_my_basket(M2Menactor.java:42)\r\n\tat ✽.Then I can see product displayed in my basket(M2MEnactor.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "M2Menactor.i_continue_to_checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "M2Menactor.my_order_is_palced()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("MixBasketSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Mix Basket search functionality",
  "description": "",
  "id": "mix-basket-search-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 53242,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Mixed basket search",
  "description": "",
  "id": "mix-basket-search-functionality;mixed-basket-search",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I search for products and I add to basket",
  "rows": [
    {
      "cells": [
        "30005438"
      ],
      "line": 6
    },
    {
      "cells": [
        "30008773"
      ],
      "line": 7
    },
    {
      "cells": [
        "30008765"
      ],
      "line": 8
    },
    {
      "cells": [
        "30019604"
      ],
      "line": 9
    },
    {
      "cells": [
        "30117481"
      ],
      "line": 10
    },
    {
      "cells": [
        "30019557"
      ],
      "line": 11
    },
    {
      "cells": [
        "30025624"
      ],
      "line": 12
    },
    {
      "cells": [
        "30244202"
      ],
      "line": 13
    },
    {
      "cells": [
        "30304645"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I proceed to checkout dunelm",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.am_on_the_homepage()"
});
formatter.result({
  "duration": 1984315085,
  "status": "passed"
});
formatter.match({
  "location": "MixBasket.i_search_for_products_and_I_add_to_basket(DataTable)"
});
formatter.result({
  "duration": 24587771667,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cbutton data-dismiss\u003d\"modal\" class\u003d\"btn-secondary btn-large btn-full-width\" type\u003d\"button\"\u003e...\u003c/button\u003e is not clickable at point (1106, 336). Other element would receive the click: \u003cdiv class\u003d\"pdp-modal__side\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027DUN107052T\u0027, ip: \u002710.70.15.59\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\Ajoseph\\AppData\\Local\\Temp\\scoped_dir14536_20583}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d67.0.3396.99, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: e1bfe1b4c0a1f45408c5f99f01e8fcd4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat sun.reflect.GeneratedMethodAccessor8.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat pageObject.ProductPage.clickContinueShopnBtn(ProductPage.java:79)\r\n\tat stepDefinition.MixBasket.i_search_for_products_and_I_add_to_basket(MixBasket.java:45)\r\n\tat ✽.When I search for products and I add to basket(MixBasketSearch.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MixBasket.i_proceed_to_checkout_dunelm()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("SignInTest.feature");
formatter.feature({
  "line": 1,
  "name": "SignIn Email Validation",
  "description": "",
  "id": "signin-email-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "As a user I want to be able to signIn with correct email address",
  "description": "",
  "id": "signin-email-validation;as-a-user-i-want-to-be-able-to-signin-with-correct-email-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I fill in valid \"\u003cEmail\u003e\" email details\"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "am logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "signin-email-validation;as-a-user-i-want-to-be-able-to-signin-with-correct-email-address;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 10,
      "id": "signin-email-validation;as-a-user-i-want-to-be-able-to-signin-with-correct-email-address;;1"
    },
    {
      "cells": [
        "ayodeji516@gmail.com",
        "Trustee#01"
      ],
      "line": 11,
      "id": "signin-email-validation;as-a-user-i-want-to-be-able-to-signin-with-correct-email-address;;2"
    },
    {
      "cells": [
        "ayodeji512@gmail.com",
        "Trustee#01"
      ],
      "line": 12,
      "id": "signin-email-validation;as-a-user-i-want-to-be-able-to-signin-with-correct-email-address;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 103931,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "As a user I want to be able to signIn with correct email address",
  "description": "",
  "id": "signin-email-validation;as-a-user-i-want-to-be-able-to-signin-with-correct-email-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I fill in valid \"ayodeji516@gmail.com\" email details\"Trustee#01\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "am logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.am_on_the_homepage()"
});
formatter.result({
  "duration": 3616174524,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_sign_in_link()"
});
formatter.result({
  "duration": 1219915549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ayodeji516@gmail.com",
      "offset": 17
    },
    {
      "val": "Trustee#01",
      "offset": 53
    }
  ],
  "location": "SignInEmailAddress.i_fill_in_valid_email_details(String,String)"
});
formatter.result({
  "duration": 31083575931,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"logonId\"}\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027DUN107052T\u0027, ip: \u002710.70.15.59\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\Ajoseph\\AppData\\Local\\Temp\\scoped_dir14536_20583}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d67.0.3396.99, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: e1bfe1b4c0a1f45408c5f99f01e8fcd4\n*** Element info: {Using\u003did, value\u003dlogonId}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:457)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\r\n\tat pageObject.RegistrationLogonPage.typeSignInEmailAddressTest(RegistrationLogonPage.java:90)\r\n\tat stepDefinition.SignInEmailAddress.i_fill_in_valid_email_details(SignInEmailAddress.java:29)\r\n\tat ✽.And I fill in valid \"ayodeji516@gmail.com\" email details\"Trustee#01\"(SignInTest.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignInEmailAddress.am_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 170666,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "As a user I want to be able to signIn with correct email address",
  "description": "",
  "id": "signin-email-validation;as-a-user-i-want-to-be-able-to-signin-with-correct-email-address;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I fill in valid \"ayodeji512@gmail.com\" email details\"Trustee#01\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "am logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.am_on_the_homepage()"
});
formatter.result({
  "duration": 2336227737,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_sign_in_link()"
});
formatter.result({
  "duration": 1263215628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ayodeji512@gmail.com",
      "offset": 17
    },
    {
      "val": "Trustee#01",
      "offset": 53
    }
  ],
  "location": "SignInEmailAddress.i_fill_in_valid_email_details(String,String)"
});
formatter.result({
  "duration": 31091174970,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"logonId\"}\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027DUN107052T\u0027, ip: \u002710.70.15.59\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\Ajoseph\\AppData\\Local\\Temp\\scoped_dir14536_20583}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d67.0.3396.99, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: e1bfe1b4c0a1f45408c5f99f01e8fcd4\n*** Element info: {Using\u003did, value\u003dlogonId}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:457)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\r\n\tat pageObject.RegistrationLogonPage.typeSignInEmailAddressTest(RegistrationLogonPage.java:90)\r\n\tat stepDefinition.SignInEmailAddress.i_fill_in_valid_email_details(SignInEmailAddress.java:29)\r\n\tat ✽.And I fill in valid \"ayodeji512@gmail.com\" email details\"Trustee#01\"(SignInTest.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignInEmailAddress.am_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "As a user when I sign in with incorrect email address I should not be logged in",
  "description": "",
  "id": "signin-email-validation;as-a-user-when-i-sign-in-with-incorrect-email-address-i-should-not-be-logged-in",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I sign In with invalid \"\u003cEmail\u003e\" email and correct\"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "an error message is displayed to the user",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "signin-email-validation;as-a-user-when-i-sign-in-with-incorrect-email-address-i-should-not-be-logged-in;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 21,
      "id": "signin-email-validation;as-a-user-when-i-sign-in-with-incorrect-email-address-i-should-not-be-logged-in;;1"
    },
    {
      "cells": [
        "yvonnehendry788@yahoo.co..uk",
        "Testing12"
      ],
      "line": 22,
      "id": "signin-email-validation;as-a-user-when-i-sign-in-with-incorrect-email-address-i-should-not-be-logged-in;;2"
    },
    {
      "cells": [
        "paul.michael@blueyonder.co..uk",
        "Testing12"
      ],
      "line": 23,
      "id": "signin-email-validation;as-a-user-when-i-sign-in-with-incorrect-email-address-i-should-not-be-logged-in;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 94815,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "As a user when I sign in with incorrect email address I should not be logged in",
  "description": "",
  "id": "signin-email-validation;as-a-user-when-i-sign-in-with-incorrect-email-address-i-should-not-be-logged-in;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I sign In with invalid \"yvonnehendry788@yahoo.co..uk\" email and correct\"Testing12\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "an error message is displayed to the user",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.am_on_the_homepage()"
});
formatter.result({
  "duration": 1941394995,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_sign_in_link()"
});
formatter.result({
  "duration": 1288576024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yvonnehendry788@yahoo.co..uk",
      "offset": 24
    },
    {
      "val": "Testing12",
      "offset": 72
    }
  ],
  "location": "SignInEmailAddress.i_sign_In_with_invalid_email_and_correct(String,String)"
});
formatter.result({
  "duration": 30024266380,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"logonId\"}\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027DUN107052T\u0027, ip: \u002710.70.15.59\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\Ajoseph\\AppData\\Local\\Temp\\scoped_dir14536_20583}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d67.0.3396.99, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: e1bfe1b4c0a1f45408c5f99f01e8fcd4\n*** Element info: {Using\u003did, value\u003dlogonId}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:457)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\r\n\tat pageObject.RegistrationLogonPage.typeSignInEmailAddressTest(RegistrationLogonPage.java:90)\r\n\tat stepDefinition.SignInEmailAddress.i_sign_In_with_invalid_email_and_correct(SignInEmailAddress.java:50)\r\n\tat ✽.And I sign In with invalid \"yvonnehendry788@yahoo.co..uk\" email and correct\"Testing12\"(SignInTest.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignInEmailAddress.an_error_message_is_displayed_to_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 72570,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "As a user when I sign in with incorrect email address I should not be logged in",
  "description": "",
  "id": "signin-email-validation;as-a-user-when-i-sign-in-with-incorrect-email-address-i-should-not-be-logged-in;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I sign In with invalid \"paul.michael@blueyonder.co..uk\" email and correct\"Testing12\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "an error message is displayed to the user",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.am_on_the_homepage()"
});
formatter.result({
  "duration": 2319604885,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_sign_in_link()"
});
formatter.result({
  "duration": 1248994507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "paul.michael@blueyonder.co..uk",
      "offset": 24
    },
    {
      "val": "Testing12",
      "offset": 74
    }
  ],
  "location": "SignInEmailAddress.i_sign_In_with_invalid_email_and_correct(String,String)"
});
formatter.result({
  "duration": 30035581063,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"logonId\"}\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027DUN107052T\u0027, ip: \u002710.70.15.59\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\Ajoseph\\AppData\\Local\\Temp\\scoped_dir14536_20583}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d67.0.3396.99, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: e1bfe1b4c0a1f45408c5f99f01e8fcd4\n*** Element info: {Using\u003did, value\u003dlogonId}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:457)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\r\n\tat pageObject.RegistrationLogonPage.typeSignInEmailAddressTest(RegistrationLogonPage.java:90)\r\n\tat stepDefinition.SignInEmailAddress.i_sign_In_with_invalid_email_and_correct(SignInEmailAddress.java:50)\r\n\tat ✽.And I sign In with invalid \"paul.michael@blueyonder.co..uk\" email and correct\"Testing12\"(SignInTest.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SignInEmailAddress.an_error_message_is_displayed_to_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "As a user I want to be able to signIn with correct email address from home delivery details page",
  "description": "",
  "id": "signin-email-validation;as-a-user-i-want-to-be-able-to-signin-with-correct-email-address-from-home-delivery-details-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I add a product to basket and proceed to HD",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I sign in with my existing \"\u003cEmail\u003e\" and \"\u003cPassword\u003e\"credentials",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "am logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "signin-email-validation;as-a-user-i-want-to-be-able-to-signin-with-correct-email-address-from-home-delivery-details-page;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 32,
      "id": "signin-email-validation;as-a-user-i-want-to-be-able-to-signin-with-correct-email-address-from-home-delivery-details-page;;1"
    },
    {
      "cells": [
        "ayodeji1037@gmail.com",
        "Trustee#01"
      ],
      "line": 33,
      "id": "signin-email-validation;as-a-user-i-want-to-be-able-to-signin-with-correct-email-address-from-home-delivery-details-page;;2"
    },
    {
      "cells": [
        "ayodeji415@gmail.com",
        "Trustee#01"
      ],
      "line": 34,
      "id": "signin-email-validation;as-a-user-i-want-to-be-able-to-signin-with-correct-email-address-from-home-delivery-details-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 80228,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "As a user I want to be able to signIn with correct email address from home delivery details page",
  "description": "",
  "id": "signin-email-validation;as-a-user-i-want-to-be-able-to-signin-with-correct-email-address-from-home-delivery-details-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I add a product to basket and proceed to HD",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I sign in with my existing \"ayodeji1037@gmail.com\" and \"Trustee#01\"credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "am logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.am_on_the_homepage()"
});
formatter.result({
  "duration": 1857177970,
  "status": "passed"
});
formatter.match({
  "location": "SignInEmailAddress.i_add_a_product_to_basket_and_proceed_to_HD()"
});
formatter.result({
  "duration": 14525248624,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003ca href\u003d\"https://qa1.dunelm.com/HomeDeliveryDetailsView?calculationUsageId\u003d-1%2C-2%2C-7\u0026amp;catalogId\u003d10002\u0026amp;deliverChange\u003d\u0026amp;HDshipModeId\u003d\u0026amp;errorViewName\u003dAjaxOrderItemDisplayView\u0026amp;fromPage\u003dbasket\u0026amp;orderId\u003d.\u0026amp;langId\u003d-1\u0026amp;storeId\u003d10151\u0026amp;addressId\u003d\u0026amp;URL\u003dHomeDeliveryDetailsView\" id\u003d\"js-homeDeliveryBtn\" class\u003d\"btn btn-primary\" data-new-checkout-url\u003d\"http://qa1.dunelm.com/CkmsSendOrder?orderId\u003d3600006704\u0026amp;ipAddress\u003d172.26.0.11\"\u003e...\u003c/a\u003e is not clickable at point (1291, 954). Other element would receive the click: \u003cli id\u003d\"third-spot\" class\u003d\"outer1\"\u003e...\u003c/li\u003e\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027DUN107052T\u0027, ip: \u002710.70.15.59\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\Ajoseph\\AppData\\Local\\Temp\\scoped_dir14536_20583}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d67.0.3396.99, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: e1bfe1b4c0a1f45408c5f99f01e8fcd4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat sun.reflect.GeneratedMethodAccessor8.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat pageObject.BasketPage.click_HomeDeliveryBotton(BasketPage.java:53)\r\n\tat stepDefinition.SignInEmailAddress.i_add_a_product_to_basket_and_proceed_to_HD(SignInEmailAddress.java:73)\r\n\tat ✽.When I add a product to basket and proceed to HD(SignInTest.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "ayodeji1037@gmail.com",
      "offset": 28
    },
    {
      "val": "Trustee#01",
      "offset": 56
    }
  ],
  "location": "SignInEmailAddress.i_sign_in_with_my_existing_and_credentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInEmailAddress.am_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 61629,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "As a user I want to be able to signIn with correct email address from home delivery details page",
  "description": "",
  "id": "signin-email-validation;as-a-user-i-want-to-be-able-to-signin-with-correct-email-address-from-home-delivery-details-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I add a product to basket and proceed to HD",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I sign in with my existing \"ayodeji415@gmail.com\" and \"Trustee#01\"credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "am logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.am_on_the_homepage()"
});
formatter.result({
  "duration": 1925211939,
  "status": "passed"
});
formatter.match({
  "location": "SignInEmailAddress.i_add_a_product_to_basket_and_proceed_to_HD()"
});
formatter.result({
  "duration": 12692598140,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003ca href\u003d\"https://qa1.dunelm.com/HomeDeliveryDetailsView?calculationUsageId\u003d-1%2C-2%2C-7\u0026amp;catalogId\u003d10002\u0026amp;deliverChange\u003d\u0026amp;HDshipModeId\u003d\u0026amp;errorViewName\u003dAjaxOrderItemDisplayView\u0026amp;fromPage\u003dbasket\u0026amp;orderId\u003d.\u0026amp;langId\u003d-1\u0026amp;storeId\u003d10151\u0026amp;addressId\u003d\u0026amp;URL\u003dHomeDeliveryDetailsView\" id\u003d\"js-homeDeliveryBtn\" class\u003d\"btn btn-primary\" data-new-checkout-url\u003d\"http://qa1.dunelm.com/CkmsSendOrder?orderId\u003d3600006704\u0026amp;ipAddress\u003d172.26.0.11\"\u003e...\u003c/a\u003e is not clickable at point (1291, 954). Other element would receive the click: \u003cli id\u003d\"third-spot\" class\u003d\"outer1\"\u003e...\u003c/li\u003e\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027DUN107052T\u0027, ip: \u002710.70.15.59\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\Ajoseph\\AppData\\Local\\Temp\\scoped_dir14536_20583}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d67.0.3396.99, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: e1bfe1b4c0a1f45408c5f99f01e8fcd4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat sun.reflect.GeneratedMethodAccessor8.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat pageObject.BasketPage.click_HomeDeliveryBotton(BasketPage.java:53)\r\n\tat stepDefinition.SignInEmailAddress.i_add_a_product_to_basket_and_proceed_to_HD(SignInEmailAddress.java:73)\r\n\tat ✽.When I add a product to basket and proceed to HD(SignInTest.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "ayodeji415@gmail.com",
      "offset": 28
    },
    {
      "val": "Trustee#01",
      "offset": 55
    }
  ],
  "location": "SignInEmailAddress.i_sign_in_with_my_existing_and_credentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInEmailAddress.am_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("dunCheckoutD.feature");
formatter.feature({
  "line": 1,
  "name": "Checkout functionality",
  "description": "",
  "id": "checkout-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 107943,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "As a user I want to select different item in my basket and still be able to checkout",
  "description": "",
  "id": "checkout-functionality;as-a-user-i-want-to-select-different-item-in-my-basket-and-still-be-able-to-checkout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I selected items in my basket",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should be able to see list of delivery options",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.am_on_the_homepage()"
});
formatter.result({
  "duration": 1939891817,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutD.i_selected_items_in_my_basket()"
});
formatter.result({
  "duration": 13977223306,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not visible\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027DUN107052T\u0027, ip: \u002710.70.15.59\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\Ajoseph\\AppData\\Local\\Temp\\scoped_dir14536_20583}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d67.0.3396.99, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: e1bfe1b4c0a1f45408c5f99f01e8fcd4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat sun.reflect.GeneratedMethodAccessor8.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat pageObject.ProductPage.clickContinueShopnBtn(ProductPage.java:79)\r\n\tat stepDefinition.CheckoutD.i_selected_items_in_my_basket(CheckoutD.java:45)\r\n\tat ✽.When I selected items in my basket(dunCheckoutD.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CheckoutD.proceed_to_checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckoutD.i_should_be_able_to_see_list_of_delivery_options()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("dunRegister.feature");
formatter.feature({
  "line": 1,
  "name": "Register functionality",
  "description": "",
  "id": "register-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 46678,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "As a user I want to be able to register",
  "description": "",
  "id": "register-functionality;as-a-user-i-want-to-be-able-to-register",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I fill in details under Create an account",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click Create a dunelm account button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be log in",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click log out",
  "keyword": "And "
});
formatter.match({
  "location": "Search.am_on_the_homepage()"
});
formatter.result({
  "duration": 2666592273,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_sign_in_link()"
});
formatter.result({
  "duration": 1438816945,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_fill_in_details_under_Create_an_account()"
});
formatter.result({
  "duration": 30060749277,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"regLogonId\"}\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027DUN107052T\u0027, ip: \u002710.70.15.59\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\Ajoseph\\AppData\\Local\\Temp\\scoped_dir14536_20583}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d67.0.3396.99, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: e1bfe1b4c0a1f45408c5f99f01e8fcd4\n*** Element info: {Using\u003dname, value\u003dregLogonId}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:489)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\r\n\tat pageObject.RegistrationLogonPage.type_emailaddre(RegistrationLogonPage.java:50)\r\n\tat stepDefinition.Register.i_fill_in_details_under_Create_an_account(Register.java:31)\r\n\tat ✽.And I fill in details under Create an account(dunRegister.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Register.click_Create_a_dunelm_account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_should_be_log_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_click_log_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("dunSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "As a user I want to be able to create a search for a product",
  "description": "",
  "id": "search-functionality;as-a-user-i-want-to-be-able-to-create-a-search-for-a-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter \"\u003cproduct\u003e\" to be searched",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click search button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "product should display",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "search-functionality;as-a-user-i-want-to-be-able-to-create-a-search-for-a-product;",
  "rows": [
    {
      "cells": [
        "product"
      ],
      "line": 10,
      "id": "search-functionality;as-a-user-i-want-to-be-able-to-create-a-search-for-a-product;;1"
    },
    {
      "cells": [
        "Rubber duck"
      ],
      "line": 11,
      "id": "search-functionality;as-a-user-i-want-to-be-able-to-create-a-search-for-a-product;;2"
    },
    {
      "cells": [
        "Thermosoft cream plain blanket"
      ],
      "line": 12,
      "id": "search-functionality;as-a-user-i-want-to-be-able-to-create-a-search-for-a-product;;3"
    },
    {
      "cells": [
        "Slip photo frame"
      ],
      "line": 13,
      "id": "search-functionality;as-a-user-i-want-to-be-able-to-create-a-search-for-a-product;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 47772,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "As a user I want to be able to create a search for a product",
  "description": "",
  "id": "search-functionality;as-a-user-i-want-to-be-able-to-create-a-search-for-a-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter \"Rubber duck\" to be searched",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click search button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "product should display",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.am_on_the_homepage()"
});
formatter.result({
  "duration": 1756946732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rubber duck",
      "offset": 9
    }
  ],
  "location": "Search.i_enter_to_be_searched(String)"
});
formatter.result({
  "duration": 829698463,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_search_button()"
});
formatter.result({
  "duration": 7609833239,
  "status": "passed"
});
formatter.match({
  "location": "Search.product_should_display()"
});
formatter.result({
  "duration": 51148188,
  "status": "passed"
});
formatter.before({
  "duration": 45948,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "As a user I want to be able to create a search for a product",
  "description": "",
  "id": "search-functionality;as-a-user-i-want-to-be-able-to-create-a-search-for-a-product;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter \"Thermosoft cream plain blanket\" to be searched",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click search button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "product should display",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.am_on_the_homepage()"
});
formatter.result({
  "duration": 2071198228,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thermosoft cream plain blanket",
      "offset": 9
    }
  ],
  "location": "Search.i_enter_to_be_searched(String)"
});
formatter.result({
  "duration": 674010070,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_search_button()"
});
formatter.result({
  "duration": 8396372022,
  "status": "passed"
});
formatter.match({
  "location": "Search.product_should_display()"
});
formatter.result({
  "duration": 44205924,
  "status": "passed"
});
formatter.before({
  "duration": 1149811,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "As a user I want to be able to create a search for a product",
  "description": "",
  "id": "search-functionality;as-a-user-i-want-to-be-able-to-create-a-search-for-a-product;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter \"Slip photo frame\" to be searched",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click search button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "product should display",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.am_on_the_homepage()"
});
formatter.result({
  "duration": 1679920312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Slip photo frame",
      "offset": 9
    }
  ],
  "location": "Search.i_enter_to_be_searched(String)"
});
formatter.result({
  "duration": 597780824,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_search_button()"
});
formatter.result({
  "duration": 6550401157,
  "status": "passed"
});
formatter.match({
  "location": "Search.product_should_display()"
});
formatter.result({
  "duration": 44523554,
  "status": "passed"
});
formatter.uri("dunStores.feature");
formatter.feature({
  "line": 1,
  "name": "Store functionality",
  "description": "",
  "id": "store-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 83510,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "As a user I want to be able to click on the list of stores",
  "description": "",
  "id": "store-functionality;as-a-user-i-want-to-be-able-to-click-on-the-list-of-stores",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "am on the store page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the store list has been returned",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I select a store from the list",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be shown the store details for that store",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.am_on_the_homepage()"
});
formatter.result({
  "duration": 1919148899,
  "status": "passed"
});
formatter.match({
  "location": "Stores.am_on_the_store_page()"
});
formatter.result({
  "duration": 2625427350,
  "status": "passed"
});
formatter.match({
  "location": "Stores.the_store_list_has_been_returned()"
});
formatter.result({
  "duration": 2364354171,
  "status": "passed"
});
formatter.match({
  "location": "Stores.i_select_a_store_from_the_list()"
});
formatter.result({
  "duration": 2128657434,
  "status": "passed"
});
formatter.match({
  "location": "Stores.i_should_be_shown_the_store_details_for_that_store()"
});
formatter.result({
  "duration": 1438649196,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "As a user I want to be able to search for store",
  "description": "",
  "id": "store-functionality;as-a-user-i-want-to-be-able-to-search-for-store",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "am on the store page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"\u003cpostcode\u003e\" postcode in the search field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I submit request",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "list of 5 store within 60 miles is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "store-functionality;as-a-user-i-want-to-be-able-to-search-for-store;",
  "rows": [
    {
      "cells": [
        "postcode"
      ],
      "line": 18,
      "id": "store-functionality;as-a-user-i-want-to-be-able-to-search-for-store;;1"
    },
    {
      "cells": [
        "SE18 3LH"
      ],
      "line": 19,
      "id": "store-functionality;as-a-user-i-want-to-be-able-to-search-for-store;;2"
    },
    {
      "cells": [
        "BH8 8FH"
      ],
      "line": 20,
      "id": "store-functionality;as-a-user-i-want-to-be-able-to-search-for-store;;3"
    },
    {
      "cells": [
        "LE4 5DB"
      ],
      "line": 21,
      "id": "store-functionality;as-a-user-i-want-to-be-able-to-search-for-store;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 68923,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "As a user I want to be able to search for store",
  "description": "",
  "id": "store-functionality;as-a-user-i-want-to-be-able-to-search-for-store;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "am on the store page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"SE18 3LH\" postcode in the search field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I submit request",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "list of 5 store within 60 miles is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.am_on_the_homepage()"
});
formatter.result({
  "duration": 2457350314,
  "status": "passed"
});
formatter.match({
  "location": "Stores.am_on_the_store_page()"
});
formatter.result({
  "duration": 2758898092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SE18 3LH",
      "offset": 9
    }
  ],
  "location": "Stores.i_enter_postcode_in_the_search_field(String)"
});
formatter.result({
  "duration": 729559487,
  "status": "passed"
});
formatter.match({
  "location": "Stores.i_submit_request()"
});
formatter.result({
  "duration": 1167287521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    },
    {
      "val": "60",
      "offset": 23
    }
  ],
  "location": "Stores.list_of_store_within_miles_is_displayed(int,int)"
});
formatter.result({
  "duration": 644613118,
  "status": "passed"
});
formatter.before({
  "duration": 39750,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "As a user I want to be able to search for store",
  "description": "",
  "id": "store-functionality;as-a-user-i-want-to-be-able-to-search-for-store;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "am on the store page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"BH8 8FH\" postcode in the search field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I submit request",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "list of 5 store within 60 miles is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.am_on_the_homepage()"
});
formatter.result({
  "duration": 2241255800,
  "status": "passed"
});
formatter.match({
  "location": "Stores.am_on_the_store_page()"
});
formatter.result({
  "duration": 1548842184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BH8 8FH",
      "offset": 9
    }
  ],
  "location": "Stores.i_enter_postcode_in_the_search_field(String)"
});
formatter.result({
  "duration": 928175994,
  "status": "passed"
});
formatter.match({
  "location": "Stores.i_submit_request()"
});
formatter.result({
  "duration": 1168355645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    },
    {
      "val": "60",
      "offset": 23
    }
  ],
  "location": "Stores.list_of_store_within_miles_is_displayed(int,int)"
});
formatter.result({
  "duration": 636224929,
  "status": "passed"
});
formatter.before({
  "duration": 39385,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "As a user I want to be able to search for store",
  "description": "",
  "id": "store-functionality;as-a-user-i-want-to-be-able-to-search-for-store;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "am on the store page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"LE4 5DB\" postcode in the search field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I submit request",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "list of 5 store within 60 miles is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.am_on_the_homepage()"
});
formatter.result({
  "duration": 2705907215,
  "status": "passed"
});
formatter.match({
  "location": "Stores.am_on_the_store_page()"
});
formatter.result({
  "duration": 2326008164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LE4 5DB",
      "offset": 9
    }
  ],
  "location": "Stores.i_enter_postcode_in_the_search_field(String)"
});
formatter.result({
  "duration": 313110074,
  "status": "passed"
});
formatter.match({
  "location": "Stores.i_submit_request()"
});
formatter.result({
  "duration": 1177359402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 8
    },
    {
      "val": "60",
      "offset": 23
    }
  ],
  "location": "Stores.list_of_store_within_miles_is_displayed(int,int)"
});
formatter.result({
  "duration": 901511165,
  "status": "passed"
});
formatter.uri("searchCheckout.feature");
formatter.feature({
  "line": 1,
  "name": "Search to checkout",
  "description": "",
  "id": "search-to-checkout",
  "keyword": "Feature"
});
formatter.before({
  "duration": 54336,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Search for product proceed to checkout",
  "description": "",
  "id": "search-to-checkout;search-for-product-proceed-to-checkout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I search for product",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I reserve to collect and pay in store",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I choose store",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I confirm my details",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "My reservation should be made",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.am_on_the_homepage()"
});
formatter.result({
  "duration": 1785402465,
  "status": "passed"
});
formatter.match({
  "location": "Search_Checkout.i_search_for_product()"
});
formatter.result({
  "duration": 7962627303,
  "status": "passed"
});
formatter.match({
  "location": "Search_Checkout.i_proceed_to_checkout()"
});
formatter.result({
  "duration": 8982655827,
  "status": "passed"
});
formatter.match({
  "location": "Search_Checkout.i_reserve_to_collect_and_pay_in_store()"
});
formatter.result({
  "duration": 284592710,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003ca href\u003d\"https://qa1.dunelm.com/ROCSStoreSelectionView?catalogId\u003d10002\u0026amp;langId\u003d-1\u0026amp;storeId\u003d10151\" id\u003d\"collectFromStore\" class\u003d\"btn btn-primary\"\u003e...\u003c/a\u003e is not clickable at point (997, 954). Other element would receive the click: \u003cli id\u003d\"second-spot\" class\u003d\"outer1\"\u003e...\u003c/li\u003e\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027DUN107052T\u0027, ip: \u002710.70.15.59\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\Ajoseph\\AppData\\Local\\Temp\\scoped_dir14536_20583}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d67.0.3396.99, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: e1bfe1b4c0a1f45408c5f99f01e8fcd4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat sun.reflect.GeneratedMethodAccessor8.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat pageObject.BasketPage.click_ReserveOnline(BasketPage.java:49)\r\n\tat stepDefinition.Search_Checkout.i_reserve_to_collect_and_pay_in_store(Search_Checkout.java:57)\r\n\tat ✽.And I reserve to collect and pay in store(searchCheckout.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Search_Checkout.i_choose_store()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search_Checkout.i_confirm_my_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search_Checkout.my_reservation_should_be_made()"
});
formatter.result({
  "status": "skipped"
});
});