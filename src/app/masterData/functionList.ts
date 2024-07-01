import { urls } from "./urls"
export let functionList = {
    info: {
        propertyType: ['Wohnungen', 'Häuser', 'Büro']

    },

    clearEtag: (Etag: any) => {

        Etag = Etag.replace('"', "");
        Etag = Etag.replace('"', "");
        return Etag;
    },
    setItem(key: any, value: any) {
        if (['enquiryData', 'enquiryType'].indexOf(key) > -1) {
            localStorage.setItem(key, value);
        } else {
            if (value != "undefiend") {
                sessionStorage.setItem(key, value);
            }

        }
    },
    getItem(key: any) {
        if (['IdToken', 'AccessToken', 'RefreshToken', 'loggedInUser',
            'enumValues', 'info', 'userType', 'loggedInUser', 'assignedModules', 'enquiryData', 'enquiryType'].indexOf(key) > -1) {
            return localStorage.getItem(key);
        } else {
            return sessionStorage.getItem(key);
        }

    },
    removeItem(key: any) {
        if (['enquiryData', 'enquiryType'].indexOf(key) > -1) {
            return localStorage.removeItem(key);
        } else {
            return sessionStorage.removeItem(key);
        }
    },

    getDataForDoc: (data: any, projectInfo: any) => {
        return {
            "operate_documents": {
                "document_name": data['document_name'],
                "dump_path": data['key'],
                "classified": "uploaded",
                "createdby": projectInfo['created_by'],
                "updated_by": projectInfo['created_by'],
                "etag": data['etag'],
                "analyze_type": "",
                "doc_analyze_path": "",
                "user_classified_type": "",
                "docname_with_time": data['document_name'],
                "file_extension": data.ext,
                "auto_id": "document_id"
            },
            "operate_document_mainproject": {
                "relation": [
                    {
                        "document_id": "operate_documents"
                    }
                ],
                "main_project_id": projectInfo['id'],
                "auto_id": "id"
            }
        };
    },
    unsubscribeAll: (subscription: any) => {
        if (subscription) {
            Object.keys(subscription).forEach(ele => {
                subscription[ele]['unsubscribe']();
                if (ele) {
                    if (typeof subscription[ele] != "undefined") {
                        subscription[ele]['unsubscribe']();
                    }

                }

            })
        }

    },

    toBase64: (file: any) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    },

    b64toBlob(dataURI: any) {
        var byteString = atob(dataURI.split(',')[1]);
        var type = dataURI.split(',')[0].split(':')[1].split(';')[0]
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: type });
    },

    blobToBase64(blob: any) {
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => {
            var base64data = reader.result;
        }
    },

    getUserName(ele: any) {
        let name = []
        if (ele.firstName) {
            name.push(ele.firstName)
        }
        if (ele.lastName) {
            name.push(ele.lastName)
        }

        if (name.length < 1) {
            name.push(ele.email)
        }

        return name.join(" ").trim();
    },
    getHTMLOfSelection: () => {
        var range;
        var d = document as any;
        if (d['selection'] && d['selection'].createRange) {
            range = d['selection'].createRange();
            return range.htmlText;
        }
        else if (window.getSelection) {
            var selection = window.getSelection() as any;
            if (selection.rangeCount > 0) {
                range = selection.getRangeAt(0);
                var clonedSelection = range.cloneContents();
                var div = document.createElement('div');
                div.appendChild(clonedSelection);
                return div.innerHTML;
            }
            else {
                return '';
            }
        }
        else {
            return '';
        }
    },
    getLoginUserInfo: () => {
        let loggedInUser = localStorage.getItem("loggedInUser") as any;
        if (loggedInUser != undefined || loggedInUser != null) {
            loggedInUser = JSON.parse(loggedInUser)
            loggedInUser['email_id'] = loggedInUser['email']
            return loggedInUser;
        } else {
            loggedInUser = localStorage.getItem("info");
            return JSON.parse(loggedInUser);
        }

    },

    getProjectInfo: () => {

        let info = sessionStorage.getItem("globalProjectInfo");
        if (info) {
            return JSON.parse(info);
        } else {
            return undefined
        }

    },
    getProjectInfoOperate: () => {
        let info = sessionStorage.getItem("projectInfoId");
        if (info) {
            return JSON.parse(info);
        } else {
            return undefined
        }

    },
    convertString: (val: any) => {
        let str = val.trim().split(" ");
        str = str.filter((r : any) => r != '');
        let newStr = functionList.replaceUmlauts(str.join("_"));
        return newStr;
    }, replaceUmlauts: (value: any) => {
        value = value.toLowerCase();
        value = value.replace(/ä/g, 'ae');
        value = value.replace(/ö/g, 'oe');
        value = value.replace(/ü/g, 'ue');
        value = value.replace(/ß/g, 'ss');
        value = value.replace(/[^A-Za-z0-9\-_.,]/g, '-');
        return value;
    },
    formatSizeUnits: (bytes: any) => {
        if (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + " GB"; }
        else if (bytes >= 1048576) { bytes = (bytes / 1048576).toFixed(2) + " MB"; }
        else if (bytes >= 1024) { bytes = (bytes / 1024).toFixed(2) + " KB"; }
        else if (bytes > 1) { bytes = bytes + " bytes"; }
        else if (bytes == 1) { bytes = bytes + " byte"; }
        else { bytes = "0 bytes"; }
        return bytes;
    },
    removeSpecialCharater: (str: any) => {
        str = str.replace(/([^a-z0-9+-\s]+)/gi, '`')
        str = str.replace(/\s/g, '`');

        str = str.replace(/([^a-z0-9+-\s]+-)/gi, '`')
        str = str.replace(/\s/g, '`');
        str = str.trim();
        return str;
    },

    removeSpecialCharaterFileName: (str: any) => {
        str = str.replace(/\,/g, '-');
        str = str.trim();
        return str;



    },

    configUrl: () => {
        let url = { operateUrl: "" };
        if (window.location.hostname.includes("one.jf.ag-development")) {
            url = urls.devUrl;
        } else if (window.location.hostname.includes("staging-jf-ag")) {
            url = urls.stageUrl;
        } else if (window.location.hostname.includes("dkyk39irx80si") || window.location.hostname.includes("d1b8chkgi7rld8")) {
            url = urls.stageUrl;
        } else if (window.location.hostname.includes("jf.ag")) {
            url = urls.prodUrl;
        } else if (window.location.hostname.includes("localhost")) {
            url = JSON.parse(localStorage.getItem("configUrl") as any)
        } else if (window.location.hostname.includes("dj85unnzyryb4") || window.location.hostname.includes("dmobfsm0xsux5") || window.location.hostname.includes("dt5p2b3aynlg8")) {
            url = urls.devUrl;
        }
        else {
            url = urls.prodUrl;
        }

        return url;

    }
    ,
    getFileUrlInfo(fileData: any) {
        let fileInfo = fileData;
        let fileName = fileInfo['name'].split(".");
        let ext = fileName.pop();

        return { name: fileName.join(""), ext: ext };
    },

    getConfigUrl: () => {
        let config = localStorage.getItem('configUrl');
        if (config != undefined || config != null) {
            let configData = JSON.parse(config);;
            return configData
        }
    },

}





