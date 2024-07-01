import { urls as configUrl } from "one-jf-config";
// import { urls as configUrl } from "projects/one-jf-config/src/public-api";
// export let urls = configUrl
export let urls = 
{
    prodUrl: prodUrl(),
    stageUrl: stageUrl(),
    devUrl: devUrl(),
    localUrl: localUrl(),
}


function urlInfo() {
    var url: any = {
        operateUrl: "",
        jfOneBaseUrl: "",
        hcmUrl: "",
        region: "",
        currentUrl: "",
        share_project: "",
        companyId: "",
        loginUrl: "",
        homePageUrl: "",
        editorJs: "",
        productionS3Bucket: "",
        survay: "",
        permissionUrl: '',
        shareProject: '',
        jira_portal: ""
    };

    return url;
}

function stageUrl() {

    let url = urlInfo();
    url = load();
    //url['websocketUrl'] = "wss://em9k6rd7x7.execute-api.eu-central-1.amazonaws.com/production";
    return url;
}


function prodUrl() {
    let url = urlInfo();
    url = load();
   // url['websocketUrl'] = "wss://em9k6rd7x7.execute-api.eu-central-1.amazonaws.com/production";
    return url;
}
function devUrl() {

    let url = urlInfo();
    url = load();
  //  url['websocketUrl'] = "wss://waom1sknre.execute-api.ap-south-1.amazonaws.com/development"
    return url;
}

function localUrl() {
    let url = urlInfo();
    url =load();
    url['currentUrl'] = "http://localhost:4200/";
    url['currentUrl'] = "/";
    url['homePageUrl'] = url['currentUrl'];
    url['shareProject'] = '/';
    return url;
}


function load() {
    let url = {} as any;

    let stringInfo: any = localStorage.getItem('configUrl')
    if (stringInfo) {
        url = JSON.parse(stringInfo);
        // Check if 'onboarding' key exists and its value is not empty
        if (!url.hasOwnProperty('onboarding') || !url['onboarding']) {
            // Add the 'onboarding' key with the provided value
            url['onboarding'] = 'https://fxb5vcoax1.execute-api.ap-southeast-1.amazonaws.com/production/';
            // Update the 'configUrl' in localStorage
            localStorage.setItem('configUrl', JSON.stringify(url));
        }
    } else {
        url = configUrl.prodNewUrl
        // Check if 'onboarding' key exists and its value is not empty
        if (!url.hasOwnProperty('onboarding') || !url['onboarding']) {
            // Add the 'onboarding' key with the provided value
            url['onboarding'] = 'https://fxb5vcoax1.execute-api.ap-southeast-1.amazonaws.com/production/';
        }
        localStorage.setItem("configUrl", JSON.stringify(url))

    }
    // console.log(url)
    return url;
}


