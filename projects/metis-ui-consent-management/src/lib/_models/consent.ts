export interface CMData {
  [key: string]: boolean;
}

export interface ConsentItem {
  name: string;
  label?: string;
  callback?: (consent: boolean) => void;
  cookies?: Array<RegExp>;
  required?: boolean;
  description?: string;
  purposes?: Array<string>;
}
