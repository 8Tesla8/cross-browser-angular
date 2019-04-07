
export class BrowserDefinder {

    private Opera = "Opera";
    private Firefox = "Firefox";
    private InternetExplorer = "Internet Explorer";
    private Edge = "Microsoft Edge";
    private Chrome = "Google Chrome or Chromium";
    private Safari = "Safari";


    private _currentBrowser = undefined;
    public get currentBrowser() {
        return this._currentBrowser;
    }

    constructor() {
        this.defineBrowser();
    }

    public defineBrowser(): string {
        var browserType, userAgent = navigator.userAgent;

        // The order matters here, and this may report false positives for unlisted browsers.

        if (userAgent.indexOf(this.Firefox) > -1) {
            browserType = this.Firefox; // "Mozilla Firefox";
            // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
        } 
        else if (userAgent.indexOf(this.Opera) > -1 || userAgent.indexOf("OPR") > -1) {
            browserType = this.Opera; 
            //"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
        } 
        else if (userAgent.indexOf("Trident") > -1) {
            browserType = this.InternetExplorer; // "Microsoft Internet Explorer";
            // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
        } 
        else if (userAgent.indexOf("Edge") > -1) {
            browserType = this.Edge; // "Microsoft Edge";
            // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
        } 
        else if (userAgent.indexOf("Chrome") > -1) {
            browserType = this.Chrome; // "Google Chrome or Chromium";
            // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
        } 
        else if (userAgent.indexOf(this.Safari) > -1) {
            browserType = this.Safari; // "Apple Safari"
            // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
        }
        else {
            browserType = "unknown";
        }

        this._currentBrowser = browserType;

        return browserType;
    }

    public isCurrentBrowserInternetExplorer(): boolean{
        return this.currentBrowser === this.InternetExplorer; 
    }

}