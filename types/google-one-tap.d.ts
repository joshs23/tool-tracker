declare module 'google-one-tap' {
  export interface CredentialResponse {
    credential: string;
    select_by: string;
  }

  export interface accounts {
    id: {
      initialize: (config: any) => void;
      prompt: (callback?: (notification: any) => void) => void;
      renderButton: (element: HTMLElement, config: any) => void;
      cancel: () => void;
    };
  }
}
