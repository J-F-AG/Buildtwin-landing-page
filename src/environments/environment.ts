import { functionList } from "src/app/masterData/functionList";

export const environment = {
  production: false,
  "job_asmnt": functionList.configUrl()['hcmUrl'],
  encrypt: {
    key: '34nksf0j23knfspjmadasdasdfasdasd',
    iv: 'jkbsdgbjksnvssoe'
  }, 

  //Operate   

  copyUrl: functionList.configUrl()['homePageUrl'],
  appLink: functionList.configUrl()['homePageUrl'],
  baseUrl: functionList.configUrl()['operateUrl'],
  jfOneBaseUrl: functionList.configUrl()['jfOneBaseUrl'],
  jira_portal : functionList.configUrl()['jira_portal'],
  operateAnalysisIp: "http://65.1.73.175:5002/",
  homePageUrl: functionList.configUrl()['productionS3Bucket']+"my-dashboard/project-detail",
  baseUrlEc2: "https://rv01vpsyyk.execute-api.ap-south-1.amazonaws.com/development/",
  s3Browser: functionList.configUrl()['productionS3Bucket'],
  s3: "https://"+functionList.configUrl()['productionS3Bucket']+".s3."+functionList.configUrl()['region'] +".amazonaws.com/",
  operateUrl  : "https://c1s2ev87bk.execute-api.ap-south-1.amazonaws.com/development/",
 
  domain: 'https://dmobfsm0xsux5.cloudfront.net/',

  shareProject : functionList.getConfigUrl()['shareProject'],
  subDomains: {
    hcm: 'https://dmobfsm0xsux5.cloudfront.net/hcm/',
    safety: 'https://dmobfsm0xsux5.cloudfront.net/safespot/',
    email: 'https://dmobfsm0xsux5.cloudfront.net/email/',
    jobs: 'https://dmobfsm0xsux5.cloudfront.net/job/',
    walkthrough: 'https://dmobfsm0xsux5.cloudfront.net/360/',
    operate: 'https://dmobfsm0xsux5.cloudfront.net/operate/',
    highway: 'https://dmobfsm0xsux5.cloudfront.net/highway/',
    pms: 'https://dmobfsm0xsux5.cloudfront.net/pms/'
  }
};


