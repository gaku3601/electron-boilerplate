export interface InterfaceApi {
  openChildWindow: () => void;
}

declare global {
  interface Window {
    api: InterfaceApi
  }
}
