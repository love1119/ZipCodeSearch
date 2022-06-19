type Place = {
  'place name': string;
  longitude: string;
  state: string;
  'state abbreviation': string;
  latitude: string;
};

type ZipResult = {
  'post code'?: string;
  country?: string;
  'country abbreviation'?: string;
  places?: Place[];
};

export type {Place, ZipResult};
