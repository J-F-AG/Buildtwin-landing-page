export interface urlsInterface {
    viewerUrl: string;
    operateUrl: string;
    currentUrl: string;
    hcmUrl: string;
    jira_portal: string;
    jfOneBaseUrl: string;
    loginUrl: string;
    encrypt: EncryptDecrypt;
    poolid: string;
    s3: string;
    onboardingNew: string;
    marketplace: string;
}
interface EncryptDecrypt {
    'key': string;
    'iv': string;
}
