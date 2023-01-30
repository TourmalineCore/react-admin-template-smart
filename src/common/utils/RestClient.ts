// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// function RestClient(this: any) {
//   const baseUrlPart = '/api/portfolioplanning';

//   this.get = async function (url: string, config: AxiosRequestConfig, params: any) {
//     const result = await this._get(url, config, params);
//     return result?.data;
//   };

//   this.post = async function (url:string, payload:any, config: AxiosRequestConfig, queryArgs:any) {
//     return this._post(url, payload, config, queryArgs);
//   };

//   this._get = function (url: string, config: any, params: AxiosRequestConfig) {
//     return this._execute(axios.get(`${baseUrlPart}/${url}`, params ? { params } : undefined), config);
//   };

//   this._post = function (url: string, payload: any, config: any, queryArgs: AxiosRequestConfig) {
//     return this._execute(
//       axios.post(`${baseUrlPart}/${url}`, payload, queryArgs ? { params: queryArgs } : undefined),
//       config,
//     );
//   };

//   this._execute = function (promise:Promise<AxiosResponse<any, any>>, config: any) {
//     let success = true;
//     const result = promise
//       .catch((e) => {
//         success = false;
//         if (config.onError) {
//           config.onError(getFailedRequestsStatus(e, config));
//         } else {
//           handleError(getFailedRequestsStatus(e, config));
//         }
//       })
//       .then((value) => {
//         if (success && config.onSuccess) {
//           config.onSuccess(value);
//         }
//         return value;
//       });

//     return this._executeWithinProgress(result, config);
//   };

//   this._executeWithinProgress = function (promise, config = {}) {
//     if (progressState.showingProgress || config.suppressProgress) {
//       return promise;
//     }

//     this._toggleProgress(true, config);

//     return promise.finally(() => {
//       this._toggleProgress(false, config);
//     });
//   };

//   this._toggleProgress = function (isInProgress, config) {
//     isInProgress ? progressState.showProgress() : progressState.hideProgress();
//   };
// }

// export default RestClient;

console.log('dsfs');
