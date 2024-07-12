export namespace CanisterAuthEndppoint {
  export const ApiTags = 'Canister Auth';

  export enum Controller {
    GroupAPI = 'canister/auth',
    whoAmI = 'whoami',
    updateControllers = 'update-controllers',
  }
}
