import { functionList } from "src/app/masterData/functionList";

export const environment = {
  production: true,
  
  copyUrl: window.location.host,
  appLink: functionList.configUrl()['homePageUrl'],
  baseUrl: functionList.configUrl()['operateUrl'],
  jfOneBaseUrl: functionList.configUrl()['jfOneBaseUrl'],
  jira_portal : functionList.configUrl()['jira_portal'],

  operateAnalysisIp: "http://65.1.73.175:5002/",
  homePageUrl: functionList.configUrl()['productionS3Bucket']+"my-dashboard/project-detail",
  baseUrlEc2: "https://rv01vpsyyk.execute-api.ap-south-1.amazonaws.com/development/",
  s3Browser: functionList.configUrl()['productionS3Bucket'],
  s3: "https://"+functionList.configUrl()['productionS3Bucket']+".s3."+functionList.configUrl()['region'] +".amazonaws.com/",
  encrypt: {
    key: '34nksf0j23knfspjmadasdasdfasdasd',
    iv: 'jkbsdgbjksnvssoe'
  },
  operateUrl  : "https://vmamsffa5e.execute-api.eu-central-1.amazonaws.com/production/",

  "job_asmnt":functionList.configUrl()['hcmUrl'],
  domain: functionList.configUrl()['shareProject'],
  shareProject : functionList.getConfigUrl()['shareProject'],
  subDomains: {
    hcm: 'https://www.jf.ag/hcm/',
    safety: 'https://www.jf.ag/safespot/',
    email: 'https://www.jf.ag/email/',
    jobs: 'https://www.jf.ag/job/',
    walkthrough: 'https://www.jf.ag/360/',
    operate: 'https://www.jf.ag/operate/',
    highway: 'https://www.jf.ag/highway/',
    pms: 'https://www.jf.ag/pms/'
  }


};


