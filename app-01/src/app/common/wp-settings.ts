import API_JSON from 'assets/json/api_urls_aws.json';
import KEYCLOAK_JSON from 'assets/json/keycloak.json';

export const WpRestApi: string = API_JSON.BASE_URL_LAMBDA_API;
export const WpRestApiWp: string = API_JSON.BASE_URL_LAMBDA;

export const WpKeyCloak = KEYCLOAK_JSON;

import INPUT_RESOURCE from 'assets/json/input-resource.json';

export const WijmoLicenseKey: string = INPUT_RESOURCE.WIJMO_LICENSE_KEY;

export const WpLambdaUrl: string = API_JSON.BASE_URL_LAMBDA_API;
