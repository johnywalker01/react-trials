import { WpRestApi } from "app/common/wp-settings";
import axios, { AxiosInstance, AxiosPromise } from "axios";
import { UserService } from "app/services/user.service";
import { WpLambdaUrl } from "app/common/wp-settings";

export class WpAxiosService {
  static service_instance: WpAxiosService;
  private _instance: AxiosInstance;

  static GetInstance = (): WpAxiosService => {
    if ( !WpAxiosService.service_instance ) {
      WpAxiosService.service_instance = new WpAxiosService();
      WpAxiosService.service_instance.init();
    }
    UserService.GetInstance().updateToken( function () { } );

    return WpAxiosService.service_instance;
  };

  /**
   * Initialize the WP-Axios service class.
   */
  private init = () => {
    // Create instance called instance
    this._instance = axios.create( {
      baseURL: WpRestApi,
    } );
  };

  public sampleApiGet = ( baseUri: string, data: {}, ): AxiosPromise<any> => {
    // this._instance.defaults.headers = {
    //   'Access-Control-Request-Method': 'GET',
    //   'Access-Control-Request-Headers': 'Content-Type, x-requested-with',
    //   'Origin': 'http://localhost:3001'
    // },
    this._instance.defaults.baseURL = ( baseUri ) ? baseUri : WpRestApi;

    return this._instance( {
      'method': 'GET',
      'params': new URLSearchParams( data ),
    } );
  }
  public sampleApiPost = ( baseUri: string, data: {}, ): AxiosPromise<any> => {
    // this._instance.defaults.headers = {
    //   'Access-Control-Request-Method': 'GET',
    //   'Access-Control-Request-Headers': 'Content-Type, x-requested-with',
    //   'Origin': 'http://localhost:3001'
    // },
    this._instance.defaults.headers.common[ 'Authorization' ] = 'AWS4-HMAC-SHA256 Credential=AKIASHSSCCLXWYTYRHGH/20210922/ap-northeast-1/execute-api/aws4_request, SignedHeaders=content-length;content-type;host;x-amz-date, Signature=45eacb3d44a89d049a6db38b2f59c53aeefeb263b248dc358dc45c819e9d9ac1';
    this._instance.defaults.baseURL = ( baseUri ) ? baseUri : WpRestApi;

    return this._instance( {
      'method': 'POST',
      'data': data,
    } );
  }


  public getData = ( query: string, params: object, baseUri?: string ): AxiosPromise<any> => {
    this._instance.defaults.headers.common[ 'Authorization' ] = 'Bearer ' + UserService.GetInstance().getToken();
    this._instance.defaults.baseURL = ( baseUri ) ? baseUri : WpRestApi;

    return this._instance( {
      'method': 'GET',
      'url': query,
      'params': params,
    } );
  }

  public postData = ( query: string, data: object, baseUri?: string ): AxiosPromise<any> => {
    this._instance.defaults.headers.common[ 'Authorization' ] = 'Bearer ' + UserService.GetInstance().getToken();
    this._instance.defaults.baseURL = ( baseUri ) ? baseUri : WpRestApi;

    return this._instance( {
      'method': 'POST',
      'url': query,
      'data': data,
    } );
  }

  public deleteData = ( query: string, data: object, baseUri?: string ): AxiosPromise<any> => {
    this._instance.defaults.headers.common[ 'Authorization' ] = 'Bearer ' + UserService.GetInstance().getToken();
    this._instance.defaults.baseURL = ( baseUri ) ? baseUri : WpRestApi;

    return this._instance( {
      'method': 'DELETE',
      'url': query,
      'params': data,
    } );
  }

  public postDataForFile = ( query: string, formData: FormData, baseUri?: string ): AxiosPromise<any> => {
    this._instance.defaults.baseURL = ( baseUri ) ? baseUri : WpRestApi;
    return this._instance( {
      'method': 'POST',
      'url': query,
      'data': formData,
    } );
  }
  public lambdaGet = ( data: {}, baseUri?: string, ): AxiosPromise<any> => {
    this._instance.defaults.baseURL = ( baseUri ) ? baseUri : WpLambdaUrl;

    return this._instance( {
      'method': 'GET',
      'params': new URLSearchParams( data ),
    } );
  }

  public lambdaPost = ( params: {}, data: {}, baseUri?: string, ): AxiosPromise<any> => {
    this._instance.defaults.baseURL = ( baseUri ) ? baseUri : WpLambdaUrl;

    return this._instance( {
      'method': 'POST',
      'params': new URLSearchParams( params ),
      'data': data,
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      }
    } );
  }
}