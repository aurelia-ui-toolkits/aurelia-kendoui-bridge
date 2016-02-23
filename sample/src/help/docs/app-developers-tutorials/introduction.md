<br>

### 1. Introduction
<br>

The collection of articles contained in the **App developers tutorials** help category, _which begins with this article you are reading now_,  presents several short tutorials on using the **[KendoUI components](http://aurelia-ui-toolkits.github.io/demo-kendo/#/help/docs/about_this_application/2._components_catalog)** from **[Aurelia-KendoUI-bridge](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge)** Aurelia plugin.
<br>

In this tutorial section you will develop the app which features the few selected Aurelia KendoUI `components`. (`autocomplete`, `button`, `chart` and `grid`). In order to be able to do that, you need to have one of the tree supported forms of KendoUI SDK, as described on the **[Installation page](#/installation/description)** This same application that you will build from the scratch, also exists in its finished form **[here](https://github.com/aurelia-ui-toolkits/skeleton-plugin-kendo)**, provided as a courtesy to allow you to "peek" into some details that might have escaped you.
<br><br>

#### Important note
The whole section named **Bridge developers tutorials** is intended solely to new bridge projects contributors - a lot narrower class than people interested **App developers tutorials** dedicated to all Aurelia application developers that want to use KendoUI components provided by the Aurelia-KendoUI-bridge.


* * *

Starting with one of the most simple components -  Autocomplete, we will show how can this component be added to the well known **[Aurelia Skeleton Navigation - ES2016 version](https://github.com/aurelia/skeleton-navigation/tree/master/skeleton-es2016)** app and then add several additional components (Button, Chart and Grid). By the end of the tutorial we will have completed the **[Skeleton Navigation KendoUI](https://github.com/aurelia-ui-toolkits/skeleton-navigation-kendo)** shown below:
<br>
<br>
<p align=center>
  <img src="http://i.imgur.com/DFLEi5K.png"></img>
 <br><br>
</p>

<br>

KendoUI SDK supports the [declarative programming model](http://docs.telerik.com/kendo-ui/intro/installation/markup) - feature that makes if a perfect partner for Aurelia's rich [adaptive binding](http://eisenbergeffect.bluespire.com/aurelias-adaptive-binding/).

<br>

**Note**: Declarative programming is a programming paradigm consisting of description **what the program needs to accomplish** (in terms of the problem domain) instead of describing **how to accomplish that** as a sequence of programming language primitive and API (**[wikipedia](https://en.wikipedia.org/wiki/Declarative_programming)**).
<br>
<br>

#### Important note

All subsequent tutorials assume that you used the **HAVING KENDOUI ALREADY: VENDORS** approach described  on the **[Help on Installation](#/help/docs/about_this_application/5._installation)** page. Other types of KendoUI SDK installation do not impose any difference other than the location of the KendoUI SDK, so we are using this model to accomodate the most likely type of the user - either already having KendoUI Pro SDK, or getting a trial SDK from **[here](http://www.telerik.com/download-trial-file/v2/kendo-ui)**

* * *
<br>
#### Next page: [Setup](#/help/docs/app_developers_tutorials/2._setup)
