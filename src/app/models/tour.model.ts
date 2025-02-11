interface Translatable<T> {
  en: T;
  ru: T;
  am: T;
}

export interface Tour {
  id: number;
  name: Translatable<string>;
  description: Translatable<string>;
  images: string[];
  locationImg: string;
}
