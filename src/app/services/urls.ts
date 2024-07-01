import { urlsInterface } from './urls.model';
export const Urls: urlsInterface = {
  viewerUrl: configUrl('jira_portal'),
  operateUrl: configUrl('operateUrl'),
  currentUrl: configUrl('currentUrl'),
  hcmUrl: configUrl('hcmUrl'),
  jira_portal: configUrl('jira_portal'),
  jfOneBaseUrl: configUrl('jfOneBaseUrl'),
  loginUrl: configUrl('loginUrl'),
  poolid: configUrl('poolid'),
  s3: "https://"+ configUrl('productionS3Bucket')+".s3."+ configUrl('region') +".amazonaws.com/",
  encrypt: {
    'key': '34nksf0j23knfspjmadasdasdfasdasd',
    'iv': 'jkbsdgbjksnvssoe'
  },
  onboardingNew: configUrl('onboardingNew'),
  marketplace: configUrl('marketplace')
}

function configUrl(key: any) {
  let urlsObj: any = localStorage.getItem("configUrl");
  if (urlsObj) {
    urlsObj = JSON.parse(urlsObj);
    return urlsObj[key]
  } else {
    return ''
  }
}
