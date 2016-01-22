<br>

### Installation
To get you started, we have come up with three different installation methods for KendoUI. Below, we will explain these method, so you can decide which installation method to use. After installation, we recommend that you read [these instructions](#/help/docs/app_developers_tutorials/7._what_you_need_to_know) in order to get started using the bridge.
<br><br>

#### Core
If you do not have a license of KendoUI PRO, then you can use Kendo CORE for free. As Kendo Core is available on Github, this installation method is easiest.

__You should use this installation method if you do not have a license for KendoUI PRO__
<br><br>

#### JSPM-git
JSPM-git is a JSPM endpoint plugin that allows you to download KendoUI PRO from Telerik's bower endpoint. You need valid, working, Telerik credentials for this to work. When you download KendoUI via JSPM-git, it is downloaded in the `jspm_packages/kendo` folder.

__We recommend this installation method if you have a Kendo PRO license and have Telerik credentials__
<br><br>

#### Vendors
If you do not have Telerik credentials, but do have a license and the files of KendoUI PRO, you can install KendoUI via the "Vendors" method. Essentially, this is a folder named `vendors` containing `js` and `styles` folders from KendoUI PRO distribution, located at the root of your installation. With a JSPM configuration option, you tell the aurelia-kendoui-bridge to access the Kendo files from this `vendors` folder - as shown in [this configuration map entry](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/blob/master/sample/config.js#L47).


__We recommend this method if you have Kendo PRO files, have a license, but don't have Telerik credentials or if you have an evaluation copy of KendoUI PRO__.
