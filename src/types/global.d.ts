export declare global {
  export interface Window {
    gtag: (...params) => void;
    ga: (...params) => void;
    dataLayer: any[];
    _hsq: {
      push: (...params) => void
    }
  }
}
